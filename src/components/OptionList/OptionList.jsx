import PropTypes from 'prop-types';
import { GLOBAL } from 'constants';

export default function OptionList({ books }) {
  const arr = books.map(book => book.price).sort((a, b) => a - b);
  const uniqArr = [...new Set(arr)];

  return (
    <>
      <option value={'allPrices'}>{'All'}</option>
      <option
        value={`${GLOBAL.pricesBreakPoint.min}>`}
      >{`Cost < ${GLOBAL.pricesBreakPoint.first}`}</option>
      <option
        value={`${GLOBAL.pricesBreakPoint.first}>`}
      >{`${GLOBAL.pricesBreakPoint.first} < cost < ${GLOBAL.pricesBreakPoint.second}`}</option>
      <option
        value={`${GLOBAL.pricesBreakPoint.second}>`}
      >{`Cost > ${GLOBAL.pricesBreakPoint.second}`}</option>
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
    }).isRequired,
  ),
};
