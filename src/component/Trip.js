import TripData from "./TripData";
import "./TripStyles.css";
import "./TripStyles.css"
import Trip1Image from "../assets/6.jpg"
import Trip2Image from "../assets/7.jpg"
import Trip3Image from "../assets/8.jpg"
import axios from "axios";
import { useEffect, useState } from "react";

function Trip() {
    
    const cityToTripImageMap = {
        City1: Trip1Image,
        City2: Trip2Image,
        City3: Trip3Image,
      };

    const [trips, setTrips] = useState([]);
  
    useEffect(() => {
      // Define your API endpoint
      const apiEndpoint = 'http://localhost:8080/tours';
  
      // Fetch trips from the API
      axios.get(apiEndpoint)
        .then(response => {
            console.log('hello')
            console.log(response.data)
            setTrips(response.data)
        })
        .catch(error => console.error('Error fetching trips:', error));
    }, []);
  
    return (
      <div className="trip">
        <h1>Trips To Explore</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
          {trips.map(trip => (
            <TripData
              key={trip.id} // Assuming tripId is a unique identifier
              tripId={trip.id}
              image= {cityToTripImageMap[trip.image]}
              heading={trip.heading}
              text={trip.text}
              additionalDetails={[
                                    "INCLUDED:  1 Flight , 1 Hotel , 1 Transfer ",
                                    "Day 1 - Hall of Fame ,Spituk Monastery, Magnetic Hill , PLACES COVERED: 3",
                                    "Day 2 - Gurudwara Pathar Sahib, Sangam Point, Leh Palace, Shanti Stupa , PLACES COVERED: 3",
                                    "Day 3 - Khardung La Pass , PLACES COVERED: 1",
                                    "Day 4 - Hunder Dunes, Diksit Monastry , PLACES COVERED: 2",
                                    "Day 5 - Pangong Lake , PLACES COVERED: 1",
                                    "Day 6 - Pangong to Leh (Ride)",
                                    "Day 7 - Departure"
                              
                                ]}
              label={trip.label}
            />
          ))}
        </div>
      </div>
    );
  }
 

export default Trip;
// function Trip(){
//     return(

//         <div className="trip">
               
//             <h1>Trips To Explore</h1>
//             <p>You can discover unique destinations using Google Maps.</p>     
//             <div  className="tripcard">

//                 <TripData 
//                 tripId="1"
//                 image={Trip1Image}
//                 heading= "Trip in Ladakh"
//                 text="2N Pangon | 1N leh | 3N Toso Moriri"
//                 additionalDetails={[
//                     "INCLUDED:  1 Flight , 1 Hotel , 1 Transfer ",
//                     "Day 1 - Hall of Fame ,Spituk Monastery, Magnetic Hill , PLACES COVERED: 3",
//                     "Day 2 - Gurudwara Pathar Sahib, Sangam Point, Leh Palace, Shanti Stupa , PLACES COVERED: 3",
//                     "Day 3 - Khardung La Pass , PLACES COVERED: 1",
//                     "Day 4 - Hunder Dunes, Diksit Monastry , PLACES COVERED: 2",
//                     "Day 5 - Pangong Lake , PLACES COVERED: 1",
//                     "Day 6 - Pangong to Leh (Ride)",
//                     "Day 7 - Departure"
              
//                 ]}
//                 label= " Rs 10,500 | 6N/7D"  
//              />
                  
            
//                 <TripData 
//                 tripId="2"
//                 image={Trip2Image}
//                 heading= "Trip in Himachal"
//                 text="2N Shimla | 1N Kullu | 3N Manali"
//                 additionalDetails={[
//                     " INCLUDED:  1 Hotel , 1 Transfer, 1 Activity",
//                     "Day 1 - Pandoh Dam  ,  PLACES COVERED: 1",
//                     "Day 2 - Hadimba Temple Jagatsukh, Tibetan Monastery, Vashisht Kund ,  PLACES COVERED: 4",
//                     "Day 3 - Sollang Valley ,  PLACES COVERED: 1",
//                     "Day 4 - Manikaran Naggar Castle , PLACES COVERED: 2",
//                     "Day 5 (Activity) - Mid Way Customer Lounge for New Delhi Travelers at Sitara Dhaba",
                    
//                 ]}
//                 label= " Rs 10,500 | 4N/5D"   
                
                
                       
//                 />
                  

//                 <TripData 
//                 tripId="3"
//                 image={Trip3Image}
//                 heading= "Trip in Kashmir"
//                 text="1N Srinagar Houseboat | 1N Gulmarg | 1D Sonmarg"
//                 additionalDetails={[
//                     "INCLUDED:  1 Hotel , 1 Transfer",
//                     "Day 1 - Nishat Bagh, Shalimar Garden, Cheshma Shahi,  Shankaracharya Temple , PLACES COVERED: 4",
//                     "Day 2 - Gulmarg , PLACE COVERED: 1",
//                     "Day 3 - Pahalgam , PLACE COVERED: 1",
//                     "Day 4 - Departure "
                
//                 ]}
//                 label="Rs 15,000 |  3N/4D"     
            
//                 />
                       
//         </div>
        
//         </div>
       

//     );
// }
 

// export default Trip;