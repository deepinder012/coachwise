import React from 'react'
import avatar1 from '../../images/avatars/avatar1.jpg'
import avatar2 from '../../images/avatars/avatar2.jpg'
import '../../styles/testimonials.css'
function Testimonials() {
  return (
    <section className='wt-section'>
      <div className='container'>
        <div className='row justify-content-center text-center pb-lg-4 mb-lg-5 mb-3'>
          <div className='col-md-8 text-center w-md-50 mx-auto mb-0'>
            <h2 className='mb-md-2'>
              Testimonials
            </h2>
            <p className='lorem'>We have best training and trainers for you. Coachwise has changed the lives of many people.Super friendly atmosphere,Every session is different and fun.The trainers really push,motivate and helps us to exceed our limits and achieve our goals.</p>
          </div>
        </div>

        <div className='row'>
          {/* testimonial-1 */}
          <div className='col-lg-6'>
            <blockquote className='wt-blockquote mb-3'>
              I have been working out in it for the last 4 months. Gym environment is too good and very cooperative.Trainers are really excellent.
            </blockquote>
            <div className='media d-flex align-items-center justify-content-start'>
              <img src={avatar1} alt='avatar' width={100} className='rounded mx-3 mt-2' />
              <div className='media-body'>
                <h5>
                  Sheryl Winfrey
                </h5>
                <span className='text-muted'>
                  Director (SP Systems)
                </span>
              </div>
            </div>
          </div>

          {/* testimonial-2 */}
          <div className='col-lg-6 px-lg-5'>
            <blockquote className='wt-blockquote mb-3'>
              Trainers have done their jobs very properly. All the trainers are very good and hardworking. Gym is really so nice.
            </blockquote>
            <div className='media d-flex align-items-center justify-content-start'>
              <img src={avatar2} alt='avatar' width={100} className='rounded mx-3 mt-2' />
              <div className='media-body'>
                <h5>
                  John Doe
                </h5>
                <span className='text-muted'>
                  Owner (NH Tech.)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials