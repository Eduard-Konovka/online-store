import PropTypes from 'prop-types';
import { CartBar } from 'components';
import s from './CartView.module.css';

export default function CartView({
  sending,
  cart,
  changeSelectCount,
  onDeleteBook,
  onSubmit,
}) {
  return (
    <div className={s.cartpage}>
      <CartBar
        sending={sending}
        cart={cart}
        changeSelectCount={changeSelectCount}
        onDeleteBook={onDeleteBook}
        onSubmit={onSubmit}
      />
    </div>
  );
}

CartView.propTypes = {
  sending: PropTypes.bool.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
  changeSelectCount: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
