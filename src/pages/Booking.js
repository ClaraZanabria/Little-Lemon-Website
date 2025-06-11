// Components.
import Navbar from "../components/Nav";
import Section from "../components/layout/Section";
import SectionContent from "../components/layout/SectionContent";
import BookingForm from "../components/BookingForm";

// Hooks.
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api/api";

// Booking Page.
export default function Booking()  {
    // Define the navigation function based on a hook.
    const navigation = useNavigate();

    // Function to store data at local storage.
    const saveToLocalStorage = (formObject) => {
        // Define the property used to identify the local storage property.
        const localStorageProperty = 'booking';
        // Convert the form object into a string.
        const stringData = JSON.stringify(formObject);
        // Save to local storage.
        localStorage.setItem(localStorageProperty, stringData );
    };

    // Function to handle the form submition..
    const submitForm = (formData) => {
        // Will validate the data using the API (Module).
        const isDataValid = submitAPI(formData);

        // If the data is valid.
        if (isDataValid) {
            // Save to local storage.
            saveToLocalStorage(formData);
            // Take the user to the confirmation page.
            navigation('/confirmation');
        };
    };

    return (
        <>
            <Navbar/>
            <Section name="reservation" bgColor='#495E57' >
                <SectionContent >
                   <BookingForm onSubmit={submitForm} />
                </SectionContent>
            </Section>
        </>
    )
}
