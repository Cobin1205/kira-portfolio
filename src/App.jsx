import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './Pages/home'
import { DesignWork } from './Pages/designWork.jsx'
import { Illustration } from './Pages/illustration.jsx'
import { About } from './Pages/about.jsx'
import { Contact } from './Pages/contact.jsx'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DesignWork/>}/>
          <Route path="/illustration" element={<Illustration/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
