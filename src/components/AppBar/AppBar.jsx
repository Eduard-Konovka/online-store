import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import cartImg from './cart.svg';
import defaultAvatar from './defaultAvatar.png';
import s from './Appbar.module.css';

export default function Appbar({ user, onSignOut }) {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          <h1 className={s.title}>JS BAND STORE</h1>
        </NavLink>

        <div className={s.userbar}>
          <NavLink to="/cart" className={s.cart}>
            <img
              // FIXME to 'react-icons' (SVG)
              src={cartImg}
              width="48"
              height="48"
              alt="cart"
            />
          </NavLink>

          <Button
            type="button"
            title="Signing out of your account"
            onClick={user.name ? onSignOut : null}
          >
            <NavLink to={user.name ? '' : '/signin'} className={s.btn}>
              {user.name ? 'Sign out' : 'Sign in'}
            </NavLink>
          </Button>

          <img
            className={s.avatar}
            src={user.avatar ?? defaultAvatar}
            alt="User avatar"
          />

          <p className={s.user}>{user.name ?? 'Hello guest!'}</p>
        </div>
      </nav>
    </header>
  );
}

Appbar.propTypes = {
  user: PropTypes.object.isRequired,
};
