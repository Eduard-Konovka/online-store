import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCart } from 'context';
import { CartList, Button } from 'components';
import s from './CartBar.module.css';

export default function CartBar({ changeSelectCount, onDeleteBook, onSubmit }) {
  const cart = useCart();

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setTotalCost(
      cart.reduce((acc, obj) => acc + obj.count * obj.price, 0).toFixed(2),
    );
  }, [cart]);

  return (
    <div className={s.cartbar}>
      <CartList
        cart={cart}
        changeSelectCount={changeSelectCount}
        onDeleteBook={onDeleteBook}
      />

      <div className={s.priceBox}>
        <p className={s.totalCost}>Total cost: ${totalCost}</p>

        <Button
          title="Send order for clearance"
          type="button"
          onClick={() => onSubmit(Number(totalCost))}
        >
          Purchase
        </Button>
      </div>
    </div>
  );
}

CartBar.propTypes = {
  changeSelectCount: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
