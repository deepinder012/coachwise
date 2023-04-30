import React from 'react'
import Amenities from '../Amenities/Amenities'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token');
    if (authToken) {
      navigate('/home');
    }
    if (!authToken) {
      navigate('/login');
    }
  }, []);
  return (
    <>
    {/* Hero section */}
      <Hero/>
      {/* Services section */}
      <Services/>
      {/* Amenities section */}
      <Amenities/>
      {/* Testimonials */}
      <Testimonials/>
    </>
  )
}

export default Home