import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/Header/Header';
import './index.css';
// import App from './App';

import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/auth" element={<Auth />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route
        path="*"
        element={
          <main className="d-flex justify-content-center align-items-center p-4 fw-bold">
            <Button variant="success" className="big">
              <p>There's nothing here!</p>
            </Button>
          </main>
        }
      /> */}
      </Routes>
    </Router>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

