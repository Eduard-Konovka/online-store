import { useState } from 'react';
import PropTypes from 'prop-types';
import { useBooks, useCart } from 'context';
import { Button, Tags, CountForm } from 'components';
import imageNotFound from 'images/notFound.png';
import s from './SpecificBookView.module.css';

export default function SpecificBookView({ bookId, addToCart }) {
  const books = useBooks();
  const cart = useCart();

  const book = books.filter(book => book._id === bookId)[0];
  const selectedBook = cart.filter(book => book._id === bookId)[0];

  const [count, setCount] = useState(selectedBook ? selectedBook.count : 0);

  function handleClickAddToCart() {
    const obj = {
      _id: book._id,
      count,
    };

    addToCart(obj);
  }

  return (
    <main className={s.page}>
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
                totalPriceStyle: s.count,
              }}
              setCount={setCount}
            />

            <Button
              type="button"
              title="Signing out of your account"
              disabled={count === 0}
              onClick={handleClickAddToCart}
            >
              Add to cart
            </Button>
          </div>
        </div>

        <p className={s.description}>{book.description}</p>
      </div>
    </main>
  );
}

SpecificBookView.propTypes = {
  bookId: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};
