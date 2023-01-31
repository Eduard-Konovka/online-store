import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import fetchBooks from 'api/booksApi';
import Spinner from 'components/Spinner';
import Blank from 'components/Blank';
import IconButton from 'components/IconButton';
import Button from 'components/Button';
import OptionList from 'components/OptionList';
import BookList from 'components/BookList';
import { ReactComponent as SearchIcon } from './search.svg';
import imageBlank from 'images/shop.jpg';
import s from './BooksView.module.css';

export default function BooksView({ onClick }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [booksByName, setBooksByName] = useState([]);
  const [booksByPrice, setBooksByPrice] = useState([]);
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [optionList, setOptionList] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchBooks()
      .then(books => {
        setBooks(books);
        setBooksByName(books);
        setBooksByPrice(books);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const difference = booksByName.filter(book => booksByPrice.includes(book));
    setVisibleBooks(difference);
  }, [booksByName, booksByPrice]);

  useEffect(() => {
    setOptionList(true);
  }, [optionList]);

  function handleNameClick() {
    const visibleBooksToLowerCase = books.map(book => ({
      ...book,
      title: book.title.toLowerCase(),
    }));

    const queryArr = searchByName
      .toLowerCase()
      .split(' ')
      .filter(word => word !== '');

    const targetBooksToLowerCase = visibleBooksToLowerCase.filter(book => {
      let result = !book;

      for (let i = 0; i < queryArr.length; i++) {
        if (book.title.includes(queryArr[i])) {
          result = book;
        }
      }

      return result;
    });

    const bookIds = targetBooksToLowerCase.map(
      bookToLowerCase => bookToLowerCase._id,
    );

    const targetBooks = books.filter(book => bookIds.includes(book._id));

    if (targetBooks.length > 0) {
      setBooksByName(targetBooks);
    } else {
      toast.error('Please enter the correct book title!');
      setBooksByName([]);
    }
  }

  function handlePriceChange(event) {
    if (event.target.value === 'All prices') {
      setBooksByPrice(books);
    } else {
      const targetBooks = books.filter(
        book => book.price === Number(event.target.value),
      );
      setBooksByPrice(targetBooks);
    }
  }

  function reset() {
    setSearchByName('');
    setOptionList(false);
    setBooksByName(books);
    setBooksByPrice(books);
  }

  return (
    <main className={s.bookpage}>
      {error && <p>Whoops, something went wrong: {error.message}</p>}

      {loading && <Spinner size={70} color="blue" />}

      {!loading && books.length === 0 && (
        <Blank
          title="There are currently no books for sale in the store"
          image={imageBlank}
          alt="Open shop"
        />
      )}

      {books.length > 0 && (
        <>
          <section className={s.formBar}>
            <form className={s.formByName}>
              <input
                className={s.inputByName}
                name="searchByName"
                type="text"
                placeholder="Search by book name"
                value={searchByName}
                onChange={e => setSearchByName(e.target.value)}
              />

              <IconButton
                type="button"
                title="Search by book name"
                aria-label="Search by book name"
                onClick={handleNameClick}
              >
                <SearchIcon width="24" height="24" />
              </IconButton>
            </form>

            <form>
              <select className={s.inputByPrice} onChange={handlePriceChange}>
                {optionList && <OptionList books={books} />}
              </select>
            </form>

            <div className={s.reset}>
              <Button type="button" title="Reset all filters" onClick={reset}>
                Reset filters
              </Button>
            </div>
          </section>

          <BookList books={visibleBooks} onClick={onClick} />
        </>
      )}
    </main>
  );
}

BooksView.propTypes = {
  onClick: PropTypes.func.isRequired,
};
