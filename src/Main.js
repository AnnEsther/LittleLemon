import React, { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import Specials from "./Specials";
import Testimonial from "./Testimonial";
import About from "./About";
import BookingForm from "./BookingForm";

export default function Main() {
    const apiScript = "https://cdn.jsdelivr.net/gh/courseraap/capstone@main/api.js";

    useEffect(() => {
        const existingScript = document.getElementById(apiScript);

        if (existingScript) {
            return;
        }
        const script = document.createElement('script');
        script.src = apiScript;
        script.id = apiScript;
        script.async = false;
        script.onload = () => {
            // Optional: Handle script load event
            if (!document.getElementById(apiScript)) {
                document.head.appendChild(script);
            }

        };
        script.onerror = () => {
            // Optional: Handle script load error
            console.error('Error loading script.');
        };


        return () => {
            const scriptToRemove = document.getElementById(apiScript);
            if (scriptToRemove) {
                document.head.removeChild(scriptToRemove);
            }
        };
    }, [apiScript]); // Re-run if scriptUrl changes

    // will create the initial state for the availableTimes. 
    function InitializeTimes(date) {
        // const times = fetchAPI(date);
        return { availableTimes: ["-", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
    }

    //will change the availableTimes based on the selected date
    function UpdateTimes(state, action) {
        // For now, return the same times regardless of date selection
        return state;
    }

    const today = new Date();
    const [availableTimeState, availableTimeDispatch] = useReducer(UpdateTimes, InitializeTimes(today));

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
