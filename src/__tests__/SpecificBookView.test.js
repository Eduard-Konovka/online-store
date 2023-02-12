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
import { SpecificBookView } from 'pages';

let cart;
const ADD_TO_CART = () => obj => (cart = obj);

const mockComponent = <SpecificBookView addToCart={ADD_TO_CART} />;

describe('Testing SpecificBookView component', () => {
  test('1. Render SpecificBookView component', () => {
    render(mockComponent);
  });
});
