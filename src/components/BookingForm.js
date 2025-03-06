
import React from "react";


const BookingForm = React.memo(( props ) =>  {

    const submitForm = props.submitForm;
    const setFormData = props.setFormData;
    const formData = props.formData;
    let data = formData;
    let today = new Date().toISOString().slice(0, 10);

    // useEffect(()=>{console.log("Update Caught")},[props.availableTimeState]);

    const handleDateChange = (e) => {
        var selectedDate = new Date(e.target.value);
        setFormData(formData => ({
            ...formData,
            ["date"]: selectedDate,
            ["dateString"]: e.target.value,
          }));
          data = formData;
          props.availableTimeDispatch(selectedDate);
    }

    const handleTimeChange = (e) => {
        setFormData(formData => ({
            ...formData,
            ["time"]: e.target.value
          }));
          data = formData;

    }

    const handleGuestsChange = (e) => {
        setFormData(formData => ({
            ...formData,
            ["noGuests"]: e.target.value
          }));
          data = formData;

    }

    const handleOccasionChange = (e) => {
        setFormData(formData => ({
            ...formData,
            ["occasion"]: e.target.value
          }));
          data = formData;

    }

    // useEffect(()=>{console.log(formData)},[formData]);

    return (
        <>
            <div className="bookingPage">
                <h3>Reserve a Table</h3>
                <form onSubmit={submitForm} className="bookingForm">
                    <div className="bookingMainDiv">

                    <label htmlFor="res-date">Choose Date</label>
                    <input type="date" id="res-date" min={today} value={data.dateString} onChange={handleDateChange} />

                    <label htmlFor="res-time">Choose Time</label>
                    <select id="res-time" value={data.time} onChange={handleTimeChange}>
                        {props.availableTimeState}
                    </select>

                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={data.noGuests} onChange={handleGuestsChange} />

                    <label htmlFor="occasion">Choose Occasion</label>
                    <select id="occasion" value={data.occasion} onChange={handleOccasionChange}>
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    </div>

                    <div>
                        <input className="formSubmit styledButton" type="submit" value="Make Your Reservation" aria-label="Make Reservation"/>
                    </div>
                </form>
            </div>
        </>
    );
})

export default BookingForm;