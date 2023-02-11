/* ============================================================================
>>>>>>>>>> RECEIVES function: 
-------------------------------------------------------------------------------
{ addToCart }
===============================================================================
>>>>>>>>>> RETURNS component SpecificBookView: 
-------------------------------------------------------------------------------
<main className={s.page}>
  {loading && ...}

  {error && ...}

  {book && ...}
</main>
===============================================================================
>>>>>>>>>> POSSIBLE OPTIONS: 
-------------------------------------------------------------------------------
1. Нормальный возврат.
2. Нет входных данных.
3. Непрвильная почта. 
4. Неправильный пароль.
===============================================================================
>>>>>>>>>> BEHAVIOR THAT IS TESTED: 
-------------------------------------------------------------------------------
1. When you click to increase the quantity, the quantity should increase.
2. When you click to decrease the quantity, the quantity should decrease.
3. When the quantity changes, the total cost must change. 
============================================================================ */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
// import SpecificBookView from 'pages/SpecificBookView/SpecificBookView';
import CountForm from 'components/CountForm/CountForm';

describe('Testing SpecificBookView component', () => {
  test('Render CountForm component', () => {
    render(
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
      />,
    );
  });
});
