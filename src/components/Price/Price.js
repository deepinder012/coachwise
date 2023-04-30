import { Button } from 'react-bootstrap'
import { useState } from 'react'
import FormModal from '../FormModal/FormModal'
import plansjson from './plans.json'
function Price() {
  const [modalShow, setModalShow] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseTime, setExerciseTime] = useState('');
  const [plans, setPlans] = useState(plansjson)
  const handleModal = (exerciseName,exerciseTime) => {
    const tempemail = sessionStorage.getItem('Email');
    setUserEmail(tempemail);
    setExerciseName(exerciseName);
    setExerciseTime(exerciseTime)
    setModalShow(true)
  }

  return (
    <>
      <section className='wt-section' id='price'>
        <div className='container'>
          <div className='row justify-content-md-center text-center mb-4 pb-lg-3'>
            <div className='col-lg-12 text-center mx-auto mb-0'>
              <h2 className='h1'>
                Price &#38; Schdule
              </h2>
              <p className='lorem'>Let us know the plans and services you are going to choose. Also you can choose the timing of different Exercises.</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 text-center mx-auto mb-0'>
              <div className='table-responsive'>
                <table className='table table-borderless'>

                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Class</th>
                      <th>Price</th>
                      <th>Join Now</th>
                    </tr>
                  </thead>

                  <tbody>

                    {
                      plans.map((item) => (
                        <tr key={item.id}>
                          <td>{item.timing}</td>
                          <td>
                            <h6>{item.name}</h6>
                            <span className='text-muted'>{item.place}</span>
                          </td>
                          <td>
                            <h6>&#8377;700</h6>
                            <span className='text-muted'>per month</span>
                          </td>
                          <td>
                            <Button onClick={() => handleModal(item.name, item.timing)} className='btn btn-primary btn-pill'>Join Now</Button>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <FormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        useremail={userEmail}
        exercisename={exerciseName}
        exercisetime={exerciseTime}
      />
    </>
  )
}

export default Price