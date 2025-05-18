import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>Kmizrd</div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
            <li className='nav-cart'>Cart</li>
        </ul>

    </div>
  )
}

export default Navbar