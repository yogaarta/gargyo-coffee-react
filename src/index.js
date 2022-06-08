import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./redux/store"
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
import PrivateElement from "./components/privateRoute";


function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={
            <PrivateElement redirectedTo="/login">
              <Profile />
            </PrivateElement>
          } />
          <Route path="/product/*" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/payment" element={
            <PrivateElement redirectedTo="/login">
              <Payment />
            </PrivateElement>
          } />
          <Route path="/history" element={
            <PrivateElement redirectedTo="/login">
              <History />
            </PrivateElement>
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
    </ReduxProvider>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

