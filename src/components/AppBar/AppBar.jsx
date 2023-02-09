import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import defaultAvatar from './defaultAvatar.png';
import s from './Appbar.module.css';

export default function Appbar({ user, onSignOut }) {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        {user.name ? (
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? s.activeLink : s.inactiveLink
            }
          >
            <h1 className={s.logo}>JS Band Store</h1>
          </NavLink>
        ) : (
          <h1 className={s.brand}>JS Band Store</h1>
        )}

        <a
          href="https://eduard-konovka.github.io/resume-pdf/"
          target="_blank"
          rel="noopener noreferrer"
          className={s.resume}
        >
          <h2 className={s.title}>...by Eduard Konovka</h2>
        </a>

        {user.name ? (
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
              onClick={onSignOut}
            >
              <NavLink to="/signin" className={s.btn}>
                {'Sign out'}
              </NavLink>
            </Button>

            <img
              className={s.avatar}
              src={user.avatar ?? defaultAvatar}
              alt="User avatar"
            />

            <p className={s.user}>Hello {user.name}!</p>
          </div>
        ) : (
          <p className={s.user}>Hello guest!</p>
        )}
      </nav>
    </header>
  );
}

Appbar.propTypes = {
  user: PropTypes.object.isRequired,
};
