import PropTypes from 'prop-types';

export default function OptionList({ books }) {
  const arr = books.map(book => book.price).sort((a, b) => a - b);
  const uniqArr = [...new Set(arr)];

  return (
    <>
      <option value={'allPrices'}>{'All'}</option>
      <option value={'0>'}>{'Cost < 15'}</option>
      <option value={'15>'}>{'15 < cost < 30'}</option>
      <option value={'30>'}>{'Cost > 30'}</option>
      {uniqArr.map(price => (
        <option value={price} key={price}>
          {price}
        </option>
      ))}
    </>
  );
}

OptionList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
};
