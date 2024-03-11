import PropTypes from 'prop-types';
import { useGlobalState } from 'state';
import { CartBar, Blank, Processing } from 'components';
import imageBlank from 'assets/cartEmpty.png';
import s from './CartView.module.css';

export default function CartView({
  sending,
  changeSelectCount,
  onDeleteBook,
  onSubmit,
}) {
  const { mainHeight, cart } = useGlobalState('global');

  return (
    <main
      className={!sending && cart.length > 0 ? s.page : s.blank}
      style={{ minHeight: mainHeight }}
    >
      {!sending && cart.length > 0 ? (
        <CartBar
          changeSelectCount={changeSelectCount}
          onDeleteBook={onDeleteBook}
          onSubmit={onSubmit}
        />
      ) : sending ? (
        <Processing />
      ) : (
        <Blank title="Your cart is empty" image={imageBlank} alt="Empty cart" />
      )}
    </main>
  );
}

CartView.propTypes = {
  sending: PropTypes.bool.isRequired,
  changeSelectCount: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
