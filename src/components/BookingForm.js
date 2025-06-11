import { useState, useReducer} from 'react'
import AvailableTimes from './AvailableTimes';
import { fetchAPI } from '../api/api';
import { useForm  } from "react-hook-form";

// This is my reducer.
const updateTimes = (state, action) => {
    let date = new Date(action.payload);

    if (action.type === 'date_changed') {
        return fetchAPI(date);
    }

    return state;
};

// This is my initial state.
const initializeTimes = () => {
    let initialTimes = fetchAPI(new Date());

    return initialTimes;
  };

const BookingForm = ({ onSubmit }) => {
    // Form State.
    const [name, setName] = useState ("");
    const [lastname, setLastname] = useState ("");
    const [date, setDate] = useState ("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState ("");
    const [occasion, setOccasion] = useState ("");
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [email, setEmail] = useState ("");

    // Hooks.
    const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
        <h2 className='headreservation'>Make Your Reservation</h2>

        <form onSubmit={handleSubmit(onSubmit)} style={{display: 'grid', gap: '5px',}} className='questionarie'>
            {/* Name Input */}
            <label htmlFor="name" className='namelabel'>First Name </label>
            <input
                type="text"
                min="1"
                max="100"
                id="name"
                name="name"
                placeholder='First Name'
                value={name}
                required={true}
                {...register('name', { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                onChange={(e) => setName(e.target.value)}
            />
            <p className='text-danger'>{errors.name?.type === 'required' && 'This field is required.'}</p>

             {/* Last Name Input */}
            <label htmlFor="lastname">Lastname</label>
            <input
                type="text"
                min="1"
                max="100"
                id="lastname"
                name="lastname"
                placeholder='Last Name'
                value={lastname}
                required={true}
                {...register('lastname', { required: true })}
                aria-invalid={errors.lastname ? "true" : "false"}
                onChange={(e) => setLastname(e.target.value)}
            />
            <p className='text-danger'>{errors.lastname?.type === 'required' && '*This field is required.'}</p>

             {/* Date Input */}
            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                name="date"
                placeholder='mm/dd/yy'
                {...register('date', { required: true })}
                aria-invalid={errors.date ? "true" : "false"}
                value={date}
                required={true}
                onChange={(e) => {
                        dispatch({ type: 'date_changed', payload: e.target.value });
                        setDate(e.target.value);
                    }
                }
            />
            <p className='text-danger'>{errors.date?.type === 'required' && '*This field is required.'}</p>
            
             {/* Avaialble Times Input */}
            <label htmlFor="time">Choose time </label>
            <AvailableTimes availableTimes={availableTimes} onChange={(e) => setTime (e.target.value)} id='time' value={time} style={{marginBottom: '20px'}} required/>
            
            {/* Number of Guests Input */}
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder=""
                min="1"
                max="10"
                id="guests"
                name="guests"
                {...register('guests', { required: true })}
                aria-invalid={errors.guests ? "true" : "false"}
                value={guests}
                required={true}
                onChange={(e) => setGuests (e.target.value)}
            />
            <p className='text-danger'>{errors.guests?.type === 'required' && '*This field is required.'}</p>
            
            {/* Occasion Input */}
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                placeholder=""
                value={occasion}
                required={true}
                style={{marginBottom: '20px'}}
                onChange={(e) => setOccasion (e.target.value)}
            >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            
            {/* E-Mail Input */}
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                min="1"
                max="100"
                id="email"
                name="email"
                role='alert'
                placeholder='E-mail'
                required={true}
                {...register('email', {
                    required: true,
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                    }
                })}
                aria-invalid={errors.email ? "true" : "false"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <p className='text-danger'>
                {errors.email?.type === 'required' && '*This field is required.'}
                {errors.email?.type === 'pattern' && '*Entered value does not match email format.'}
            </p>
            
            {/* Submit Button */}
            <input
                type="submit"
                value="Reserve a Table"
                id='button'
                aria-label="On Click"
                // disabled={!date || !time || !lastname || !name || !email}
                className='reservebutton'
            />
        </form>
    </>
  )
}

export default BookingForm;
export { updateTimes, initializeTimes };
