import '../../styles/profile.css'
import female from '../../images/avatars/female.png'
import male from '../../images/avatars/male.png'
import { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase-config'
function Profile() {

  const [joined, setJoined] = useState(false);
  const [joiningData, setJoiningData] = useState('');

  const fetchJoinings = async () => {
    let docNameEmail = sessionStorage.getItem('Email');
  
    const docRef = doc(db, "joinings", docNameEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setJoined(true);
      setJoiningData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      setJoined(false);
      console.log("No Joinings till now!");
    }
  }

  useEffect(() => {
    fetchJoinings();
  }, [])
  return (
    <section className='wt-section' id='profile-section'>
      <div className='container py-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col col-lg-10 mb-4 mb-lg-0'>
            <div className='card mb-3' id='#profile-card'>
              <div className='row g-0'>
                <div className='col-lg-4 gradient-custom text-center text-white'>
                  <img src={joiningData.gender === 'Male' ? male : female}
                    alt="Avatar" className="img-fluid my-5" width={250} />
                  <h1>{joiningData.fullName}</h1>
                  <p className='h4'>Age: {joiningData.age}</p>
                  <p className='h5'>Gender: {joiningData.gender}</p>
                </div>
                <div className='col-lg-8 bg-dark text-white'>
                  <div className='card-body p-4'>
                    <h2>{joined ? 'Information' : 'No Information available as of now. Please choose a plan and fill your info.'}</h2>
                    <hr className='mt-0 mb-4'/>
                    <div className='row pt-1'>
                      <div className='col-6 mb-3'>
                        <h3>Email</h3>
                        <p className='text-muted h4'>{joiningData.userEmail}</p>
                      </div>
                      <div className='col-6 mb-3'>
                        <h3>Phone</h3>
                        <p className='text-muted h4'>{joiningData.phoneNumber}</p>
                      </div>
                    </div>
                    <hr className='mt-0 mb-4'/>
                    <div className='row pt-1'>
                      <div className='col-10 mb-3'>
                        <h3>Address</h3>
                        <p className='text-muted h4'>{joiningData.address}</p>
                      </div>
                    </div>
                    <hr className='mt-0 mb-4'/>
                    <div className='row pt-1'>
                      <div className='col-6 mb-3'>
                        <h3>Exercise</h3>
                        <p className='text-muted h4'>{joiningData.exerciseName}</p>
                      </div>
                      <div className='col-6 mb-3'>
                        <h3>Timings</h3>
                        <p className='text-muted h4'>{joiningData.exerciseTime}</p>
                      </div>
                    </div>
                    <hr className='mt-0 mb-4'/>
                    <div className='row pt-1'>
                      <div className='col-6 mb-3'>
                        <h3>Joining Date</h3>
                        <p className='text-muted h4'>{joiningData.dateOfJoining}</p>
                      </div>
                      <div className='col-6 mb-3'>
                        <h3>Plan Duration</h3>
                        <p className='text-muted h4'>{joiningData.duration} {joiningData.duration == 1 ? 'Month' : 'Months'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile