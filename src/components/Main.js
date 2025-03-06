import React, { useEffect, useReducer, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";



import HomePage from "./HomePage.js"
import ConfirmedBooking from "./ConfirmedBooking.js"
import BookingPage from "./BookingPage.js";



export default function Main() {

    const navigate = useNavigate();

    //Loading data from localStorage to state variable 
    let localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        localStorageData[key] = JSON.parse(value);
    }
    var [timeSlotsForDate, setTimeSlotsForDate] = useState(localStorageData);

    //Creating form data state variable to be controlled from main
    const [formData, setFormData] = useState({
        "date": new Date(),
        "dateString": new Date().toISOString().slice(0, 10),
        "time": "17:00",
        "noGuests": "1",
        "occasion": "None"
    });


    //On submit form from Booking form
    const submitForm = (e) => {
        e.preventDefault(); //prevent default functionality of reloading the page

        // eslint-disable-next-line no-undef
        const success = window.submitAPI(formData);

        if (success) {
            var selectedDate = formData.date.toISOString().slice(0, 10);
            let filtered = timeSlotsForDate[selectedDate].filter((time) => {return time !== formData.time;});
            setTimeSlotsForDate(timeSlotsForDate => ({
                ...timeSlotsForDate, // Create a shallow copy of the previous object
                [selectedDate]: filtered, // Update the desired property
            }));
            availableTimeDispatch(formData.date);

            //update the local storage by removing the already selected time
            localStorage.setItem(selectedDate, JSON.stringify(filtered));

            navigate("/booking-confirmed");
        } else {
            alert("Booking submission failed. Please try again.");
        }
    };

    // will create the initial state for the availableTimes. 
    function InitializeTimes(date) {
        var newDate = date.toISOString().slice(0, 10);
        var availableTimes;
        if (!timeSlotsForDate.hasOwnProperty(newDate)) {
            
            try {
                // eslint-disable-next-line no-undef
                availableTimes = fetchAPI(date);
            } catch (err) {
                console.log(err);
                return;
            }
            
            setTimeSlotsForDate(timeSlotsForDate => ({
                ...timeSlotsForDate, // Create a shallow copy of the previous object
                [newDate]: availableTimes, // Update the desired property
            }));

            //new date is added to local storage with the available times
            localStorage.setItem(newDate, JSON.stringify(availableTimes));
        }
        else {
            availableTimes = timeSlotsForDate[newDate];
        }
        var options = availableTimes.map(availableTime => { return <option data-testid="time-option" key={availableTime}>{availableTime}</option> });
        return options;
    }

    //will change the availableTimes based on the selected date
    function UpdateTimes(state, action) {
        // For now, return the same times regardless of date selection
        return InitializeTimes(action);
    }

    const today = new Date();
    const [availableTimeState, availableTimeDispatch] = useReducer(UpdateTimes, InitializeTimes(today));


    return (
        <main>
            <Routes>
                <Route path="/LittleLemon" element={<HomePage />}></Route>
                <Route path="/booking-confirmed" element={<ConfirmedBooking formData={formData} />}></Route>
                <Route path="/booking" element={<BookingPage 
                    formData={formData} 
                    setFormData={setFormData} 
                    submitForm={submitForm} 
                    availableTimeState={availableTimeState} 
                    availableTimeDispatch={availableTimeDispatch} />}></Route>
                    <Route path="/construction" element={<UnderConstruction />}></Route>
            </Routes>
        </main>
    );
}


function UnderConstruction() {
    return (
    <>
    <div className="underConstruction">
        <h2>Coming Soon !</h2>

    </div>
    </>
);
}