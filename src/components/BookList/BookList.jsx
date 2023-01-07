import PropTypes from 'prop-types';
import Book from 'components/Book';
import s from './BookList.module.css';

export default function BookList({ books, onClick }) {
  return (
    <ul className={s.list}>
      {books.map(item => (
        <li key={item._id} className={s.item}>
          <Book book={item} onClick={() => onClick(item._id)} />
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
  ),
  onClick: PropTypes.func.isRequired,
};
