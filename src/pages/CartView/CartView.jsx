import PropTypes from 'prop-types';
import { useMainHeight } from 'context';
import { CartBar } from 'components';
import s from './CartView.module.css';

export default function CartView({
  sending,
  changeSelectCount,
  onDeleteBook,
  onSubmit,
}) {
  const mainHeight = useMainHeight();

  return (
    <main className={s.page} style={{ minHeight: mainHeight }}>
      <CartBar
        sending={sending}
        changeSelectCount={changeSelectCount}
        onDeleteBook={onDeleteBook}
        onSubmit={onSubmit}
      />
    </main>
  );
}

CartView.propTypes = {
  sending: PropTypes.bool.isRequired,
  changeSelectCount: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
