import PropTypes from 'prop-types';
import Button from 'components/Button';
import s from './Book.module.css';
import defaultImage from './imageNotFound2.png';

export default function Book({ book, onClick }) {
  return (
    <article>
      <img
        className={s.image}
        src={book.image !== '' ? book.image : defaultImage}
        alt={book.title}
      />

      <div className={s.thumb}>
        <h2 className={s.title}>{book.title}</h2>

        <p className={s.shortDescription}>{book.shortDescription}</p>
      </div>

      <p className={s.author}>
        Author: <span className={s.value}>{book.author}</span>
      </p>

      <div className={s.control}>
        <p className={s.price}>
          Price: <span className={s.value}>${book.price}</span>
        </p>

        <Button type="button" onClick={() => onClick(book.id)}>
          View
        </Button>
      </div>
    </article>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
