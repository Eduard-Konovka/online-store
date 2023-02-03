import s from './UserBar.module.css';

export default function UserBar({ user, setUser }) {
  const hendleChenge = e => {
    const { name, value } = e.target;
    const obj = {};
    obj[name] = value;

    setUser(obj);
  };

  return (
    <form className={s.form}>
      <label className={s.label} htmlFor="name">
        <p className={s.title}>Name:</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          defaultValue={user.name}
          onChange={hendleChenge}
          className={s.input}
        />

        <p className={s.title}>Email:</p>
        <input
          type="text"
          name="email"
          pattern="/.+@.+\..+/i"
          title="Enter your email address to receive order tracking emails"
          required
          defaultValue={user.email}
          onChange={hendleChenge}
          className={s.input}
        />

        <p className={s.title}>Phone:</p>
        <input
          type="tel"
          name="phone"
          pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          defaultValue={user.phone}
          onChange={hendleChenge}
          className={s.input}
        />

        <p className={s.title}>Address:</p>
        <input
          type="tel"
          name="address"
          title="Enter the address where the goods need to be delivered"
          required
          defaultValue={user.address}
          onChange={hendleChenge}
          className={s.input}
        />
      </label>
    </form>
  );
}
