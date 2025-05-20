import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Assuming logo.png is in assets

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>
          <Link to='/'>
            <img src={logo} alt='Kmizrd Logo' style={{height: '80px'}} /> {/* Adjust height as needed */}
          </Link>
        </div>
        <ul className='nav-menu'>
            <li><Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>Home</Link></li>
            <li><a href='/#categories' style={{textDecoration: 'none', color: 'inherit'}}>Categories</a></li>
            <li><a href='/#about' style={{textDecoration: 'none', color: 'inherit'}}>About</a></li>
            <li className='nav-contact'><a href='/#contact' style={{textDecoration: 'none', color: 'inherit'}}>Contact</a></li>
            <li className='nav-cart'><Link to='/cart' style={{textDecoration: 'none', color: 'inherit'}}>Cart</Link></li>
        </ul>
    </div>
  )
}

export default Navbar