import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import { toast } from 'react-toastify'
import { GoSignOut } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'
import '../../styles/header.css'
function Header(props) {
  let navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    sessionStorage.removeItem('Email');
    navigate('/');
    toast.success('Logged Out Successfully')
  }

  return (
    <header style={{ maxWidth: '100vw' }} id='top'>
      <nav style={{ maxWidth: '100vw' }} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand text-uppercase font-weight-bolder text-info" href="/home">
            <img src={logo} alt="Logo" width="60" height="auto" className="d-inline-block align-text-top" />
            &nbsp;&nbsp;Coachwise
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to='home'>
                  <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='about'>
                  <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    About
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='trainers'>
                  <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    Trainers
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='price'>
                  <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    Price
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='contact'>
                  <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="nav">
                <li className="nav-item mx-2">
                  <Link className="nav-link text-light btn btn-outline-info" to={'profile'}>
                    <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                      <FaUserCircle size={20} className='text-info' /> Profile
                    </span>
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-light btn btn-outline-info" onClick={handleLogout}>
                    <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                      <GoSignOut size={20} className='text-info' /> Logout
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header