import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Books
      </NavLink>

      <span className={s.delimiter}>|</span>

      <NavLink
        to="/book"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Book
      </NavLink>

      <span className={s.delimiter}>|</span>

      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Cart
      </NavLink>

      <span className={s.delimiter}>|</span>

      <NavLink
        to="/signin"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Sign in
      </NavLink>
    </nav>
  );
}
