import PropTypes from 'prop-types';
import s from './IconButton.module.css';

const IconButton = ({ title, type, onClick, children, ...allyProps }) => (
  <button
    title={title}
    type={type}
    className={s.btn}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  title: null,
  type: 'button',
  children: null,
  onClick: () => null,
};

IconButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
