import PropTypes from 'prop-types';
import SelectedBook from 'components/SelectedBook';
import s from './CartList.module.css';

export default function CartList({ cart, changeSelectCount, onDeleteBook }) {
  return (
    <ul className={s.list}>
      {cart.map(item => (
        <li key={item._id} className={s.item}>
          <SelectedBook
            selectedBook={item}
            changeSelectCount={changeSelectCount}
            onDeleteBook={() => onDeleteBook(item._id)}
          />
        </li>
      ))}
    </ul>
  );
}

CartList.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  changeSelectCount: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
};
