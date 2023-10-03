// Get references to HTML elements
const bookingForm = document.getElementById('booking-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const appointmentsList = document.getElementById('appointments-list');

// Clear local storage when the page is refreshed
window.addEventListener('beforeunload', function () {
    localStorage.removeItem('appointments');
});

// Event listener for form submission
bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input values
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    // Create an object to represent the appointment
    const appointment = { name, email, phone };

    // Add the appointment to local storage
    addAppointmentToLocalStorage(appointment);

    // Clear the form inputs
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

    // Update the displayed appointments
    displayAppointments();
});

// Function to add appointment to local storage
function addAppointmentToLocalStorage(appointment) {
    let appointments = [];

    // Check if there are existing appointments in local storage
    if (localStorage.getItem('appointments')) {
        appointments = JSON.parse(localStorage.getItem('appointments'));
    }

    // Add the new appointment
    appointments.push(appointment);

    // Store the updated appointments in local storage
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Function to display appointments on the screen
function displayAppointments() {
    appointmentsList.innerHTML = '';

    // Get appointments from local storage
    const appointments = JSON.parse(localStorage.getItem('appointments'));

    if (appointments) {
        // Display each appointment in the list
        appointments.forEach((appointment, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Appointment ${index + 1}: Name - ${appointment.name}, Email - ${appointment.email}, Phone - ${appointment.phone}`;
            appointmentsList.appendChild(listItem);
        });
    }
}

// Call the displayAppointments function to initially display any existing appointments
displayAppointments();
