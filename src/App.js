// Styles.
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages.
import Home from './pages/Home';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/confirmation' element={<ConfirmedBooking/>} />
        </Routes>
      </BrowserRouter>
    </div>
)};

export default App;
