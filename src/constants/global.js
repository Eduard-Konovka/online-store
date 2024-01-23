export const GLOBAL = {
  SignInViewInput: {
    minLength: 4,
    maxLength: 16,
  },

  prohibitedKeyСodes: [
    44, // ,
    46, // .
    101, // e (scientific notaion, 1e2 === 100)
  ],

  bookCount: {
    min: 1,
    max: 42,
  },

  pricesBreakPoint: {
    min: 0,
    first: 15,
    second: 30,
  },

  titleLength: 25,

  sending: 3000,
};
