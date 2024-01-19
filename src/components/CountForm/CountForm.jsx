import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GLOBAL } from 'constants';

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
    if (
      GLOBAL.prohibitedKeyСodes.includes(event.charCode) ||
      (event.charCode === 48 && !event.target.value)
    ) {
      event.preventDefault();
    }
  }

  function handleChange(event) {
    const inputValue = Number(event.target.value);

    if (
      inputValue >= min &&
      inputValue <= max &&
      Number.isInteger(inputValue)
    ) {
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
          min={min}
          max={max}
          value={value}
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
  value: PropTypes.number,
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
