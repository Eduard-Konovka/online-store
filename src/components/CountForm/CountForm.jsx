import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default function CountForm({
  value,
  price,
  min,
  max,
  styles,
  setCount,
}) {
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice((Number(price) * Number(value)).toFixed(2));
  }, [value, price]);

  function handleChange(event) {
    if (event.target.value > 0 && event.target.value <= 42) {
      setCount(Number(event.target.value));
    } else {
      toast.error('Please enter a value between 0 and 43!');
    }
  }

  return (
    <>
      <form className={styles.formStyle}>
        <label htmlFor="count" className={styles.labelStyle}>
          Count, units:
        </label>

        <input
          name="count"
          id="count"
          type="number"
          value={value}
          min={min}
          max={max}
          className={styles.inputStyle}
          onChange={handleChange}
        />
      </form>

      <p className={styles.formStyle}>
        <span className={styles.spanStyle}>Total price: </span>${totalPrice}
      </p>
    </>
  );
}

CountForm.propTypes = {
  value: PropTypes.number.isRequired,
  price: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  styles: PropTypes.shape({
    formStyle: PropTypes.string,
    labelStyle: PropTypes.string,
    inputStyle: PropTypes.string,
    spanStyle: PropTypes.string,
  }),
  setCount: PropTypes.func.isRequired,
};
