
import React, { useState } from "react";


export default function BookingForm(props) {

    const availableTimes = props.availableTimeState.availableTimes;
    const availableTimeDispatch = props.availableTimeDispatch;

    const handleSubmit = (e) => {
        e.preventDefault();
        // availableTimeDispatch({ type: 'remove_time', time: time });
    };

    const [date, setDate] = useState("");
    const handleDateChange = (e) => {
        setDate(e.target.value)
        //to change dates available times
        availableTimeDispatch({ type: "UPDATE_TIMES", date: date });
    }

    const [time, setTime] = useState("-");
    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }

    const [noGuests, setNoGuests] = useState("1");
    const handleGuestsChange = (e) => {
        setNoGuests(e.target.value)
    }

    const [occasion, setOccasions] = useState("None");
    const handleOccasionChange = (e) => {
        setOccasions(e.target.value)
    }

    return (
        <>
            <div className="bookingPage">
                <h3>Reserve a Table</h3>
                <form onSubmit={handleSubmit} className="bookingForm">
                    <div className="bookingMainDiv">
                    <label htmlFor="res-date">Choose Date</label>
                    <input type="date" id="res-date" value={date} onChange={handleDateChange} />

                    <label htmlFor="res-time">Choose Time</label>
                    <select id="res-time " value={time} onChange={handleTimeChange}>
                        {availableTimes.map(availableTime => { return <option key={availableTime}>{availableTime}</option> })}
                    </select>

                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={noGuests} onChange={handleGuestsChange} />

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    </div>
                    <div>
                        <input className="formSubmit" type="submit" value="Make Your Reservation" />
                    </div>
                </form>
            </div>
        </>
    );
}