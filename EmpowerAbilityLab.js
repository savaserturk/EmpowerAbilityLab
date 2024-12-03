
'use strict';

// Global defination of the page state
let state = {
    pageId: "homePage",
    pageTitle: "Home Page - Empower Ability Labs",
    pageUrl: "#/home"
};

// Defined page information
const pages = [
    { pageId: 'homePage', pageTitle: 'Home Page - Empower Ability Labs', pageUrl: '#/home' },
    { pageId: 'servicesPage', pageTitle: 'Services Page - Empower Ability Labs', pageUrl: '#/services' },
    { pageId: 'schedulePage', pageTitle: 'Schedule a Call Page - Empower Ability Labs', pageUrl: '#/schedule' }
];

// Get default url
const url = location.origin + location.pathname;

// Function that makes the necessary arrangements regarding the single page structure
function singlePageRunner() {

    // Change the look of the app based on state
    function render(state) {
        showPage(state.pageId, state.pageTitle);
    }

    // Set initial state and render app for the first time
    (function initialize() {
        // Replace state to the history
        window.history.replaceState(state, null, url + state.pageUrl);
        render(state);
    })();

    // It is fired when the active history entry changes while the user navigates the session history.
    window.onpopstate = function (event) {
        // If the event contains a valid state, update the current state
        if (event.state) {
            state = event.state;
            render(state);
        } else {
            // If no event state, get the current state from the application
            state = getState();
            // Check if a valid result was returned from getState

            if (state.pageId == 'homePage') {
                window.history.replaceState(state, null, url + state.pageUrl);
            }
            render(state);
        }
    };


    function getState() {
        // Get parameter from url
        let paramUrl = window.location.hash;
        // Check the page is included in page list
        let result = pages.find(page => page.pageUrl == paramUrl);
        // Create new state object
        let newState = new Object();
        // Check result
        if (result) {
            //Set the new state if the page parameter coming from the URL is defined  
            newState.pageId = result.pageId;
            newState.pageTitle = result.pageTitle;
            newState.pageUrl = result.pageUrl;
        } else {
            // If the page parameter coming from the URL is undefined
            newState.pageId = 'homePage';
            newState.pageTitle = 'Home Page - Empower Ability Labs';
            newState.pageUrl = '#/home';
        }

        return newState;
    }

    // Get navigation links
    const linkElements = document.querySelectorAll('.nav-link');

    // Add click event to the navigation links
    linkElements.forEach(link => link.addEventListener('click', function (e) {

        // Prevent default link click action
        e.preventDefault();

        // Get pageId from the link
        let pageId = link.getAttribute('id');

        // If clicked current page link
        if (pageId == state.pageId)
            return;

        // Set the state for the current page
        state.pageId = link.getAttribute('id');

        // Set the state title for the current page 
        state.pageTitle = link.innerHTML + ' Page - Empower Ability Labs';

        // Set the state url for the current page
        state.pageUrl = '#/' + state.pageId.replace('Page', '');

        // Update the browser's history state without reloading the page
        window.history.pushState(state, null, url + state.pageUrl);

        render(state);

    }));

    // Get logo link
    const linkLogo = document.getElementById('idLogo');

    linkLogo.addEventListener('click', function (e) {

        // Prevent default link click action
        e.preventDefault();

        document.getElementById('homePage').click();
    });

    // Function to show the selected page and hide others
    function showPage(pageId, pageTitle) {

        // Load source html and set the main content
        fetch('./html/' + pageId.replace('Page', '.html'))
            .then(response => response.text())
            .then(html => {

                // Get main content to update with selected page
                let mainElement = document.getElementById('main-content');

                // Get navigation links
                const linkElements = document.querySelectorAll('.nav-link');

                // Set main content with selected content
                mainElement.innerHTML = html;

                //Update page title
                document.title = pageTitle;

                // Get current link
                const currentLink = document.getElementById(pageId);

                // Remove 'active' from all nav links
                linkElements.forEach(link => link.parentElement.classList.remove('active'));

                // Remove 'aria-current' attribute from all nav links
                linkElements.forEach(link => link.removeAttribute('aria-current'));

                // Add 'active' to the current link 
                currentLink.parentElement.classList.add('active');

                // Add 'aria-current' attribute to the current link element
                currentLink.setAttribute('aria-current', 'page');

                // Call necessary javascript for the home page
                if (pageId == 'homePage') {
                    modalRunner();
                }

                // Call necessary javascript for the schedule page
                if (pageId == 'schedulePage') {
                    formRunner();
                    toggleRunner();
                }

                // Get loaded content from document
                const content = document.getElementById(pageId.replace('Page', 'Content'));
                // Set tabIndex=-1 for focus management to automatically shift to relevant elemet
                content.setAttribute('tabIndex', '-1');
                // Focusing header
                content.focus();


            })
            .catch(error => {
                console.error('An error ocurred:', error);
            });

    }

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
        if (event.key == 'Escape' && modal.style.display == 'block') {
            hideModal();
        }

        // Preventing focus trap for modal
        if (event.key == 'Tab' && modal.style.display == 'block') {

            event.preventDefault();

            if(document.activeElement == hideModalButton){
                closeModalButton.focus();
            }
            else {
                hideModalButton.focus();
            }
         
        }
    });

    // Function to show the modal
    function showModal() {
        modal.classList.add('show'); // Add 'show' class to display the modal
        modal.style.display = 'block'; // Ensure modal is displayed
        modal.removeAttribute('aria-hidden');
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
            scheduleButton.focus();
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

        // Defination of error list array
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

        // Phone number regex pattern
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
            scheduleButton.focus();
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
}

mainRunner();
