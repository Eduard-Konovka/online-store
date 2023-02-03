import PropTypes from 'prop-types';
import SelectedBook from 'components/SelectedBook';
import s from './CartList.module.css';

export default function CartList({ cart, onSelectQwantity, onDeleteProduct }) {
  return (
    <ul className={s.list}>
      {cart.map(item => (
        <li key={item._id}>
          <SelectedBook
            _id={item._id}
            image={item.image}
            title={item.title}
            category={item.category}
            price={item.price}
            available={item.available}
            qwantity={item.qwantity}
            cost={item.cost}
            onSelectQwantity={onSelectQwantity}
            onDeleteProduct={() => onDeleteProduct(item._id)}
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
    }),
  ),
  onSelectQwantity: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
