import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const CHARACTER_CODES = [
  44, // ,
  46, // .
];

export default function CountForm({
  value,
  price,
  min = 1,
  max = Infinity,
  styles,
  setCount,
}) {
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice((Number(price) * Number(value)).toFixed(2));
  }, [value, price]);

  function handleKeyPress(event) {
    if (CHARACTER_CODES.includes(event.charCode)) {
      event.preventDefault();
    }
  }

  function handleChange(event) {
    const inputValue = Number(event.target.value);

    if (inputValue >= min && inputValue <= max) {
      setCount(inputValue);
    } else {
      toast.error(
        `Please enter an integer value from ${min} to ${max} inclusive!`,
      );
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
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
      </form>

      <p className={styles.totalPriceStyle}>
        <span className={styles.totalPriceTitleStyle}>Total price: </span>
        <span className={styles.totalPriceValueStyle}>${totalPrice}</span>
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
    totalPriceTitleStyle: PropTypes.string,
    totalPriceValueStyle: PropTypes.string,
  }),
  setCount: PropTypes.func.isRequired,
};
