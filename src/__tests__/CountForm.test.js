import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CountForm } from 'components';

const COUNT = 3;
const PRICE = 7.77;
const MIN = 1;
const MAX = 42;
const STYLES = {
  formStyle: 'count-form-style',
  labelStyle: 'label-style',
  inputStyle: 'input-style',
  spanStyle: 'span-style',
  totalPriceStyle: 'total-price-style',
};
let newCountValue;
const SET_COUNT = count => (newCountValue = count);

const mockComponent = (
  <CountForm
    value={COUNT}
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

  test(`5. Counter with a given initial value of ${COUNT}`, () => {
    render(mockComponent);

    expect(screen.getByDisplayValue(COUNT)).toBeInTheDocument();
  });

  test('6. Value of Total price', () => {
    render(mockComponent);
    const regexp = new RegExp(`${COUNT * PRICE}`);

    expect(screen.getByText(regexp)).toBeInTheDocument();
  });

  test(`7. Count input with value incremented by 1`, async () => {
    render(mockComponent);

    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value: COUNT + 1 },
    });

    expect(newCountValue).toBe(COUNT + 1);
  });

  test(`8. Count input with value reduced by 1`, async () => {
    render(mockComponent);

    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value: COUNT - 1 },
    });

    expect(newCountValue).toBe(COUNT - 1);
  });
});
