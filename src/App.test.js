import { render, screen } from '@testing-library/react';
// import App from './App';
// import Main from "./Main.js";
// import {InitializeTimes, UpdateTimes} from Main;
// import BookingForm from './BookingForm.js';


/*---------------------------------------------------------- 

Jest couldnt find module "react-router-dom"
-->Tried updating jest variables in package.json
-->Tried mock()
-->Tried ejecting from create-react-app

None worked

----------------------------------------------------------*/

// test("renders the correct labels", () => {
//   render(<BookingForm availableTimeState={{ availableTimes: ["-", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] }} availableTimeDispatch={() => {}} />);
  
//   const labelElement_date = screen.getByText(/Choose Date/i);  // Case-insensitive match
//   expect(labelElement_date).toBeInTheDocument();

//   const labelElement_time = screen.getByText(/Choose Time/i);
//   expect(labelElement_time).toBeInTheDocument();

//   const labelElement_guests = screen.getByText(/Number of Guests/i);
//   expect(labelElement_guests).toBeInTheDocument();

//   const labelElement_occasion = screen.getByText(/Occasion/i);
//   expect(labelElement_occasion).toBeInTheDocument();
// });

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