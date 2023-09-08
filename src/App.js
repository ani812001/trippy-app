import "./styles.css";
import { Routes,  Route } from 'react-router-dom';

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

// import React, { useState } from 'react';

// // Create two components: Home and NewComponent
// const Home = () => <h2>Home Page</h2>;

// const NewComponent = () => (
//   <div>
//     <h2>New Component</h2>
//     <p>This is the new component that opens on button click.</p>
//   </div>
// );

// function App() {
//   const [showNewComponent, setShowNewComponent] = useState(false);

//   const handleButtonClick = () => {
//     setShowNewComponent(true);
//   };

//   return (
//     <div>
//       <h1>React App</h1>
//       {showNewComponent ? (
//         <NewComponent />
//       ) : (
//         <div>
//           <Home />
//           <button onClick={handleButtonClick}>Open New Component</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


