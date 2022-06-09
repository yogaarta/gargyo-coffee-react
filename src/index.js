import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react";
import './index.css';
// import App from './App';

import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Forgot from "./pages/Forgot";
import ProductDetail from "./pages/ProductDetail";
import Payment from "./pages/Payment";
import History from "./pages/History";
import { PrivateNotLoggedIn, PrivateLoggedIn } from "./components/privateRoute";


function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={
              <PrivateLoggedIn>
                <SignUp />
              </PrivateLoggedIn>
            } />
            <Route path="/login" element={
              <PrivateLoggedIn>
                <Login />
              </PrivateLoggedIn>
            } />
            <Route path="/profile" element={
              <PrivateNotLoggedIn redirectedTo="/login">
                <Profile />
              </PrivateNotLoggedIn>
            } />
            <Route path="/product/*" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/payment" element={
              <PrivateNotLoggedIn redirectedTo="/login">
                <Payment />
              </PrivateNotLoggedIn>
            } />
            <Route path="/history" element={
              <PrivateNotLoggedIn redirectedTo="/login">
                <History />
              </PrivateNotLoggedIn>
            } />

            <Route
              path="*"
              element={
                <main className="d-flex justify-content-center align-items-center p-4 fw-bold">
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

