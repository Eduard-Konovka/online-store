import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './SignInButton.module.css';

export default function SignInButton({
  title,
  type,
  disabled,
  onClick,
  children,
}) {
  return (
    <button
      title={title}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(s.btn, disabled && s.disabled)}
    >
      {children}
    </button>
  );
}

SignInButton.defaultProps = {
  type: 'button',
  title: null,
  onClick: () => null,
  disabled: false,
  children: null,
};

SignInButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
