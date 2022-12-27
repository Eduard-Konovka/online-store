import PropTypes from 'prop-types';
import Button from 'components/Button';
import Navigation from 'components/Navigation';
import cartImg from './cart.svg';
import s from './Appbar.module.css';

export default function Appbar({ username }) {
  return (
    <header className={s.header}>
      <h1 className={s.title}>JS BAND STORE</h1>

      <Navigation />

      <div className={s.userbar}>
        <img
          src={cartImg}
          width="48"
          height="48"
          alt="cart"
          className={s.img}
        />

        <Button
          type="button"
          title="Signing out of your account"
          onClick={null}
        >
          Sign out
        </Button>

        <div className={s.avatar}></div>

        <p className={s.username}>{username}</p>
      </div>
    </header>
  );
}

Appbar.propTypes = {
  username: PropTypes.string.isRequired,
};
