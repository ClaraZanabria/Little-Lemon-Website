// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

// Test Suite.
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// Component.
import BookingForm from "./components/BookingForm";

describe('BookingForm Component', () => {

  // Attributes are present and are valid in the form inputs.
  test('Attributes are present and valid in the form inputs.', () => {
    render(<BookingForm />);
    
    // Get the element at the DOM with ID name.
    const nameInputEl = document.getElementById('name');

    // Name input tests.
    expect(nameInputEl).toHaveAttribute('type', 'text');
    expect(nameInputEl).toHaveAttribute('min' , '1');
    expect(nameInputEl).toHaveAttribute('max' , '100');
    expect(nameInputEl).toHaveAttribute('required' , undefined);

    // Get the element at the DOM with ID lastname.
    const lastnameInputEl = document.getElementById('lastname');

    // Last Name input tests.
    expect(lastnameInputEl).toHaveAttribute('type', 'text');
    expect(lastnameInputEl).toHaveAttribute('min' , '1');
    expect(lastnameInputEl).toHaveAttribute('max' , '100');
    expect(lastnameInputEl).toHaveAttribute('required' , undefined);

    // Get the element at the DOM with ID date.
    const dateInputEl = document.getElementById('date');

    // Date input tests.
    expect(dateInputEl).toHaveAttribute('type', 'date');
    expect(dateInputEl).toHaveAttribute('required' , undefined);

    // Get the element at the DOM with ID time.
    const timeInputEl = document.getElementById('time');

    // Time input tests.
    expect(timeInputEl).toHaveAttribute('required' , undefined);

    // Get the element at the DOM with ID guests.
    const guestsInputEl = document.getElementById('guests');

    // Guests input tests.
    expect(guestsInputEl).toHaveAttribute('type', 'number');
    expect(guestsInputEl).toHaveAttribute('min' , '1');
    expect(guestsInputEl).toHaveAttribute('max' , '10');
    expect(guestsInputEl).toHaveAttribute('required' , undefined);

    // Get the element at the DOM with ID occasion.
    const occasionInputEl = document.getElementById('occasion');

    // Occasion input tests.
    expect(occasionInputEl).toHaveAttribute('required' , undefined);

    // Get the element at the DOM with ID email.
    const emailInputEl = document.getElementById('email');

    // Email input tests.
    expect(emailInputEl).toHaveAttribute('type', 'text');
    expect(emailInputEl).toHaveAttribute('min' , '1');
    expect(emailInputEl).toHaveAttribute('max' , '100');
    expect(emailInputEl).toHaveAttribute('required' , undefined);
  });

  // JavaScript utility functions run with valid and invalid states.
  test('JavaScript utility functions run with valid and invalid states.', () => {
    render(<BookingForm />);
    
  });
});
