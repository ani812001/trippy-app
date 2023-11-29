// import "./styles.css";
// import { Routes,  Route, Router } from 'react-router-dom';

// import Home from "./routes/Home";
// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import Service from "./routes/Service";
// import PaymentPage from "./component/PaymentPage";
// import BookingDetails from "./component/BookingDetail";
// import SuccessPage from "./component/SuccessPage";




// export default function App(){
//   return(
//     <div className="App">
    
        
//       <Routes>
      
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/service" element={<Service/>} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/" element={<BookingDetails />} />
//         <Route path="/success" element={<SuccessPage />} />
//         <Route path="/payment" element={<PaymentPage/>}/>
      
//         {/* <Route path="/" element={<Trip />} />
//         <Route path="/trip/:tripId" element={<TripDetails />} /> */}
      
//       </Routes>
    
//       {/* <Home/> */}
//     </div>
    
//   );  
// }




// App.js
// App.js


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import PaymentPage from "./component/PaymentPage";
import BookingDetails from "./component/BookingDetail";
import SuccessPage from "./component/SuccessPage";
import LoginForm from "./component/LoginForm";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} /> {/* Add the login route */}
        <Route path="/" element={<BookingDetails />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

