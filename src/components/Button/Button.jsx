import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({
  title,
  type,
  disabled,
  styles,
  onClick,
  children,
}) {
  return (
    <button
      title={title}
      type={type}
      disabled={disabled}
      className={classNames(s.btn, disabled && s.disabled, styles)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  title: null,
  type: 'button',
  disabled: false,
  styles: null,
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  styles: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
