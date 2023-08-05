import '../style/App.scss'
import Navbar from './Navbar'
import Section from './Section'
import Footer from './Footer'

function App() {

  return (
    <div className='app'>
      <div id='back'></div>
      <Navbar />
      <Section />
      <Footer />
    </div>
  )
}

export default App
