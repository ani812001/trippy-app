import "./styles.css";
import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";

export default function App(){
  return(
    <div className="App">
        
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/" element={<Trip />} />
        <Route path="/trip/:tripId" element={<TripDetails />} /> */}
      </Routes>
      

 
    
      {/* <Home/> */}
    </div>
    
  );  
}

