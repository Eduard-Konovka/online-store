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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [cart, setCart] = useState([]);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

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
                    <BooksView setBooks={setBooks} onClick={setSelectedBook} />
                  </PrivateRoute>
                }
              />

              <Route
                path="/books/:id"
                element={
                  <PrivateRoute redirectTo="/signin">
                    <SpecificBookView
                      bookId={selectedBook}
                      addToCart={addToCart}
                    />
                  </PrivateRoute>
                }
              />

              <Route
                path="/cart"
                element={
                  <PrivateRoute redirectTo="/signin">
                    <CartProvider value={cart}>
                      <CartView
                        sending={sending}
                        changeSelectCount={changeCount}
                        onDeleteBook={removeFromCart}
                        onSubmit={submitCart}
                      />
                    </CartProvider>
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
          </BooksProvider>

          <Footer />
        </Suspense>

        <ToastContainer />
      </UserProvider>
    </Container>
  );
}
