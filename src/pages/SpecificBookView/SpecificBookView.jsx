import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useBooks, useCart, useMainHeight } from 'context';
import { fetchBook } from 'api';
import { Spinner, Button, Tags, CountForm } from 'components';
import imageNotFound from 'images/notFound.png';
import s from './SpecificBookView.module.css';

export default function SpecificBookView({ addToCart }) {
  const location = useLocation();

  const books = useBooks();
  const cart = useCart();
  const mainHeight = useMainHeight();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [book, setBook] = useState({});

  const bookId = location.pathname.slice(8, location.pathname.length);
  const selectedBook = cart.filter(book => book._id === bookId)[0];
  const savedBook = books.filter(book => book._id === bookId)[0];

  const [count, setCount] = useState(selectedBook ? selectedBook.count : 0);

  useEffect(() => {
    if (books.length > 0) {
      setBook(savedBook);
    } else {
      setLoading(true);

      fetchBook(bookId)
        .then(book => {
          setBook(book);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }
  }, [bookId, books.length, savedBook]);

  return (
    <main className={s.page} style={{ minHeight: mainHeight }}>
      {loading && <Spinner size={70} color="blue" />}

      {error && (
        <p className={s.error}>Whoops, something went wrong: {error.message}</p>
      )}

      {book && (
        <>
          <img
            src={book.image !== '' ? book.image : imageNotFound}
            alt={book.title}
            className={s.img}
          />

          <div className={s.thumb}>
            <div className={s.display}>
              <div className={s.title}>
                <h3 className={s.bookname}>{book.title}</h3>

                <p className={s.mb}>
                  <span className={s.boldfont}>Book author: </span>
                  {book.author}
                </p>

                <p className={s.mb}>
                  <span className={s.boldfont}>Book tags: </span>
                  {book.title && <Tags title={book.title} />}
                </p>
              </div>

              <div className={s.control}>
                <p className={s.count}>
                  <span className={s.boldfont}>Price: </span>${book.price}
                </p>

                <CountForm
                  value={count}
                  price={book.price}
                  min={1}
                  max={42}
                  styles={{
                    formStyle: s.count,
                    labelStyle: s.boldfont,
                    inputStyle: s.input,
                    spanStyle: s.boldfont,
                    totalPriceStyle: s.count,
                  }}
                  setCount={setCount}
                />

                <Button
                  title="Add book to cart"
                  type="button"
                  disabled={count === 0}
                  onClick={() => addToCart({ ...book, count: Number(count) })}
                >
                  Add to cart
                </Button>
              </div>
            </div>

            <p className={s.description}>{book.description}</p>
          </div>
        </>
      )}
    </main>
  );
}

SpecificBookView.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
