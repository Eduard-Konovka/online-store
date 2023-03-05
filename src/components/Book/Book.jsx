import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import defaultImage from 'images/notFound.png';
import s from './Book.module.css';

const TITLE_LENGTH = 25;

export default function Book({ book }) {
  return (
    <article>
      <img
        className={s.image}
        src={book.image && book.image !== '' ? book.image : defaultImage}
        alt={book.title}
      />

      <div className={s.thumb}>
        <h3 className={s.title}>
          {book.title.length < TITLE_LENGTH
            ? book.title
            : book.title.slice(0, TITLE_LENGTH) + '...'}
        </h3>

        <p className={s.shortDescription}>{book.shortDescription}</p>
      </div>

      <p className={s.author}>
        Author: <span className={s.value}>{book.author}</span>
      </p>

      <p className={s.sku}>
        SKU: <span className={s.value}>{book.id}</span>
      </p>

      <div className={s.control}>
        <p className={s.price}>
          Price: <span className={s.value}>${book.price}</span>
        </p>

        <Button title="More about the book">
          <Link to={`/books/:${book._id}`} className={s.btnLink}>
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
};
