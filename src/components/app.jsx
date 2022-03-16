import { Route, Routes } from "react-router-dom"
import Splash from './main/splash'
import ContactForm from "./contact/contact_container"
import About from "./about/about"
import Projects from "./about/projects"

const App = () => (
  <div className="bodywrap">
    <div className="bodyscreen">
      <Routes>
        <Route path='/' element={<Splash />}/>
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </div>
  </div>
)

export default App