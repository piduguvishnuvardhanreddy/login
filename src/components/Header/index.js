import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className='nav-header'>
      <div className='nav-content'>
        <div className='nav-bar-mobile-logo-container'>
          <Link to='/'>
            <img
              className='website-logo'
              src='https://media.istockphoto.com/id/1345681613/vector/creative-people-logo-vector-illustration-design-editable-resizable-eps-10.jpg?s=612x612&w=0&k=20&c=9XUHICA1ljbxBcLw8ERp0kDDxLNQ8Bp2yR4aUSS6SBs='
              alt='website logo'
            />
          </Link>

          <button
            type='button'
            className='nav-mobile-btn'
            onClick={onClickLogout}
          >
            <img
              src='https://media.istockphoto.com/id/1345681613/vector/creative-people-logo-vector-illustration-design-editable-resizable-eps-10.jpg?s=612x612&w=0&k=20&c=9XUHICA1ljbxBcLw8ERp0kDDxLNQ8Bp2yR4aUSS6SBs='
              alt='nav logout'
              className='nav-bar-img'
            />
          </button>
        </div>

        <div className='nav-bar-large-container'>
          <div className='nav-container-logo'>
            <div className='logo-text-container'>
              <Link to='/'>
                <img
                  className='website-logo'
                  src='https://media.istockphoto.com/id/1345681613/vector/creative-people-logo-vector-illustration-design-editable-resizable-eps-10.jpg?s=612x612&w=0&k=20&c=9XUHICA1ljbxBcLw8ERp0kDDxLNQ8Bp2yR4aUSS6SBs='
                  alt='website logo'
                />
              </Link>
              <h1 className='text-logo nav-link'>LOGO</h1>
              <button
                type='button'
                className='logout-desktop-btn'
                onClick={onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className='section-container'>
            <ul className='nav-menu'>
              <li className='nav-menu-item'>
                <Link to='/' className='nav-link'>
                  SHOP
                </Link>
              </li>

              <li className='nav-menu-item'>
                <Link to='/products' className='nav-link'>
                  SKILLS
                </Link>
              </li>

              <li className='nav-menu-item'>
                <Link to='/cart' className='nav-link'>
                  STORIES
                </Link>
              </li>

              <li className='nav-menu-item'>
                <Link to='/cart' className='nav-link'>
                  ABOUT
                </Link>
              </li>

              <li className='nav-menu-item'>
                <Link to='/cart' className='nav-link'>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
