import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

import emailIcon from "./assets/email.gif"
import linkedInIcon from "./assets/linkedinn.gif"
import img from "../public/portrait.JPG"

function App () {
  return (
    <div className='container'>
      <Info 
        emailIcon={emailIcon}
        linkedInIcon={linkedInIcon}
        // image="../public/portrait.JPG"
        image={img}
      />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App