import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './IconButton.module.css';

const IconButton = ({
  title,
  type,
  styles,
  onClick,
  children,
  ...allyProps
}) => (
  <button
    title={title}
    type={type}
    className={classNames(s.btn, styles)}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  title: null,
  type: 'button',
  styles: null,
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  styles: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
