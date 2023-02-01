import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import defaultImage from './imageNotFound2.png';
import s from './Book.module.css';

export default function Book({ book, onClick }) {
  return (
    <article>
      <img
        className={s.image}
        src={book.image && book.image !== '' ? book.image : defaultImage}
        alt={book.title}
      />

      <div className={s.thumb}>
        <h3 className={s.title}>{book.title}</h3>

        <p className={s.shortDescription}>{book.shortDescription}</p>
      </div>

      <p className={s.author}>
        Author: <span className={s.value}>{book.author}</span>
      </p>

      <div className={s.control}>
        <p className={s.price}>
          Price: <span className={s.value}>${book.price}</span>
        </p>

        <Button
          type="button"
          title="More about the book"
          onClick={() => onClick(book._id)}
        >
          <Link to="/books/:id" className={s.btn}>
            View
          </Link>
        </Button>
      </div>
    </article>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
