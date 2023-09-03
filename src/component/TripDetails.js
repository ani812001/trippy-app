import React, { useState } from 'react';
import {Box, Typography} from "@mui/material";
// import BookingForm from './BookingPage';


function TripDetailsModal({  heading, additionalDetails, text, closeModal }) {

    return (
        <div className="modal">
            <div className="modal-content">
                
                <h2>{heading}</h2>
                <p>{text}</p>
                <h3>Additional Details: </h3>
                {/* <p>{additionalDetails}</p> */}
                <ul>
                    {additionalDetails.map((additionalDetails , index)=>(
                        <li key={index}>{additionalDetails}</li>    
                    ))}
                </ul>
                <button onClick={closeModal}>Close</button>
            </div>
            {/* {/* {isBookingFormOpen && (
    //     <BookingForm tripDetails={props} onClose={closeModal} /> */}
    
        </div>
    );
}

export default TripDetailsModal;