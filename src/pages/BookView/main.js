const refs = {
  price: document.querySelector('[data-name="price"]'),
  count: document.querySelector('input[name="count"]'),
  totalPrice: document.querySelector('[data-name="totalPrice"]'),
  form: document.querySelector('form'),
};

refs.form.onchange = e => {
  e.target.value > 1 && e.target.value <= 42
    ? (refs.totalPrice.textContent = (
        Number(refs.price.textContent) * e.target.value
      ).toFixed(2))
    : refs.count.value < 1 && alert('Please enter a value between 0 and 43!');
};
