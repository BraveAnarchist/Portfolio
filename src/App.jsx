import { BrowserRouter, Routes, Route } from "react-router-dom";

import Side from "./Side"
import Home from "./Home"
import "./App.css"
import Cert from "./Cert"
import Project from "./Project"
import More from "./More";
import Contact from "./Contact";

function App(){
  return(
    <BrowserRouter>
    <Side/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/certificate" element={<Cert/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/more" element={<More/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
