import menuCLose from '../assets/images/icon-menu-close.svg'
import menuOpen from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import '../style/Navbar.scss'

const Navbar = () => {
    const handleOpen = () => {
        let nav = document.querySelector('.navbar-item') as HTMLElement;
        nav.style.left = "42%";
        let back = document.querySelector('#back') as HTMLElement;
        back.style.display = "block";
    }
    const handleClose = () => {
        let nav = document.querySelector('.navbar-item') as HTMLElement;
        nav.style.left = "calc(100% + 1rem)";
        let back = document.querySelector('#back') as HTMLElement;
        back.style.display = "none";
    }
    return <nav className='navbar-main'>
        <div className='header-nav'>
            <img src={logo} alt="" />
            <img src={menuOpen} alt="" className='menu-open' onClick={handleOpen} />
        </div>
        <div className="navbar-item">
            <img src={menuCLose} alt="" className='menu-close' onClick={handleClose} />
            <div className="inner-navbar">
                <a href="#">Home</a>
                <a href="#">New</a>
                <a href="#">Popular</a>
                <a href="#">Trending</a>
                <a href="#">Categories</a>
            </div>
        </div>
    </nav>
};

export default Navbar;