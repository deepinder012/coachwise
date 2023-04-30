import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/js/bootstrap.min.js";
import AuthForm from './components/common/Form';
import Header from './components/Header/Header';
import About from './components/About/About';
import Trainers from './components/Trainers/Trainers';
import Price from './components/Price/Price';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './components/firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import Profile from './components/Profile/Profile';
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/home');
    }
  }, [])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home');
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
          sessionStorage.setItem('Email', response.user.email);
          toast.success('Login Successful');
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the email');
          }
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home');
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
          sessionStorage.setItem('Email', response.user.email);
          toast.success('User Created');
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
    }
  }
  const authToken = sessionStorage.getItem('Auth Token');

  return (
    <>
      {/* Header */}
      {authToken ? <Header /> : <></>}
      <Routes>
        {/* Login */}
        <Route
          path='/'
          element={
            <AuthForm
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />}
        />
        {/* Register */}
        <Route
          path='/register'
          element={
            <AuthForm
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />}
        />
        {/* Home */}
        <Route
          path='/home'
          element={<Home />}
        />
        {/* About section */}
        <Route
          path='/about'
          element={<About />}
        />

        {/* Trainers Section */}
        <Route
          path='/trainers'
          element={<Trainers />}
        />

        {/* Price */}
        <Route
          path='/price'
          element={<Price />}
        />

        {/* Contact */}
        <Route
          path='/contact'
          element={<Contact />}
        />

        <Route
          path='/profile'
          element={<Profile />}
        />
      </Routes>
      {/* Footer */}
      {authToken ? <Footer /> : <></>}
      <ToastContainer />
    </>
  );
}

export default App;
