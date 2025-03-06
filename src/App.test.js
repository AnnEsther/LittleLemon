import { render, screen } from '@testing-library/react';
// import App from './App';
// import Main from "./Main.js";
// import {InitializeTimes, UpdateTimes} from Main;
import BookingForm from './components/BookingForm';



/*---------------------------------------------------------- 

Jest couldnt find module "react-router-dom"
-->Tried updating jest variables in package.json
-->Tried mock()
-->Tried ejecting from create-react-app

None worked

----------------------------------------------------------*/

test("Render Booking Form", () => {
  // formData={formData} 
  // setFormData={setFormData} 
  // submitForm={submitForm} 
  // availableTimeState={availableTimeState} 
  // availableTimeDispatch={availableTimeDispatch}

  var availableTimes =  ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
 

  render(<BookingForm 
    formData={{}} 
    setFormData={() => {}}
    submitForm={() => {}} 
    availableTimeState={  availableTimes.map(availableTime => { return <option data-testid="time-option" key={availableTime}>{availableTime}</option> }) } 
    availableTimeDispatch={() => {}} />);
  
  //Label renders
  const labelElement_date = screen.getByText(/Choose Date/i);  // Case-insensitive match
  expect(labelElement_date).toBeInTheDocument();

  const labelElement_time = screen.getByText(/Choose Time/i);
  expect(labelElement_time).toBeInTheDocument();

  const labelElement_guests = screen.getByText(/Number of Guests/i);
  expect(labelElement_guests).toBeInTheDocument();

  const labelElement_occasion = screen.getByText(/Choose Occasion/i);
  expect(labelElement_occasion).toBeInTheDocument();

  //Input Renders
  const dateInput = screen.getByLabelText(/Choose Date/i);
  const today = new Date().toISOString().slice(0, 10);
  expect(dateInput).toHaveAttribute('min', today);

  const timeOptions = screen.getByLabelText(/Choose Time/i);
  expect(timeOptions.length).toBe(availableTimes.length);
  availableTimes.forEach((availableTime, index) => {
    expect(timeOptions[index].text).toBe(availableTime);
  });

  const guestsInput = screen.getByLabelText(/Number of Guests/i);
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  const occasionOptions = screen.getByLabelText(/Choose Occasion/i);
  expect(occasionOptions.length).toBe(3);
 
});

// Error with importing route
// test("initializeTimes returns the correct initial state", () => {
//   const initialState = InitializeTimes();
//   expect(initialState).toEqual({ availableTimes: ["-", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] });
// });

// test("updateTimes returns the same state provided", () => {
//   const currentState = { availableTimes: ["17:00", "18:00"] };
//   const newState = UpdateTimes(currentState, { type: "UPDATE_TIMES", date: "2024-02-10" });

//   expect(newState).toEqual(currentState);
// });