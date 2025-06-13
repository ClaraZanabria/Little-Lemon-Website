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
