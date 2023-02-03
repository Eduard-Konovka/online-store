import PropTypes from 'prop-types';
import CartBar from 'components/CartBar';
import s from './CartView.module.css';

export default function CartView({
  sending,
  cart,
  totalCost,
  onSelectQwantity,
  onDeleteProduct,
  onSubmit,
}) {
  return (
    <div className={s.cartpage}>
      <CartBar
        sending={sending}
        cart={cart}
        totalCost={totalCost}
        onSelectQwantity={onSelectQwantity}
        onDeleteProduct={onDeleteProduct}
        onSubmit={onSubmit}
      />
    </div>
  );
}

CartView.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
  totalCost: PropTypes.number.isRequired,
  onSelectQwantity: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
