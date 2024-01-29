import { ImSpinner } from 'react-icons/im';
import PropTypes from 'prop-types';
import s from './Spinner.module.css';

export default function Spinner({ size = 50, color = 'black' }) {
  return (
    <div className={s.box}>
      <ImSpinner size={size} className={s[color]} alt="Spinner" />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.oneOf(['black', 'white', 'blue', 'green']),
};
