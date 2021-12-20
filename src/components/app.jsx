import { Route, Routes, Router } from "react-router-dom"
import Splash from './main/splash'

const App = () => (
  <>
    <header>
      <p>Hello</p>
    </header>
    
    <Routes>
      <Route path='/' element={<Splash />}/>
    </Routes>

    <footer>  
    </footer>
  </>
)

export default App