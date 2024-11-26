
'use strict';

// Global defination of the page state
let state = {
    pageId: "homePage",
    pageTitle: "Empower Ability Labs - Home"
};

// Function that makes the necessary arrangements regarding the single page structure
function singlePageRunner() {

    // Change the look of the app based on state
    function render() {
        showPage(state.pageId, state.pageTitle);
    }

    // Set initial state and render app for the first time
    (function initialize() {
        window.history.replaceState(state, null, "");
        render(state);
    })();

    // Tell the browser to give old state and re-render on back
    window.onpopstate = function (event) {
        if (event.state) { state = event.state; }
        render(state);
    };

    // Function to show the selected page and hide others
    function showPage(pageId, pageTitle) {

        // Get page contents
        const pages = document.querySelectorAll('.page-content');
        // Get active page content
        const activePage = document.getElementById(pageId);

        // Hide all pages
        pages.forEach(page => page.classList.remove('active-page'));

        // Show the selected page
        activePage.classList.add('active-page');

        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        // Remove 'active' from all nav links
        navLinks.forEach(link => link.parentElement.classList.remove('active'));
        // Add 'active' to the current link 
        document.getElementById(pageId.replace('Page', 'Link')).parentElement.classList.add('active');

        //Update page title
        document.title = pageTitle;
    }


    // Event listener for the 'Home' link
    document.getElementById('homeLink').addEventListener('click', function () {
        // Set the state for the 'Home' page
        state.pageId = 'homePage';
        state.pageTitle = 'Empower Ability Labs - Home';
        // Update the browser's history state without reloading the page
        window.history.pushState(state, null, "");
        // Call the render function to update the page content based on the current state
        render(state);
    });

    // Event listener for the 'Services' link
    document.getElementById('servicesLink').addEventListener('click', function () {
        // Set the state for the 'Services' page
        state.pageId = 'servicesPage';
        state.pageTitle = 'Empower Ability Labs - Services';
        // Update the browser's history state without reloading the page
        window.history.pushState(state, null, "");
        // Call the render function to update the page content based on the current state
        render(state);
    });

    // Event listener for the 'Schedule a Call' link
    document.getElementById('scheduleLink').addEventListener('click', function () {
        // Set the state for the 'Schedule a Call' page
        state.pageId = 'schedulePage';
        state.pageTitle = 'Empower Ability Labs - Schedule a call';
        // Update the browser's history state without reloading the page
        window.history.pushState(state, null, "");
        // Call the render function to update the page content based on the current state
        render(state);
    });


}

// Modal operation managed under this function
function modalRunner() {

    // Get the button that triggers the modal
    const showModalButton = document.getElementById('showModalButton');

    // Get the button that triggers the modal
    const hideModalButton = document.getElementById('hideModalButton');

    // Get the button that triggers the modal
    const closeModalButton = document.getElementById('closeModalButton');

    // Get modal element
    const modal = document.getElementById('pageModal');

    // When the button is clicked, show the modal
    showModalButton.addEventListener('click', function () {
        showModal();
    });

    // When the button is clicked, hide the modal
    hideModalButton.addEventListener('click', function () {
        hideModal();
    });

    // When the button is clicked, hide the modal
    closeModalButton.addEventListener('click', function () {
        hideModal();
    });

    // When the user clicks anywhere outside of the modal, hide it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Optional: Close modal when pressing ESC key
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            hideModal();
        }
    });

    // Function to show the modal
    function showModal() {
        modal.classList.add('show'); // Add 'show' class to display the modal
        modal.style.display = 'block'; // Ensure modal is displayed
        modal.setAttribute('aria-hidden', 'false');
        modal.focus();
    }

    // Function to hide the modal
    function hideModal() {
        modal.classList.remove('show'); // Remove 'show' class to hide the modal
        modal.style.display = 'none'; // Hide the modal
        modal.setAttribute('aria-hidden', 'true');
        showModalButton.focus();
    }
}

// The function that controls interactive events on the navigation bar
function navigationRunner() {

    // Select the toggler button and navbar collapse
    const navToggler = document.getElementById('navbarToggler');
    const navbarCollapse = document.getElementById('navbarNav');

    // Event listener to toggle the navigation
    navToggler.addEventListener('click', function () {

        // Toggle the 'collapse' class on navbar collapse
        navbarCollapse.classList.toggle('collapse');

        // Update aria-expanded based on the current state of the menu
        const isExpanded = navbarCollapse.classList.contains('collapse');
        navToggler.setAttribute('aria-expanded', !isExpanded);
    });

}

