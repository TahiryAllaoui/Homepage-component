import '../style/Section.scss'
import mainSection from '../assets/images/image-web-3-desktop.jpg'

const Section = () => {

    return <section>
        <div className="main-section">
            <img src={mainSection} alt="" style={{ width: '100%' }} />
            <div className="main-section-article">
                <h2>The Bright Futur of Web 3.0?</h2>
                <div className="inner-section-article">
                    <p>We dive into the next evolution of the web that claims to put
                        the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className="readme">READ MORE</button>
                </div>
            </div>
        </div>
        <div className="side-section">
            <h2>New</h2>
            <a href="#">
                <h2>Hydrogen VS Electric Cars</h2>
                Will hydrogen-fueled cars ever catch up to EVs?
            </a>
            <a href="#">
                <h2>The Downsides of AI Artistry</h2>
                What are the possible adverse effect of on-demand AI image generation?
            </a>
            <a href="#">
                <h2>Is VC Funding Drying Up?</h2>
                Private funding by VC firms is down 50% YOY. We take alook at what that means.
            </a>
        </div>
    </section>
};

export default Section;