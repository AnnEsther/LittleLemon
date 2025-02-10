import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"; 
import Intro from "./Intro";
import Specials from "./Specials";
import Testimonial from "./Testimonial";
import About from "./About";
import BookingForm from "./BookingForm";


export default function Main() {
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>}></Route>
            </Routes>
        </main>
    );
}

function HomePage() {
    return (
        <>
            <Intro />
            <Specials />
            <Testimonial />
            <About />
        </>
    );
}

function BookingPage(props) {

    return (
        <>
            <BookingForm availableTimes={props.availableTimes} setAvailableTimes={props.setAvailableTimes}></BookingForm>
        </>
    );
}
