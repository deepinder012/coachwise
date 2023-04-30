import React from 'react'
import '../../styles/hero.css'
function Hero() {
  return (
    <section className='wt-section hero-section'>
      <div className='container row div-center'>
        <div className='col-md-6 text-info'>
          <h1 className='text-uppercase font-weight-bold' style={{color: '#54B4D3'}}>Ultimate Fitness</h1>
          <a href='#services' className='btn btn-lg btn-outline-light py-2 px-4'>Our Services</a>
        </div>
      </div>
    </section>
  )
}

export default Hero