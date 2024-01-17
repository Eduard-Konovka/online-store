import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMainHeight } from 'context';
import { SignInButton } from 'components';
import { GLOBAL } from 'constants';
import avatar from './avatar.png';
import s from './SignInView.module.css';

export default function SignInView({ setUser }) {
  const mainHeight = useMainHeight();

  const [name, setName] = useState('');

  return (
    <main className={s.page} style={{ minHeight: mainHeight }}>
      <section className={s.thumb}>
        <img src={avatar} alt="avatar" className={s.avatar} />

        <form className={s.form}>
          <label htmlFor="username" className={s.label}>
            Username:
          </label>

          <input
            type="text"
            name="username"
            title="The length of the name must not be less than 4 and more than 16 characters. The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Enter your name..."
            minLength={GLOBAL.SignInViewInput.minLength}
            maxLength={GLOBAL.SignInViewInput.maxLength}
            className={s.input}
            onChange={e => setName(e.target.value)}
          />

          <SignInButton
            title="Sign in to your account"
            type="button"
            disabled={
              name.length < GLOBAL.SignInViewInput.minLength ||
              name.length > GLOBAL.SignInViewInput.maxLength
            }
            onClick={() => setUser({ name })}
          >
            {name.length >= GLOBAL.SignInViewInput.minLength &&
            name.length <= GLOBAL.SignInViewInput.maxLength ? (
              <Link to="/books" className={s.btnLink}>
                Sign in
              </Link>
            ) : (
              <p className={s.btnLink}>Sign in</p>
            )}
          </SignInButton>
        </form>
      </section>
    </main>
  );
}

SignInView.defaultProps = {
  setUser: () => null,
};

SignInView.propTypes = {
  setUser: PropTypes.func.isRequired,
};
