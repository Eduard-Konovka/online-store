import PropTypes from 'prop-types';
import CartList from 'components/CartList';
import Button from 'components/Button';
import Blank from 'components/Blank';
import imageBlank from 'images/cartEmpty.png';
import imageProcessing from 'images/imageProcessing.png';
import s from './CartBar.module.css';

export default function CartBar({
  sending,
  cart,
  totalCost,
  onSelectQwantity,
  onDeleteProduct,
  onSubmit,
}) {
  return (
    <div className={s.cartbar}>
      {cart.length > 0 ? (
        <>
          <CartList
            cart={cart}
            onSelectQwantity={onSelectQwantity}
            onDeleteProduct={onDeleteProduct}
          />

          <div className={s.priceBox}>
            <p className={s.totalCost}>Total cost: ${totalCost}</p>

            <Button type="button" onClick={onSubmit}>
              Purchase
            </Button>
          </div>
        </>
      ) : sending ? (
        <Blank
          title="Your order has been sent for processing"
          image={imageProcessing}
          alt="Order processing"
        />
      ) : (
        <Blank title="Your cart is empty" image={imageBlank} alt="Empty cart" />
      )}
    </div>
  );
}

CartBar.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
  totalCost: PropTypes.number.isRequired,
  onSelectQwantity: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
