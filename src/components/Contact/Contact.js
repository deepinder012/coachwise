import { SlLocationPin } from 'react-icons/sl'
import { BsTelephoneFill } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

function Contact() {
  return (
    <section className='wt-section bg-light'>
      <div className='container'>
        <div className='row justify-content-md-center text-center pb-lg-2 mb-lg-5 mb-3'>
          <div className='col-md-8 text-center w-md-50 mx-auto mb-0'>
            <h2 className='mb-md-2'>
              Get In touch with us
            </h2>
            <p className='lorem'>You can contact us by directly reaching our office, through phone or email.</p>
          </div>
        </div>

        {/* contact section */}
        <div className='row justify-content-md-center text-center pb-5'>

          {/* location */}
          <div className='col-lg-4'>
            <div className='card mb-md-0 mb-3'>
              <div className='card-body py-4'>
                <SlLocationPin className='display-4 mb-2 text-info' />
                <strong className='mb-2 d-block h4'>Location</strong>
                <a style={{ textDecoration: 'none' }} href='https://goo.gl/maps/hc3BnGU3tkoXZVm1A' target={'_blank'} rel="noreferrer" itemProp='location'><h5 className='mb-4 text-primary'>Coachwise GYM Derabassi</h5></a>
              </div>
            </div>
          </div>

          {/* phone */}
          <div className='col-lg-4'>
            <div className='card mb-md-0 mb-3'>
              <div className='card-body py-4'>
                <BsTelephoneFill className='display-4 mb-2 text-info' />
                <strong className='mb-2 d-block h4'>Phone</strong>
                <a style={{ textDecoration: 'none' }} href='tel:+91-8264196880' rel="noreferrer" itemProp='telephone'><h5 className='mb-4 text-primary'>8264196880</h5></a>
              </div>
            </div>
          </div>

          {/* email */}
          <div className='col-lg-4'>
            <div className='card mb-md-0 mb-3'>
              <div className='card-body py-4'>
                <SiGmail className='display-4 mb-2 text-info' />
                <strong className='mb-2 d-block h4'>E-Mail</strong>
                <a style={{ textDecoration: 'none' }} href='mailto:deep6421@gmail.com' target="_top" rel="noreferrer" itemProp='email'><h5 className='mb-4 text-primary'>info@Coachwise.com</h5></a>
              </div>
            </div>
          </div>


        </div>

        <div className='row justify-content-md-center text-center pb-2'>
          <h2 className='pb-3'>
            Reach to us by following this map
          </h2>
          <iframe title="location" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.9009725357064!2d76.83987901518071!3d30.580340800012017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46e49afbed14c939!2sFZ%20GYM%20%26%20SPA%20-%20Gym%20in%20Derabassi!5e0!3m2!1sen!2sin!4v1674134157472!5m2!1sen!2sin"} width="100%" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact