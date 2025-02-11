import React, { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import Specials from "./Specials";
import Testimonial from "./Testimonial";
import About from "./About";
import BookingForm from "./BookingForm";


export default function Main() {
   
     // will create the initial state for the availableTimes. 
    function InitializeTimes () {
        return { availableTimes: ["-", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
    }

    //will change the availableTimes based on the selected date
    function UpdateTimes(state, action) {
        // For now, return the same times regardless of date selection
        return state;
    }

    const [availableTimeState, availableTimeDispatch] = useReducer(UpdateTimes , InitializeTimes() );

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimeState={availableTimeState} availableTimeDispatch={availableTimeDispatch} />}></Route>
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
            <BookingForm availableTimeState={props.availableTimeState} availableTimeDispatch={props.availableTimeDispatch}></BookingForm>
        </>
    );
}
