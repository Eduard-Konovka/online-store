import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
let returnedCountValue;
const SET_COUNT = count => (returnedCountValue = count);

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
  test('1. Title of lable', () => {
    render(mockComponent);

    expect(screen.getByLabelText('Count, units:')).toBeInTheDocument();
  });

  test('2. Title of Total price', () => {
    render(mockComponent);

    expect(screen.getByText('Total price:')).toBeInTheDocument();
  });

  test('3. Input with type "number"', () => {
    render(mockComponent);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  test(`4. Counter with a given initial value of ${COUNT}`, () => {
    render(mockComponent);

    expect(screen.getByDisplayValue(COUNT)).toBeInTheDocument();
  });

  test('5. Value of Total price', () => {
    render(mockComponent);
    const regexp = new RegExp(`${COUNT * PRICE}`);

    expect(screen.getByText(regexp)).toBeInTheDocument();
  });

  test(`6. Count input with value incremented by 1`, async () => {
    render(mockComponent);

    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value: COUNT + 1 },
    });

    expect(returnedCountValue).toBe(COUNT + 1);
  });

  test(`7. Count input with value reduced by 1`, async () => {
    render(mockComponent);

    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value: COUNT - 1 },
    });

    expect(returnedCountValue).toBe(COUNT - 1);
  });

  test(`8. The quantity entered by the user is incremented by 1`, async () => {
    render(mockComponent);

    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value: COUNT + 1 },
    });

    //FIXME await userEvent.click(screen.getByText(3));

    expect(returnedCountValue).toBe(COUNT + 1);
  });
});
