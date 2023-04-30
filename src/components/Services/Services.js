import React from 'react'
import { Link } from 'react-router-dom'
import aerobics from '../../images/services/aerobics.jpg'
import bodybuilding from '../../images/services/bodybuilding.jpg'
import yoga from '../../images/services/yoga.jpg'
function Services() {
  return (
    <section className='wt-section services-section bg-light' id='services'>
      <div className='container'>
        <div className='row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4'>
          {/* our services */}
          <div className='col-md-8 text-center w-md-50 mx-auto mt-5'>
            <h2 className='mb-md-2'>Our Services</h2>
            <p className='text-muted lorem'>Our services include group workouts for aerobic exercises and also includes intense bodybuilding-exercises. We also help you gain mental fitness with yoga and meditation.</p>
          </div>
        </div>
        <div className='row justify-content-center'>

          {/* card-1 */}
          <div className='col-lg-4'>
            <div className='card mb-md-2 mb-3'>
              <Link to='../price'><img src={bodybuilding} alt='' className='card-img-top'/></Link>
              <div className='card-body py-4'>
                <strong className='mb-2 d-block'>Body-Building</strong>
                <h5 className='mb-4 text-info'>High-Intensity Interval Training (HIIT)</h5>
                <div className='mb-4'>
                  <p className='text-justify'>Bodybuilding is the use of progressive resistance exercise to control and develop one's muscles. Bodybuilding takes a great amount of effort and time to reach the desired results.</p>
                </div>
              </div>
            </div>
          </div>

          
          {/* card-2 */}
          <div className='col-lg-4'>
            <div className='card mb-md-2 mb-3'>
              <Link to='../price'><img src={yoga} alt='' className='card-img-top'/></Link>
              <div className='card-body py-4'>
                <strong className='mb-2 d-block'>Yoga</strong>
                <h5 className='mb-4 text-info'>Outdoor Coaching and Instruction</h5>
                <div className='mb-4'>
                  <p className='text-justify'>Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation.There are many disciplines within the yoga practice.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* card-3 */}
          <div className='col-lg-4'>
            <div className='card mb-md-2 mb-3'>
              <Link to='../price'><img src={aerobics} alt='' className='card-img-top'/></Link>
              <div className='card-body py-4'>
                <strong className='mb-2 d-block'>Aerobics</strong>
                <h5 className='mb-4 text-info'>World Class Aerobics Trainers</h5>
                <div className='mb-4'>
                  <p className='text-justify'>By definition, aerobic exercise means “with oxygen.” Your breathing and heart rate will increase during aerobic activities. Aerobic exercise helps keep your heart, lungs, and circulatory system healthy.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services