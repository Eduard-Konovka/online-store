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

const component = (
  <CountForm
    value={1}
    price={99}
    min={1}
    max={42}
    styles={{
      formStyle: 'count form style',
      labelStyle: 'label style',
      inputStyle: 'input style',
      spanStyle: 'span style',
      totalPriceStyle: 'total price style',
    }}
    setCount={num => console.log(num)}
  />
);

describe('Testing CountForm component', () => {
  test('1. Render CountForm component', () => {
    render(component);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test('2. Title of lable', () => {
    render(component);

    expect(screen.getByLabelText('Count, units:')).toBeInTheDocument();
  });

  test('3. Title of Total price', () => {
    render(component);

    expect(screen.getByText('Total price:')).toBeInTheDocument();
  });

  test('4. Input with type "number"', () => {
    render(component);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  test('5. Counter with a given initial value of "1"', () => {
    render(component);

    expect(screen.getByDisplayValue(1)).toBeInTheDocument();
  });

  test('6. Value of Total price', () => {
    render(component);

    expect(screen.getByText('$99.00')).toBeInTheDocument();
  });
});
