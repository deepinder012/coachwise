import React from 'react'
import { FaBasketballBall, FaCar, FaWifi } from 'react-icons/fa'
import '../../styles/amenities.css'
function Amenities() {
  return (
    <section className='wt-section bgs-primary'>
      <div className='container'>
        <div className='row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4'>
          <div className='col-md-8 text-center w-md-50 mx-auto mb-0'>
            <h2 className='mb-md-2 display-4 font-weight-normal'>
              Amenities
            </h2>
            <p className='lorem'>Coachwise has the best gym amenities to help you workout, train, recover and more.</p>
          </div>
        </div>
        {/* Features Block */}
        <div className='row'>
          <div className='col-lg-4 mb-3'>
            <div className='card'>
              <div className='rounded bg-white p-5 mb-4 text-center '>
                <FaCar className='display-4 text-primary-y mb-4' />
                <h6 className='amenities-heading'>Vehicle Parking</h6>
                <p className='text-muted lorem'>Coachwise has a plenty of parking space available for vehicles.This is one of the few places in the area with huge parking.</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mb-3'>
            <div className='card'>
              <div className='rounded bg-white p-5 mb-4 text-center '>
                <FaWifi className='display-4 text-primary-y mb-4' />
                <h6 className='amenities-heading'>Wi- Fi</h6>
                <p className='text-muted lorem'>Stream music or videos, check in on social media, or just keep in touch with high-speed wireless internet access!</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mb-3'>
            <div className='card'>
              <div className='rounded bg-white p-5 mb-4 text-center '>
                <FaBasketballBall className='display-4 text-primary-y mb-4' />
                <h6 className='amenities-heading'>Basketball Courts</h6>
                <p className='text-muted lorem'>Our Coachwise's basketball courts are always available for your next pickup game or even full-fledged match. Game on!.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}

export default Amenities