import React from 'react'
import aboutImg from '../../images/about.jpg'
import professionalsImg from '../../images/professionals.jpg'
function About() {
  return (
    <>
      <section className='wt-section pb-0' id='about'>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-lg-5'>
              <img width={'90%'} src={aboutImg} alt='' className='rounded-lg' />
            </div>
            <div className='col-lg-7'>
              <h2 className='mb-4 mt-3'>About Us</h2>
              <p className='text-muted lorem'>Coachwise is a fitness centre that changes your perspective about fitness. We believe in building a stronger you, through personalization and innovation in your everyday goals. We are the gym filled with Luxurious amenities, stunning decor and cutting edge equipment.</p>
            </div>
          </div>
        </div>
      </section>


      <section className='wt-section'>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>

            <div className='col-lg-7'>
              <h2 className='mb-4'>Professional Trainers</h2>
              <p className='text-muted lorem'>As a member of Coachwise, you will enjoy access to the best coaches, personal trainers, and group exercise instructors. That means access to motivating and knowledgeable experts dedicated to your success. Whatever your goal or experience level, our wide range of fitness classes and offerings can help you reach your goals.</p>
            </div>

            <div className='col-lg-5 mt-3'>
              <img width={'90%'} src={professionalsImg} alt='' className='rounded-lg' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About