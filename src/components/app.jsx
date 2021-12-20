import { Route, Routes } from "react-router-dom"
import Splash from './main/splash'
import Header from "./main/header"
import ContactForm from "./contact/contact_container"

const App = () => (
  <>
    <header>
      <Header />
    </header>
    
    <Routes>
      <Route path='/' element={<Splash />}/>
      <Route path='/contact' element={<ContactForm />} />
    </Routes>

    <footer>  
    </footer>
  </>
)

export default App