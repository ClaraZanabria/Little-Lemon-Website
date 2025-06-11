// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen, fireEvent} from "@testing-library/react";
import BookingForm,  { updateTimes, initializeTimes } from "./components/BookingForm";
import  { fetchAPI } from '../src/api/api';

describe ('Booking Form Test', () => {
  test('Renders the Booking Form heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make Your Reservation");
    expect(headingElement).toBeInTheDocument();
  });
});

// describe ('Reducer initialize Times Test', () => {
//   test('Returns the correct expected value', () => {
//     const test = initializeTimes();
//     const expected = (["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
//     expect(test).toEqual(expected);
//   });
// });

describe('Testing the initializeTimes function', () => {
  test('Will return a non-empty array of available booking times', () => {
      const test = initializeTimes();
      expect(test.length).toBeGreaterThan(0);
  });
});

describe ('Reducer update Times Test', () => {
  test('Returns the same value that is provided in the state', () => {
    const state = initializeTimes();
    const action = {
      type: 'date_changed',
      payload: new Date(),
    };
    const test = updateTimes(state, action);
    const expected = fetchAPI(new Date());
    expect(test).toEqual(expected);
  });
});
