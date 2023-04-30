import { useState } from 'react'
import trainersjson from './trainers.json'

function Trainers() {

  const [trainers, setTrainers] = useState(trainersjson);

  return (
    <section className='bg-light wt-section' id='team'>
      <div className='container'>
        <div className='row justify-content-md-center text-center mb-lg-5 mb-4 pb-lg-5'>
          <div className='col-md-12'>
            <h2 className='h1'>
              Our Trainers
            </h2>
            <p className='lorem'>We have best training and trainers for you. The trainers really push,motivate and helps us to exceed our limits and achieve our goals.</p>
          </div>
        </div>

        <div className='row'>
          {
            trainers.map((item) => (
              <div key={item.id} className='col-lg-3 col-sm-6 mb-5'>
                <img src={item.image} alt='team member' className='w-100 rounded-top' />
                <div className=' bg-white text-center rounded p-4'>
                  <div className='mb-3'>
                    <h5 className='mb-1'>
                      {item.name}
                    </h5>
                    <small className='d-block font-style-normal text-uppercase text-primary-y wt-letter-spacing-x5'>
                      {item.experience} years of experience
                    </small>
                    <p className='d-block font-style-normal text-info wt-letter-spacing-x5'>
                      Specialization in {item.specialization}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }


          {/* team member 2 */}
          {/* <div className='col-lg-3 col-sm-6 mb-5'>
            <img src={team2} alt='team member' className='w-100 rounded-top' />
            <div className=' bg-white text-center rounded p-4'>
              <div className='mb-3'>
                <h5 className='mb-1'>
                  Giga Chad
                </h5>
                <small className='d-block font-style-normal text-uppercase text-primary-y wt-letter-spacing-x5'>
                  Sr. Trainer
                </small>
              </div>
            </div>
          </div> */}

          {/* team member 3 */}
          {/* <div className='col-lg-3 col-sm-6 mb-5'>
            <img src={team3} alt='team member' className='w-100 rounded-top' />
            <div className=' bg-white text-center rounded p-4'>
              <div className='mb-3'>
                <h5 className='mb-1'>
                  Bruce Willamson
                </h5>
                <small className='d-block font-style-normal text-uppercase text-primary-y wt-letter-spacing-x5'>
                  Trainer
                </small>
              </div>
            </div>
          </div> */}

          {/* team member 4 */}
          {/* <div className='col-lg-3 col-sm-6 mb-5'>
            <img src={team4} alt='team member' className='w-100 rounded-top' />
            <div className=' bg-white text-center rounded p-4'>
              <div className='mb-3'>
                <h5 className='mb-1'>
                  Johanna Care
                </h5>
                <small className='d-block font-style-normal text-uppercase text-primary-y wt-letter-spacing-x5'>
                  Operations Head
                </small>
              </div>
            </div>
          </div> */}

        </div>

      </div>
    </section>
  )
}

export default Trainers