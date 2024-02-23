import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GLOBAL } from '../../constants';

export default function TempCountForm({
  value,
  text,
  price,
  min = 1,
  max = Infinity,
  styles,
  setCount,
  setText,
}) {
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    setTotalPrice((Number(price) * Number(value)).toFixed(2));
  }, [value, price]);

  function handleKeyPress(event) {
    if (
      GLOBAL.keyСodes.prohibited.includes(event.charCode) ||
      (event.charCode === GLOBAL.keyСodes.zero && !event.target.value)
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

  function handleChangeText(event) {
    setText(event.target.value);
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
          value={value > 0 ? value : ''}
          className={styles.inputStyle}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />

        <label htmlFor="textCount" className={styles.labelStyle}>
          Text Count:
        </label>

        <input
          name="textCount"
          id="textCount"
          type="text"
          defaultValue={text}
          className={styles.inputStyle}
          onChange={handleChangeText}
        />
      </form>

      <p className={styles.totalPriceStyle}>
        <span className={styles.totalPriceTitleStyle}>Total price: </span>
        <span className={styles.totalPriceValueStyle}>${totalPrice}</span>
      </p>
    </>
  );
}

TempCountForm.propTypes = {
  value: PropTypes.number.isRequired,
  price: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  styles: PropTypes.shape({
    formStyle: PropTypes.string,
    labelStyle: PropTypes.string,
    inputStyle: PropTypes.string,
    totalPriceStyle: PropTypes.string,
    totalPriceTitleStyle: PropTypes.string,
    totalPriceValueStyle: PropTypes.string,
  }).isRequired,
  setCount: PropTypes.func.isRequired,
};
