import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  useGlobalState,
  useChangeGlobalState,
  updateUser,
  updateLanguage,
} from 'state';
import { Button } from 'components';
import defaultAvatar from 'assets/defaultAvatar.png';
import s from './AppBar.module.css';

export default function AppBar({ setBooksByTag }) {
  const { user, language } = useGlobalState('global');
  const changeGlobalState = useChangeGlobalState();

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.headbar}>
          {user.name ? (
            <NavLink
              title="Go to book list"
              to="/books"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.inactiveLink
              }
              onClick={setBooksByTag}
              end
            >
              <h1 className={s.logo}>JS Band Store</h1>
            </NavLink>
          ) : (
            <h1 className={s.brand}>JS Band Store</h1>
          )}

          <a
            title="Go to Eduard Konovka's CV"
            href="https://eduard-konovka.github.io/resume-pdf/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.resume}
          >
            <h2 className={s.title}>...by Eduard Konovka</h2>
          </a>
        </div>

        {user.name ? (
          <div className={s.userbar}>
            <NavLink
              title="Go to book basket"
              to="/cart"
              className={({ isActive }) =>
                isActive ? s.activeCart : s.inactiveCart
              }
            />

            <Button
              title="Signing out of your account"
              type="button"
              onClick={() => changeGlobalState(updateUser, {})}
            >
              <Link to="/signin" className={s.btnLink}>
                Sign out
              </Link>
            </Button>

            <img
              className={s.avatar}
              src={user.avatar ?? defaultAvatar}
              alt="User avatar"
            />

            <p className={s.user}>{user.name}</p>
          </div>
        ) : (
          <p className={s.user}>Hello, guest!</p>
        )}
      </nav>

      <Button
        title="Select your language"
        typeForm="icon"
        onClick={() => changeGlobalState(updateLanguage, 'en')}
      >
        {language || 'null'}
      </Button>
    </header>
  );
}

AppBar.propTypes = {
  setBooksByTag: PropTypes.func.isRequired,
};
