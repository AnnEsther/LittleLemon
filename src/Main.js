import React, { useEffect, useReducer, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Intro from "./Intro";
import Specials from "./Specials";
import Testimonial from "./Testimonial";
import About from "./About";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking.js"



export default function Main() {

    //Loading localStorage data 
    let localStorageData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        localStorageData[key] = JSON.parse(value);
    }
    // console.log("Loading : ", localStorage)

    var [timeSlotsForDate, setTimeSlotsForDate] = useState(localStorageData);

    const [formData, setFormData] = useState({
        "date": new Date(),
        "dateString": new Date().toISOString().slice(0, 10),
        "time": "17:00",
        "noGuests": "1",
        "occasion": "None"
    });

    function isBookedTime(time) {
        return time !== formData.time;
    }

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        const success = window.submitAPI(formData);

        if (success) {
            var selectedDate = formData.date.toISOString().slice(0, 10);
            let filtered = timeSlotsForDate[selectedDate].filter(isBookedTime);
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
            availableTimes = window.fetchAPI(date);
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
        var options = availableTimes.map(availableTime => { return <option key={availableTime}>{availableTime}</option> });
        return options;
    }

    //will change the availableTimes based on the selected date
    function UpdateTimes(state, action) {
        // For now, return the same times regardless of date selection
        return InitializeTimes(action);
    }

    const today = new Date();
    const [availableTimeState, availableTimeDispatch] = useReducer(UpdateTimes, InitializeTimes(today));

    // useEffect(()=>{console.log(timeSlotsForDate)},[timeSlotsForDate]);
    // useEffect(()=>{console.log(availableTimeState)},[availableTimeState]);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking-confirmed" element={<ConfirmedBooking formData={formData} />}></Route>
                <Route path="/booking" element={<BookingPage formData={formData} setFormData={setFormData} submitForm={submitForm} availableTimeState={availableTimeState} availableTimeDispatch={availableTimeDispatch} />}></Route>
            </Routes>
        </main>
    );
}

function HomePage() {
    return (
        <>
            <div className="HomePage">
                <Intro />
                <Specials />
                <Testimonial />
                <About />
            </div>
        </>
    );
}

function BookingPage(props) {

    return (
        <>
            <BookingForm formData={props.formData} setFormData={props.setFormData} submitForm={props.submitForm} availableTimeState={props.availableTimeState} availableTimeDispatch={props.availableTimeDispatch}></BookingForm>
        </>
    );
}
