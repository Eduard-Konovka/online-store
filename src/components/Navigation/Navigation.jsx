import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Shop
      </NavLink>

      <span className={s.delimiter}>|</span>

      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Shopping Cart
      </NavLink>
    </nav>
  );
}
