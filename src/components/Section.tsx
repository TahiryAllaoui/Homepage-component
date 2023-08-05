import '../style/Section.scss'
import mainSection from '../assets/images/image-web-3-desktop.jpg'
import mainSectionMobile from '../assets/images/image-web-3-mobile.jpg'

const Section = () => {

    return <div className='sect'>
        <div className="main-section">
            <img src={mainSection} alt="" className='desktoppng' style={{ width: '100%' }} />
            <img src={mainSectionMobile} alt="" className='mobilepng' />
            <div className="main-section-article">
                <h2>The Bright Futur of Web 3.0?</h2>
                <div className="inner-section-article">
                    <p>We dive into the next evolution of the web that claims to put
                        the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className="readme">R E A D <span> M O R E</span></button>
                </div>
            </div>
        </div>
        <div className="side-section">
            <div className="side-section-item">
                <h2>New</h2>
                <div className="link">
                    <a href="#">
                        <h2>Hydrogen VS Electric Cars</h2>
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </a>
                    <a href="#" style={{ borderTop: '1px solid grey', borderBottom: '1px solid grey', paddingBottom: '1rem' }}>
                        <h2 style={{ paddingTop: 0, marginTop: '1rem' }}>The Downsides of AI Artistry</h2>
                        What are the possible adverse effect of on-demand AI image generation?
                    </a>
                    <a href="#">
                        <h2>Is VC Funding Drying Up?</h2>
                        Private funding by VC firms is down 50% YOY. We take alook at what that means.
                    </a>
                </div>
            </div>
        </div>
    </div>
};

export default Section;