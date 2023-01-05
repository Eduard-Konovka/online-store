import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchBooks from 'api/booksApi';
import Spinner from 'components/Spinner';
import BooksList from 'components/BooksList';
import Blank from 'components/Blank';
import imageBlank from 'images/shop.jpg';
import s from './BooksView.module.css';

export default function BooksView({ onClick }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchBooks()
      .then(books => {
        setBooks(books);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={s.bookpage}>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Spinner size={70} color="blue" />}
      {!loading && books.length === 0 && (
        <Blank title="Choose a book" image={imageBlank} alt="Open shop" />
      )}
      {books.length > 0 && <BooksList books={books} onClick={onClick} />}
    </div>
  );
}

BooksView.propTypes = {
  onClick: PropTypes.func.isRequired,
};
