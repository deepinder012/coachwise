import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import login from '../../images/login.jpg'
import register from '../../images/register.jpg'
import '../../styles/authform.css'
function BasicTextFields({ title, setEmail, setPassword, handleAction }) {

  const linkPage = () => {
    if (title === 'Login') {
      return (
        <>
          Do not have an account?&nbsp;
          <Link to={'/register'} >Sign Up</Link>
        </>
      )
    }
    else {
      return (
        <>
          Already have an account?&nbsp;
          <Link to={'/'} >Sign In</Link>
        </>
      )
    }
  }

  return (
    <div className='wt-section auth-section' style={{backgroundImage: title==='Login' ?  `url(${login})` : `url(${register})`}}> 
      <div className='container text-white'>
        <div className='row justify-content-center align-items-center div-center'>
          <div className='p-5 col-10 col-sm-10 col-md-8 col-lg-4 col-xl-4 glass'>
            <h3 id='login' className="mt-5 mb-5 h1 text-center"><span className='text-info'>C</span>oach<span className='text-info'>W</span>ise {title}</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="mb-3 h3">Email address</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" className="mb-3 h3" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="mb-3 h3">Password</Form.Label>
              <Form.Control className="mb-3 h3" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Button className="mb-1 h5 btn btn-primary btn-pill" onClick={handleAction} variant="primary" type="submit">
              {title}
            </Button>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Text className="h3 text-info">
                {linkPage()}
              </Form.Text>
            </Form.Group>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BasicTextFields