import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchBook } from 'api';
import { Spinner, Button, Tags, CountForm } from 'components';
import imageNotFound from 'images/imageNotFound.png';
import s from './SpecificBookView.module.css';

export default function SpecificBookView({ bookId, addToCart }) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setLoading(true);

    fetchBook(bookId)
      .then(book => {
        setBook(book);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [bookId]);

  function handleClickAddToCart() {
    const obj = {
      _id: book._id,
      count,
    };

    addToCart(obj);
  }

  return (
    <main className={s.bookpage}>
      {error && <p>Whoops, something went wrong: {error.message}</p>}

      {loading && <Spinner size={70} color="blue" />}

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
                  <Tags title={book.title} />
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
                  }}
                  setCount={setCount}
                />

                <Button
                  type="button"
                  title="Signing out of your account"
                  onClick={handleClickAddToCart}
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
  bookId: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};
