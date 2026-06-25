import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './Pages/home'
import { DesignWork } from './Pages/designWork.jsx'
import { Illustration } from './Pages/illustration.jsx'
import { About } from './Pages/about.jsx'
import { Contact } from './Pages/contact.jsx'

import { BlissfulHabits } from './Pages/ProjectPages/BlissfulHabits.jsx'
import { LoyalSons } from './Pages/ProjectPages/LoyalSons.jsx'
import { PetPackaging } from './Pages/ProjectPages/PetPackaging.jsx'
import { PetProject } from './Pages/ProjectPages/PetProject.jsx'
import { GRDSM } from './Pages/ProjectPages/GRDSM.jsx'
import { CallumsABCs } from './Pages/ProjectPages/CallumsABCs.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DesignWork/>}/>
          <Route path="/illustration" element={<Illustration/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>

          <Route path="/BlissfulHabits" element={<BlissfulHabits/>}/>
          <Route path="/LoyalSons" element={<LoyalSons/>}/>
          <Route path="/PetPackaging" element={<PetPackaging/>}/>
          <Route path="/PetProject" element={<PetProject/>}/>
          <Route path="/GRDSM" element={<GRDSM/>}/>
          <Route path="/CallumsABCs" element={<CallumsABCs/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
