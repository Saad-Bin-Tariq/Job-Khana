import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import SignInForm from "./components/Signin";

import Footer from "./components/Footer";
import SignUpForm from "./components/signup";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/register" element={<SignUpForm />}></Route>
        <Route exact path="/login" element={<SignInForm />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
