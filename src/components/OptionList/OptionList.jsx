import PropTypes from 'prop-types';

export default function OptionList({ books }) {
  const arr = books.map(book => book.price).sort((a, b) => a - b);
  const uniqArr = [...new Set(arr)];

  return (
    <>
      <option key={'All prices'}>All prices</option>
      {uniqArr.map(price => (
        <option key={price}>{price}</option>
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
