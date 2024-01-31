import PropTypes from 'prop-types';
import Book from 'components/Book';
import s from './BookList.module.css';

export default function BookList({ books }) {
  return (
    <ul className={s.list}>
      {books.map(item => (
        <li key={item._id} className={s.item}>
          <Book book={item} />
        </li>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
