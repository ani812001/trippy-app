// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./BookingDetail.css";
// import PaymentPage from "./PaymentPage";

// function BookingDetails() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [numberOfTravelers, setNumberOfTravelers] = useState(1);
//   const [showPaymentForm, setShowPaymentForm] = useState(false);
  
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking submitted:", { name, email, phone, numberOfTravelers });
//     setShowPaymentForm(true);
//   };

//   const handlePayment = (paymentDetails) => {
//     console.log("Payment submitted:", paymentDetails);
//     navigate("/success"); // Redirect to success page after payment
//   };

//   return (
//     <div className="booking-details">
//       <h2>Booking Details</h2>
//       {!showPaymentForm ? (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//           <label>
//             Email:
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </label>
//           <label>
//             Phone:
//             <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
//           </label>
//           <label>
//             Number of Travelers:
//             <input
//               type="number"
//               value={numberOfTravelers}
//               onChange={(e) => setNumberOfTravelers(e.target.value)}
//               min="1"
//             />
//           </label>
//           <button type="submit">Book Now</button>
//         </form>
//       ) : (
//         <PaymentPage onSubmitPayment={handlePayment} />
//       )}
//     </div>
//   );
// }

// export default BookingDetails;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./BookingDetail.css";
// import PaymentPage from "./PaymentPage";

// function BookingDetails() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [numberOfTravelers, setNumberOfTravelers] = useState(1);
//   const [showPaymentForm, setShowPaymentForm] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking submitted:", { name, email, phone, numberOfTravelers });
//     setShowPaymentForm(true);
//   };

//   const handlePayment = (paymentDetails) => {
//     console.log("Payment submitted:", paymentDetails);
//     navigate("/success"); // Redirect to success page after payment
//   };

//   return (
//     <div className="booking-details">
//       <h2>Booking Details</h2>
//       {!showPaymentForm ? (
//         <form onSubmit={handleSubmit}>
//           {/* ... (input fields for booking details) */}
//           <button type="submit">Book Now</button>
//         </form>
//       ) : (
//         <PaymentPage onSubmitPayment={handlePayment} />
//       )}
//     </div>
//   );
// }

// export default BookingDetails;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingDetail.css";
import PaymentPage from "./PaymentPage";

function BookingDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numberOfTravelers, setNumberOfTravelers] = useState(1);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", { name, email, phone, numberOfTravelers });
    setShowPaymentForm(true);
  };

  const handlePayment = (paymentDetails) => {
    console.log("Payment submitted:", paymentDetails);
    navigate("/success"); // Redirect to success page after payment
  };

  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Booking Form */}
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Number of Travelers:
          <input
            type="number"
            value={numberOfTravelers}
            onChange={(e) => setNumberOfTravelers(e.target.value)}
            min="1"
          />
        </label>
        <button type="submit">Book Now</button>
      </form>

      {showPaymentForm && (
        // Payment Form
        <PaymentPage onSubmitPayment={handlePayment} />
      )}
    </div>
  );
}

export default BookingDetails;
