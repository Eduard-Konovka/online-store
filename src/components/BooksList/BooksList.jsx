import PropTypes from 'prop-types';
import Book from 'components/Book';
import s from './BooksList.module.css';

export default function BooksList({ books, onClick }) {
  return (
    <ul className={s.list}>
      {books.map(item => (
        <li key={item.id}>
          <Book book={item} onClick={() => onClick(item.id)} />
        </li>
      ))}
    </ul>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};
