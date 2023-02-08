import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCart } from 'context';
import { CartList, Button, Blank, Processing } from 'components';
import imageBlank from 'images/cartEmpty.png';
import s from './CartBar.module.css';

export default function CartBar({
  sending,
  changeSelectCount,
  onDeleteBook,
  onSubmit,
}) {
  const cart = useCart();

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(
      cart.reduce((acc, obj) => acc + obj.count * obj.price, 0).toFixed(2),
    );
  }, [cart]);

  return (
    <div className={s.cartbar}>
      {!sending && cart.length > 0 ? (
        <>
          <CartList
            cart={cart}
            changeSelectCount={changeSelectCount}
            onDeleteBook={onDeleteBook}
          />

          <div className={s.priceBox}>
            <p className={s.totalCost}>Total cost: ${totalCost}</p>

            <Button type="button" onClick={() => onSubmit(Number(totalCost))}>
              Purchase
            </Button>
          </div>
        </>
      ) : sending ? (
        <Processing />
      ) : (
        <Blank title="Your cart is empty" image={imageBlank} alt="Empty cart" />
      )}
    </div>
  );
}

CartBar.propTypes = {
  sending: PropTypes.bool.isRequired,
  changeSelectCount: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
