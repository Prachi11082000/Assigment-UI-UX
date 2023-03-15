import Create from "./Componants/Create";
// import Data from "./Componants/Data";
 import Footer from "./Componants/Footer";
import {Routes,Route}from"react-router-dom"
import Work from"./Componants/Work"
import Link from"./Componants/Link"
import Services from "./Componants/Services"
import Clients from"./Componants/Clients"
import About from "./Componants/About";
import Knowledge from"./Componants/Knowledge"
import Contact from"./Componants/Contact"
import Design from"./Componants/Design"
import Genral from "./Componants/Genral";
import Psychology from "./Componants/Psychology";
import Technology from "./Componants/Technology";
import Marketing from "./Componants/Neuromarketing";
import Neuromarketing from "./Componants/Neuromarketing";
import Resources from "./Componants/Resources";
function App() {
  return (
    <div className="App">
      <Create/>
      <Routes>
        <Route path="/" element={<Work/>}/>
        <Route path="/link" element={<Link/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/knowledge" element={<Knowledge/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dd" element={<Design/>}/>
        <Route path="/genaral" element={<Genral/>}/>
        <Route path="/physology" element={<Psychology/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/Neuromarketing" element={<Neuromarketing/>}/>
        <Route path="/resourses" element={<Resources/>}/>
      </Routes>
     <Footer/>
     {/* <Data/> */}
   
    
    </div>
  );
}

export default App;
