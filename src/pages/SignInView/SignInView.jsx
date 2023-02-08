import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'components';
import avatar from './avatar.png';
import s from './SignInView.module.css';

export default function SignInView({ user, setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <main className={s.page}>
      <section className={s.thumb}>
        <img src={avatar} alt="avatar" className={s.avatar} />

        <form action="/" method="post" className={s.form}>
          <label htmlFor="username" className={s.label}>
            Username:
          </label>

          <input
            type="text"
            id="username"
            name="username"
            title="The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            defaultValue={user.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="type Username"
            required
            className={s.input}
            onChange={e => setName(e.target.value)}
          />

          <label htmlFor="email" className={s.label}>
            Email:
          </label>

          <input
            type="text"
            id="email"
            name="email"
            title="Enter your email address to receive order tracking emails"
            defaultValue={user.email}
            pattern="/.+@.+\..+/i"
            placeholder="type Email"
            required
            className={s.input}
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="phone" className={s.label}>
            Phone:
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            title="The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            defaultValue={user.phone}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="type Phone"
            required
            className={s.input}
            onChange={e => setPhone(e.target.value)}
          />

          <label htmlFor="address" className={s.label}>
            Address:
          </label>

          <input
            name="address"
            id="address"
            type="text"
            title="Enter the address where the goods need to be delivered"
            defaultValue={user.address}
            placeholder="type Address"
            required
            className={s.lastInput}
            onChange={e => setAddress(e.target.value)}
          />

          <Button
            type="button"
            title="More about the book"
            disabled={!name || !email || !phone || !address}
            onClick={() => setUser({ name, email, phone, address })}
          >
            {name && email && phone && address ? (
              <Link to="/books" className={s.btn}>
                Sign in
              </Link>
            ) : (
              <p className={s.btn}>Sign in</p>
            )}
          </Button>
        </form>
      </section>
    </main>
  );
}

Button.defaultProps = {
  user: {},
  setUser: () => null,
};

SignInView.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
