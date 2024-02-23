import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CountForm } from 'components';

const COUNT = 9;
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

const mockComponent = (
  <CountForm
    value={COUNT}
    price={PRICE}
    min={MIN}
    max={MAX}
    styles={STYLES}
    setCount={count => (returnedCountValue = count)}
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
    const regexp = new RegExp(`${(COUNT * PRICE).toFixed(2)}`);

    expect(screen.getByText(regexp)).toBeInTheDocument();
  });

  test(`6. Count input with value incremented by 1`, async () => {
    render(mockComponent);

    const input = screen.getByRole('spinbutton');

    fireEvent.change(input, {
      target: { value: COUNT + 1 },
    });

    const condition = COUNT < 42 ? COUNT + 1 : undefined;

    expect(returnedCountValue).toBe(condition);
  });

  test(`7. Count input with value reduced by 1`, async () => {
    render(mockComponent);

    const input = screen.getByRole('spinbutton');

    fireEvent.change(input, {
      target: { value: COUNT - 1 },
    });

    const condition = COUNT > 1 ? COUNT - 1 : 2;

    expect(returnedCountValue).toBe(condition);
  });

  test(`8. The quantity entered by the user is incremented by 1`, async () => {
    const user = userEvent.setup();

    render(mockComponent);

    const input = screen.getByRole('spinbutton', {
      name: /count, units:/i,
    });

    if (COUNT.toString().length < 2) {
      await user.type(input, (COUNT + 1).toString(), {
        initialSelectionStart: 0,
        initialSelectionEnd: 1,
      });
    } else if (COUNT.toString()[COUNT.toString().length - 1] === '9') {
      await user.type(input, (COUNT + 1).toString()[0], {
        initialSelectionStart: 0,
        initialSelectionEnd: 1,
      });
      await user.type(input, (COUNT + 1).toString()[1], {
        initialSelectionStart: 1,
        initialSelectionEnd: 2,
      });
    } else {
      await user.type(input, (COUNT + 1).toString()[0], {
        initialSelectionStart: 0,
        initialSelectionEnd: 1,
      });
      await user.type(input, (COUNT + 1).toString()[1], {
        initialSelectionStart: 1,
        initialSelectionEnd: 2,
      });
    }

    const condition = COUNT < 42 ? COUNT + 1 : 41;

    expect(returnedCountValue).toBe(condition);
  });

  test(`9. The quantity entered by the user is reduced by 1`, async () => {
    const user = userEvent.setup();

    render(mockComponent);

    const input = screen.getByLabelText('Count, units:');

    if (COUNT.toString().length < 2 && COUNT !== 10) {
      await user.type(input, (COUNT - 1).toString(), {
        initialSelectionStart: 0,
        initialSelectionEnd: 1,
      });
    } else {
      await user.type(input, (COUNT - 1).toString()[0], {
        initialSelectionStart: 0,
        initialSelectionEnd: 1,
      });
      await user.type(input, (COUNT - 1).toString()[1], {
        initialSelectionStart: 1,
        initialSelectionEnd: 2,
      });
    }

    const condition = COUNT > 1 ? COUNT - 1 : 2;

    expect(returnedCountValue).toBe(condition);
  });

  test(`10. One digit is added to the amount entered by the user`, async () => {
    const user = userEvent.setup();

    render(mockComponent);

    const input = screen.getByLabelText('Count, units:');

    if (COUNT < 5) {
      await user.type(input, '1');
    } else {
      await user.type(input, '1', {
        initialSelectionStart: 0,
        initialSelectionEnd: 2,
      });
    }

    const condition = COUNT < 5 ? Number(COUNT.toString()[0] + '1') : 1;

    expect(returnedCountValue).toBe(condition);
  });
});
