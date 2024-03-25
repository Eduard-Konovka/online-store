import { FcSettings } from 'react-icons/fc';
import { IoMdCog } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import PropTypes from 'prop-types';
import s from './Spinner.module.css';

export default function Spinner({ size = 50, color = 'black' }) {
  return (
    <div className={s.box}>
      <FcSettings size={size} className={s.spinner} alt="Spinner" />
      <IoMdCog size={size * 1.6} className={s[color]} alt="Spinner" />
      <AiFillSetting size={size * 0.6} className={s.gray} alt="Spinner" />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.oneOf(['black', 'white', 'blue', 'green']),
};
