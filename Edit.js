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

// Function to delete an appointment from local storage and update the UI
function deleteAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments'));

    if (appointments && appointments.length > index) {
        // Remove the appointment at the specified index
        appointments.splice(index, 1);

        // Update local storage with the modified appointments
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Update the displayed appointments
        displayAppointments();
    }
}

// Function to edit an appointment's details
function editAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments'));

    if (appointments && appointments.length > index) {
        // Get the appointment at the specified index
        const appointmentToEdit = appointments[index];

        // Set the form inputs to the appointment's details
        nameInput.value = appointmentToEdit.name;
        emailInput.value = appointmentToEdit.email;
        phoneInput.value = appointmentToEdit.phone;

        // Delete the original appointment from local storage
        deleteAppointment(index);
    }
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
            
            // Create a delete button for each appointment
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                deleteAppointment(index);
            });

            // Create an edit button for each appointment
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => {
                editAppointment(index);
            });

            listItem.appendChild(deleteButton);
            listItem.appendChild(editButton);

            appointmentsList.appendChild(listItem);
        });
    }
}

// Call the displayAppointments function to initially display any existing appointments
displayAppointments();
