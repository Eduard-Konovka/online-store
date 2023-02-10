import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Puff } from 'react-loader-spinner';
import { UserProvider, BooksProvider, CartProvider } from 'context';
import { sendСart } from 'api';
import {
  Container,
  AppBar,
  Footer,
  PublicRoute,
  PrivateRoute,
} from 'components';
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
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {},
  );
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || [],
  );
  const [sending, setSending] = useState(false);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(bookToBeAdded) {
    const bookDuplication = cart.filter(obj => obj._id === bookToBeAdded._id);

    if (bookDuplication.length > 0) {
      toast.error('This item is already in the cart!');
      return;
    }

    setCart([...cart, bookToBeAdded]);
  }

  function removeFromCart(_id) {
    const newCart = cart.filter(obj => obj._id !== _id);
    setCart(newCart);
  }

  function changeCount(obj) {
    const setCount = item => {
      item.count = Number(obj.count);
      return item;
    };

    setCart(cart.map(book => (book._id === obj._id ? setCount(book) : book)));
  }

  function submitCart(totalCost) {
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
  }

  return (
    <Container>
      <UserProvider value={user}>
        <AppBar onSignOut={() => setUser({})} />

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
            <CartProvider value={cart}>
              <Routes>
                <Route path="/" element={<Navigate to="/signin" />} />

                <Route
                  path="/signin"
                  element={
                    <PublicRoute redirectTo="/books" restricted>
                      <SignInView setUser={setUser} />
                    </PublicRoute>
                  }
                />

                <Route
                  path="/books"
                  element={
                    <PrivateRoute redirectTo="/signin">
                      <BooksView setBooks={setBooks} />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/books/:id"
                  element={
                    <PrivateRoute redirectTo="/signin">
                      <SpecificBookView addToCart={addToCart} />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/cart"
                  element={
                    <PrivateRoute redirectTo="/signin">
                      <CartView
                        sending={sending}
                        changeSelectCount={changeCount}
                        onDeleteBook={removeFromCart}
                        onSubmit={submitCart}
                      />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="*"
                  element={
                    <PrivateRoute redirectTo="/signin">
                      <NotFoundView message="Page not found :(" />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </CartProvider>
          </BooksProvider>

          <Footer />
        </Suspense>

        <ToastContainer />
      </UserProvider>
    </Container>
  );
}
