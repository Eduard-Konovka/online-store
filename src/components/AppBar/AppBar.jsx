import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import defaultAvatar from './defaultAvatar.png';
import s from './Appbar.module.css';

export default function Appbar({ user, onSignOut }) {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? s.activeLink : s.inactiveLink
          }
        >
          <h1 className={s.title}>JS BAND STORE</h1>
        </NavLink>

        <div className={s.userbar}>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? s.activeCart : s.inactiveCart
            }
          />

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
