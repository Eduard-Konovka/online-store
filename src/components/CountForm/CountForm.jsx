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
  const [offsetX, setOffsetX] = useState(15);

  useEffect(() => {
    setTotalPrice((Number(price) * Number(value)).toFixed(2));
  }, [value, price]);

  function handlePointerDown(event) {
    setOffsetX(event.nativeEvent.offsetX);
  }

  function handleKeyPress(event) {
    const inputValue = event.target.value;
    const selectedNumber = window.getSelection().toString();
    const key = event.key;

    // console.log(
    //   'inputValue: ',
    //   inputValue,
    //   'selectedNumber: ',
    //   selectedNumber,
    //   'selectedNumber.length: ',
    //   selectedNumber.length,
    //   'key: ',
    //   key,
    //   'sum: ',
    //   Number(inputValue + key),
    // );

    if (
      (selectedNumber.length === 1 &&
        offsetX >= 15 &&
        ((selectedNumber === inputValue[0] &&
          Number(key + inputValue[1]) > max) ||
          (selectedNumber === inputValue[1] &&
            Number(inputValue[0] + key) > max))) ||
      (selectedNumber.length !== 1 &&
        inputValue.length === 1 &&
        Number(inputValue + key) > max) ||
      (event.charCode === 48 &&
        (Number(inputValue) === Number(selectedNumber) ||
          inputValue[0] === selectedNumber ||
          inputValue === null)) ||
      GLOBAL.prohibitedKeyСodes.includes(event.charCode)
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
          className={styles.inputStyle}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onPointerDown={handlePointerDown}
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
