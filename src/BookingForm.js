
import React, { useState } from "react";


export default function BookingForm(props) {
    console.log(props.availableTimes);
    const availableTimes = props.availableTimes;
    const setAvailableTimes = props.setAvailableTimes;


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [date, setDate] = useState("");
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const [time, setTime] = useState(availableTimes[0]);
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
                    <label className="dateLabel" for="res-date">Choose date</label>
                    <input className="dateInput" type="date" id="res-date" value={date} onChange={handleDateChange} />

                    <label className="timeLabel" for="res-time">Choose time</label>
                    <select className="timeInput" id="res-time " value={time} onChange={handleTimeChange}>
                        {availableTimes.map(availableTime => { return <option>{availableTime}</option> })}
                    </select>

                    <label className="guestsLabel" for="guests">Number of guests</label>
                    <input className="guestsInput" type="number" placeholder="1" min="1" max="10" id="guests" value={noGuests} onChange={handleGuestsChange} />

                    <label className="occasionLabel" for="occasion">Occasion</label>
                    <select className="occasionInput" id="occasion" value={occasion} onChange={handleOccasionChange}>
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    </div>
                    <div>
                        <input className="formSubmit" type="submit" value="Make Your reservation" />
                    </div>
                </form>
            </div>
        </>
    );
}