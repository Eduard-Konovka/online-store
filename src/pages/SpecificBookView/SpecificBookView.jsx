import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import fetchBook from 'api/bookApi';
import Spinner from 'components/Spinner';
import Button from 'components/Button';
import Tags from 'components/Tags';
import imageNotFound from 'images/imageNotFound.png';
import s from './SpecificBookView.module.css';

export default function SpecificBookView({ bookId, addToCart }) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [qwantity, setQwantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchBook(bookId)
      .then(book => {
        setBook(book);
        setTotalPrice(book.price);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [bookId]);

  function handleChange(event) {
    if (event.target.value > 0 && event.target.value <= 42) {
      setQwantity(event.target.value);
      setTotalPrice(
        (Number(book.price) * Number(event.target.value)).toFixed(2),
      );
    } else {
      toast.error('Please enter a value between 0 and 43!');
    }
  }

  function handleClickAddToCart() {
    const obj = {
      _id: book._id,
      qwantity,
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
                <h2 className={s.bookname}>{book.title}</h2>

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
                  <span className={s.boldfont}>Price, $</span>
                  {book.price}
                </p>

                <form className={s.count}>
                  <label htmlFor="count" className={s.boldfont}>
                    Count, units
                  </label>

                  <input
                    name="count"
                    type="number"
                    value={qwantity}
                    min="1"
                    max="42"
                    onChange={handleChange}
                    className={s.input}
                  />
                </form>

                <p className={s.count}>
                  <span className={s.boldfont}>Total price, $</span>
                  {totalPrice}
                </p>

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
