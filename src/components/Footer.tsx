import retro from '../assets/images/image-retro-pcs.jpg'
import laptop from '../assets/images/image-top-laptops.jpg'
import gaming from '../assets/images/image-gaming-growth.jpg'
import '../style/Footer.scss'

const Footer = () => {
    return <footer>
        <div className='footer-item'>
            <img src={retro} alt="" />
            <div className="inner-footer">
                <h2>01</h2>
                <a href='#'>Reviving Retro PCs</a>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className='footer-item'>
            <img src={laptop} alt="" />
            <div className="inner-footer">
                <h2>02</h2>
                <a href='#'>Top 10 Laptops of 2023</a>
                <p>Our best picks foe various needs and budgets</p>
            </div>
        </div>
        <div className='footer-item'>
            <img src={gaming} alt="" />
            <div className="inner-footer">
                <h2>03</h2>
                <a href='#'>The Growth of Gaming</a>
                <p>How the pandemic has sparked fresh opportunities</p>
            </div>
        </div>
    </footer>
};

export default Footer;