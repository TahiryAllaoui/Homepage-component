import menuCLose from '../assets/images/icon-menu-close.svg'
import menuOpen from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import '../style/Navbar.scss'

const Navbar = () => {
    return <nav className='navbar-main'>
        <img src={logo} alt="" />
        <div className="navbar-item">
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
        </div>
    </nav>
};

export default Navbar;