function toggleRunner() {

    // Get toggle switch
    const toggleSwitch = document.getElementById('idSwitch');

    // Add an event listener to the toggle switch for the 'focus' event
    toggleSwitch.addEventListener('focus', (event) => {
        // When the toggle switch gains focus, add the 'focus' class to its parent node
        event.currentTarget.parentNode.classList.add('focus');
    });

    // Add an event listener to the toggle switch for the 'blur' event
    toggleSwitch.addEventListener('blur', (event) => {
        // When the toggle switch loses focus, remove the 'focus' class from its parent node
        event.currentTarget.parentNode.classList.remove('focus');
    });


}

// The function that performs form controls and events
function formRunner() {

    // Get the message element for validation
    const message = document.getElementById('idMessage');
    // Hide message field
    message.hidden = true;
    // Get the email input field
    const emailInput = document.getElementById('idEmail');
    // Get the phone input field
    const phoneNumberInput = document.getElementById('idPhoneNumber');
    // Get the schedule button element by its ID
    const scheduleButton = document.getElementById('idBtnSchedule');
    // Add an event listener to the schedule button to handle the click event
    scheduleButton.addEventListener('click', handleSubmit);
    // Add event listener to checkbox after page load
    const checkbox = document.getElementById('topicCheck2');
    // Add an event listener to the checkbox to handle the change event
    checkbox.addEventListener('change', aboutTextAreaVisibility);
    // Get div element of tell us about
    const divElement = document.getElementById('idTellUsAbout');

    // Function that hides the div when the checkbox is clicked
    function aboutTextAreaVisibility() {

        const checkbox = document.getElementById('topicCheck2');
        const textArea = document.getElementById('idAbout');

        // // If the checkbox is checked, hide the div, otherwise show it
        if (checkbox.checked) {
            divElement.removeAttribute('hidden');
            textArea.focus();
        } else {
            divElement.setAttribute('hidden', '');
        }
    }

    // Function to handle form submission
    function handleSubmit(event) {

        event.preventDefault(); // Prevent the form from actually submitting (for demo purposes)

        // Check if the form passes the validation function
        if (validateForm()) {
            // If validation is successful, show a thank you message
            //alert('Thank you for your messages.');
            message.innerHTML = "Your message has been sent. Thank you."
            message.classList.remove("alert-danger");
            message.classList.add("alert-success");
            message.hidden = false;
            // Reset all form fields
            document.getElementById("formSchedule").reset();
            divElement.setAttribute('hidden', '');  

        }

    }


    // the validation form that checks necessary form elements
    function validateForm() {

        // Hide message field
        message.hidden = true;


        // Get the email value and remove extra spaces
        const emailValue = emailInput.value.trim();

        // Get the phone value and remove extra spaces
        const phoneValue = phoneNumberInput.value.trim();


        let errorList = [];

        // Check if the input field is empty
        if (emailValue === '') {
            errorList.push('Please enter your email address.');
        }

        // Simple email regex pattern (not 100% perfect, but works for most cases)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Check if the email is in a valid format
        if (emailValue !== '' && !emailPattern.test(emailValue)) {
            errorList.push('Please enter a valid email address.');
        }


        const phonePattern = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;

        //if(phoneValue != '' && !phoneValue.value.match(phonePattern))
        if (phoneValue != '' && !phonePattern.test(phoneValue)) {
            errorList.push('Please enter a valid phone number.');
        }

        // Check if there are any errors in the errorList array
        if (errorList.length > 0) {
            // If there are errors, display them as an alert
            //alert(errorList.toString().replace(',', '\n'));
            message.innerHTML = errorList.toString().replace(',', '</br>');
            message.classList.remove("alert-success");
            message.classList.add("alert-danger");
            message.hidden = false;
            // Return false
            return false;
        }

        message.hidden = false;
        return true;

    }

}

function mainRunner() {

    singlePageRunner();
    navigationRunner();
    modalRunner();
    toggleRunner();
    formRunner();

}

mainRunner();
