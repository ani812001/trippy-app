
import React, { useState } from 'react';
import "./TripStyles.css";
import TripDetailsModal from './TripDetailsModal.js';
import { Box, Typography } from "@mui/material";
import BookingDetail from './BookingDetail';



function TripData(props) {
  const { tripId, details, additionalDetails, heading, text, label } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setIsBookingFormOpen(false);
  };

  const handleTrip = () => {
    setIsBookingFormOpen(!isBookingFormOpen); // Toggle the booking form
    // setIsModalOpen(!isModalOpen);   // Close the modal if it's open
  };

  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
        {isBookingFormOpen ? (
          // Render the booking form here
          <BookingDetail onClose={handleTrip} />
        ) : (
          // Render the "Book Now" button here
          <button className="booking-button" onClick={handleTrip}>
            {isBookingFormOpen ? 'Close' : 'Book Now'}
          </button>
        )}
        <button onClick={openModal}>{label}</button>
      {isModalOpen && (
        <TripDetailsModal
          tripId={tripId}
          heading={heading}
          text={text}
          additionalDetails={additionalDetails}
          details={details}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default TripData;


