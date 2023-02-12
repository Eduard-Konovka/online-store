/* ============================================================================
>>>>>>>>>>>>>>>>>>>>>>>>>> BEHAVIOR THAT IS TESTED: <<<<<<<<<<<<<<<<<<<<<<<<<<<
-------------------------------------------------------------------------------
1. When you click to increase the quantity, the quantity should increase.
2. When you click to decrease the quantity, the quantity should decrease.
3. When the quantity changes, the total cost must change. 
============================================================================ */

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CountForm } from 'components';

const INPUT_VALUE = 3;
const PRICE = 7.77;
const MIN = 1;
const MAX = 42;
const STYLES = {
  formStyle: 'count form style',
  labelStyle: 'label style',
  inputStyle: 'input style',
  spanStyle: 'span style',
  totalPriceStyle: 'total price style',
};
const SET_COUNT = num => console.log(num);

const mockComponent = (
  <CountForm
    value={INPUT_VALUE}
    price={PRICE}
    min={MIN}
    max={MAX}
    styles={STYLES}
    setCount={SET_COUNT}
  />
);

describe('Testing CountForm component', () => {
  test('1. Render CountForm component', () => {
    render(mockComponent);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test('2. Title of lable', () => {
    render(mockComponent);

    expect(screen.getByLabelText('Count, units:')).toBeInTheDocument();
  });

  test('3. Title of Total price', () => {
    render(mockComponent);

    expect(screen.getByText('Total price:')).toBeInTheDocument();
  });

  test('4. Input with type "number"', () => {
    render(mockComponent);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  test(`5. Counter with a given initial value of ${INPUT_VALUE}`, () => {
    render(mockComponent);

    expect(screen.getByDisplayValue(INPUT_VALUE)).toBeInTheDocument();
  });

  test('6. Value of Total price', () => {
    render(mockComponent);
    const regexp = new RegExp(`${INPUT_VALUE * PRICE}`);

    expect(screen.getByText(regexp)).toBeInTheDocument();
  });
});
