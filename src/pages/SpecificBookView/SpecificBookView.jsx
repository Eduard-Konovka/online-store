import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGlobalState } from 'state';
import { fetchBook } from 'api';
import { Spinner, Button, Tags, Links, CountForm } from 'components';
import { GLOBAL } from 'constants';
import imageNotFound from 'assets/notFound.png';
import s from './SpecificBookView.module.css';

export default function SpecificBookView({
  setBooksByTag,
  changeSelectCount,
  addToCart,
}) {
  const location = useLocation();
  const { mainHeight, books, cart } = useGlobalState('global');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [book, setBook] = useState({});

  const bookId = location.pathname.slice(7, location.pathname.length);
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
          <div className={s.row}>
            <img
              src={book.image !== '' ? book.image : imageNotFound}
              alt={book.title}
              className={s.image}
            />

            <div className={s.thumb}>
              <div className={s.monitor}>
                <div className={s.stats}>
                  <h3 className={s.title}>{book.title}</h3>
                  <p className={s.stat}>
                    <span className={s.statName}>Book author: </span>
                    {book.author}
                  </p>

                  <p className={s.stat}>
                    <span className={s.statName}>Book tags: </span>
                    {book.title && (
                      <Tags
                        title={book.title}
                        styles={s.tag}
                        setBooksByTag={setBooksByTag}
                      />
                    )}
                  </p>

                  <p className={s.stat}>
                    <span className={s.statName}>Google links: </span>
                    {book.title && <Links title={book.title} styles={s.link} />}
                  </p>
                </div>

                <div className={s.controls}>
                  <p className={s.count}>
                    <span className={s.boldfont}>Price: </span>${book.price}
                  </p>

                  <CountForm
                    value={count}
                    price={book.price}
                    min={GLOBAL.bookCount.min}
                    max={GLOBAL.bookCount.max}
                    styles={{
                      formStyle: s.count,
                      labelStyle: s.boldfont,
                      inputStyle: s.input,
                      spanStyle: s.boldfont,
                      totalPriceStyle: s.count,
                    }}
                    setCount={count => {
                      setCount(count);
                      selectedBook &&
                        changeSelectCount({
                          count,
                          _id: selectedBook._id,
                        });
                    }}
                  />

                  <div>
                    <Button
                      title="Add book to cart"
                      type="button"
                      disabled={count < 1}
                      styles={s.btn}
                      onClick={() =>
                        addToCart({ ...book, count: Number(count) })
                      }
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>

              <p className={s.finishDescription}>{book.description}</p>
            </div>
          </div>

          <p className={s.startDescription}>{book.description}</p>
        </>
      )}
    </main>
  );
}

SpecificBookView.propTypes = {
  setBooksByTag: PropTypes.func.isRequired,
  changeSelectCount: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};
