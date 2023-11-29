// // PaymentPage.js
// import React, { useState } from "react";

// function PaymentPage() {
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvv, setCVV] = useState("");
//   const [fullName, setFullName] = useState("");

//   const handlePayment = (e) => {
//     e.preventDefault();
//     // Handle payment logic (e.g., send payment details to the server)
//     console.log("Payment submitted:", { cardNumber, expiryDate, cvv, fullName });
//   };

//   return (
//     <div>
//       <h2>Payment Page</h2>
//       <form onSubmit={handlePayment}>
//         <label>
//           Card Number:
//           <input
//             type="text"
//             value={cardNumber}
//             onChange={(e) => setCardNumber(e.target.value)}
//             maxLength="16"
//           />
//         </label>
//         <label>
//           Expiry Date:
//           <input
//             type="text"
//             value={expiryDate}
//             onChange={(e) => setExpiryDate(e.target.value)}
//             placeholder="MM/YY"
//             maxLength="5"
//           />
//         </label>
//         <label>
//           CVV:
//           <input
//             type="text"
//             value={cvv}
//             onChange={(e) => setCVV(e.target.value)}
//             maxLength="3"
//           />
//         </label>
//         <label>
//           Full Name:
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//         </label>
//         <button type="submit">Submit Payment</button>
//       </form>
//     </div>
//   );
// }

// export default PaymentPage;

// src/components/PaymentPage.js
import React, { useState } from "react";

function PaymentPage({ onSubmitPayment }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [fullName, setFullName] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    // Validate the payment details if needed
    // ...

    // Call the onSubmitPayment function with payment details
    onSubmitPayment({ cardNumber, expiryDate, cvv, fullName });
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <form onSubmit={handlePayment}>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            maxLength="3"
          />
        </label>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;
