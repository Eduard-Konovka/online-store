import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Puff } from 'react-loader-spinner';
import { sendСart } from 'api';
import {
  GlobalState,
  useGlobalState,
  useChangeGlobalState,
  updateMainHeight,
  updateCart,
} from 'state';
import {
  Container,
  AppBar,
  Footer,
  PublicRoute,
  PrivateRoute,
} from 'components';
import { GLOBAL } from 'constants';
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

function App() {
  const { user, cart } = useGlobalState('global');
  const changeGlobalState = useChangeGlobalState();

  const [booksByTag, setBooksByTag] = useState([]);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const appWidth = window.innerWidth;
    const appHeight = window.innerHeight;

    // Container, header and footer subtracted from viewport height
    const computedHeight =
      appWidth < 320
        ? appHeight - (10 + (appWidth / 4 + 25) + 43)
        : appWidth < 420
        ? appHeight - (12 + (appWidth / 7.02 + 26) + 47)
        : appWidth < 800
        ? appHeight - (14 + (appWidth / 12.7 + 17) + 50)
        : appWidth < 1024
        ? appHeight - (16 + (appWidth / 24.385 + 48) + 52)
        : appWidth < 1600
        ? appHeight - (20 + (appWidth / 27.405 + 50) + 57)
        : appHeight -
          (appWidth / 80 +
            (appWidth / 27.394 + appWidth / 32) +
            (appWidth / 53.333 + appWidth / 55.56));

    changeGlobalState(updateMainHeight, computedHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeCount(obj) {
    const setCount = item => {
      item.count = Number(obj.count);
      return item;
    };

    changeGlobalState(
      updateCart,
      cart.map(book => (book._id === obj._id ? setCount(book) : book)),
    );
  }

  function addToCart(bookToBeAdded) {
    const bookDuplication = cart.filter(obj => obj._id === bookToBeAdded._id);

    if (bookDuplication.length > 0) {
      toast.error('This item is already in the cart!');
      return;
    }

    changeGlobalState(updateCart, [...cart, bookToBeAdded]);
  }

  function removeFromCart(_id) {
    const newCart = cart.filter(obj => obj._id !== _id);
    changeGlobalState(updateCart, newCart);
  }

  function submitCart(totalCost) {
    setSending(true);

    setTimeout(() => {
      sendСart({
        user,
        cart,
        totalCost,
      }).finally(() => {
        changeGlobalState(updateCart, []);
        setSending(false);
      });
    }, GLOBAL.sending);
  }

  return (
    <Container>
      <AppBar setBooksByTag={() => setBooksByTag([])} />

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
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />

          <Route
            path="/signin"
            element={
              <PublicRoute redirectTo="/books" restricted>
                <SignInView />
              </PublicRoute>
            }
          />

          <Route
            path="/books"
            element={
              <PrivateRoute redirectTo="/signin">
                <BooksView booksByTag={booksByTag} />
              </PrivateRoute>
            }
          />

          <Route
            path="/books/:id"
            element={
              <PrivateRoute redirectTo="/signin">
                <SpecificBookView
                  setBooksByTag={setBooksByTag}
                  changeSelectCount={changeCount}
                  addToCart={addToCart}
                />
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
                <NotFoundView message="Check the correctness of the entered in the address bar" />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer />
      </Suspense>

      <ToastContainer />
    </Container>
  );
}

export default function AppWrapper() {
  return (
    <GlobalState>
      <App />
    </GlobalState>
  );
}
