import './Styles/style.css'
import './Styles/header.css'
import Home from './Pages/Home'
import TopBar from './Components/Common/TopBar'
import Navbar from './Components/Common/Navbar'
import { Footer } from './Components/Common/Footer'
import CodeOfConduct_Responsive from './Pages/CodeOfConduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FacilitiesPage from './Pages/FacilitiesPage'
import AssociationsPage from './Pages/AssociationsPage'
import PlacementPage from './Pages/PlacementPage'
import AcademicsPage from './Pages/AcademicsPage'
import ResearchPage from './Pages/ResearchPage'
import ClubDetailsPage from './Pages/ClubDetailsPage'
import DepartmentsPage from './Pages/DepartmentsPage'
// import Research from './Pages/Research'

function App() {

  return(
    <>
    <BrowserRouter>
    
      <TopBar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct_Responsive />} />
        <Route path="/associations" element={<AssociationsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/placements" element={<PlacementPage/>} /> 
        <Route path="/academics" element={<AcademicsPage/>} />
        <Route path="/departments" element={<DepartmentsPage/>} />
        <Route path="/research" element={<ResearchPage/>} />
        <Route path="/clubs/:slug" element={<ClubDetailsPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
