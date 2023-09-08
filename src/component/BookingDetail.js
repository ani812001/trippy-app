
import React, { useState } from "react";
import "./BookingDetail.css";

function BookingDetails({onClose}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numberOfTravelers, setNumberOfTravelers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", { name, email, phone, numberOfTravelers });
  };

  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      <form onSubmit={handleSubmit}>
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
        <button onClick={onClose}>Close</button>
      </form>
    </div>
  );
}

export default BookingDetails;
