import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Puff } from 'react-loader-spinner';
import { BooksProvider, CartProvider } from 'context';
import { sendСart } from 'api';
import { Container, AppBar, Footer } from 'components';
import 'api/baseUrl';
import 'App.css';

const BooksView = lazy(() =>
  import('pages/BooksView' /* webpackChunkName: "BooksView" */),
);
const SpecificBookView = lazy(() =>
  import('pages/SpecificBookView' /* webpackChunkName: "SpecificBookView" */),
);
const CartView = lazy(() =>
  import('pages/CartView' /* webpackChunkName: "CartView" */),
);
const SignInView = lazy(() =>
  import('pages/SignInView' /* webpackChunkName: "SignInView" */),
);
const NotFoundView = lazy(() =>
  import('pages/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  // FIXME user
  const [user, setUser] = useState({
    name: 'aaa',
    email: 'bbb@bbb.com',
    phone: '1234567',
    address: 'ccc',
  });
  const [cart, setCart] = useState([]);
  const [sending, setSending] = useState(false);

  const hendleUser = obj => {
    setUser({ ...user, ...obj });
  };

  const addToCart = bookData => {
    const productDuplication = cart.filter(obj => obj._id === bookData._id);

    if (productDuplication.length > 0) {
      toast.error('This item is already in the cart!');
      return;
    }

    const addedBook = books.filter(book => book._id === bookData._id)[0];
    addedBook.count = bookData.count;

    setCart([...cart, addedBook]);
  };

  const removeFromCart = _id => {
    const newCart = cart.filter(obj => obj._id !== _id);
    setCart(newCart);
  };

  const changeCount = obj => {
    const setCount = item => {
      item.count = Number(obj.count);
      return item;
    };

    setCart(cart.map(book => (book._id === obj._id ? setCount(book) : book)));
  };

  const submitCart = totalCost => {
    setSending(true);

    setTimeout(() => {
      sendСart({
        user,
        cart,
        totalCost,
      }).finally(() => {
        setCart([]);
        setSending(false);
      });
    }, 5000);
  };

  return (
    <Container>
      <AppBar user={user} onSignOut={() => setUser({})} />

      <Suspense
        fallback={
          <Puff
            height="200"
            width="200"
            radius={1}
            color="#00BFFF"
            ariaLabel="puff-loading"
            wrapperStyle={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <BooksProvider value={books}>
          <Routes>
            <Route
              path=""
              element={
                <BooksView setBooks={setBooks} onClick={setSelectedBook} />
              }
            />

            <Route
              path="/books/:id"
              element={
                <SpecificBookView bookId={selectedBook} addToCart={addToCart} />
              }
            />

            <Route
              path="/cart"
              element={
                <CartProvider value={cart}>
                  <CartView
                    sending={sending}
                    changeSelectCount={changeCount}
                    onDeleteBook={removeFromCart}
                    onSubmit={submitCart}
                  />
                </CartProvider>
              }
            />
            <Route path="/signin" element={<SignInView onClick={null} />} />

            <Route
              path="*"
              element={<NotFoundView message="Page not found :(" />}
            />
          </Routes>
        </BooksProvider>

        <Footer />
      </Suspense>

      <ToastContainer />
    </Container>
  );
}
