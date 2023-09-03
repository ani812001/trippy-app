import React, { useState } from 'react';
import "./TripStyles.css";
// import { Link } from 'react-router-dom';
import TripDetailsModal from './TripDetailsModal.js';
import {Box, Typography} from "@mui/material";
// import BookingPage from './BookingPage';

 function TripData( props ){

    const {  details,  additionalDetails, heading, text, label } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
    const [tripName, setTripName] = useState('NONE')


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsBookingFormOpen(false);
    };

    const handleTrip = () => {
        // setIsBookingFormOpen(true);
        setTripName('LADAKH')
      };


    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <div>
                <button onClick={openModal}>{label}</button>
                <button className="booking-button" onClick={handleTrip}>
          Book Now
        </button>
            </div>
            {isModalOpen && (
                <TripDetailsModal
                    tripId={1}
                    heading={heading}
                    text={text}
                    additionalDetails={additionalDetails}
                    details = {details}
                    closeModal={closeModal}
                    
                />
            )}
            {
             tripName==='LADAKH' &&    
            }
            
            {/* {isBookingFormOpen && (
        <BookingPage tripDetails={props} onClose={closeModal} />
      )} */}

        </div>     
            
       
    );
 }

 export default TripData;