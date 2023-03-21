import { Route, Routes } from "react-router-dom"
import Splash from './main/splash'
import ContactForm from "./contact/contact_container"
import About from "./about/about"
import Projects from "./about/projects"
import ResDisplay from "./about/resume"
import Footer from "./main/footer"

const App = () => (
  <div className="bodywrap">
    <div className="bodyscreen">
      <Routes>
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />}/>
        <Route path='/resume' element={<ResDisplay />} />
        <Route path='/' element={<Splash />} />
      </Routes>
    </div>
    <Footer />
  </div>
)

export default App