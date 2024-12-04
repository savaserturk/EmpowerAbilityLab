# Empower Ability Labs - SPA Website

## Overview
This project is an accessible Single-Page Application (SPA) for Empower Ability Labs, a company dedicated to promoting accessibility awareness and empathy-building through immersive workshops, empathy lab days, and usability testing.

The goal is to create a website that conforms to WCAG 2.1 AA guidelines and ARIA Authoring Practices. The website includes interactive components like modals, navigation bars, form validation, and dynamic content for a user-friendly experience.


## Features

### 1. **Single-Page App (SPA)**
   - **Focus Management**: This feature ensures that when users interact with different sections of the website, focus is automatically shifted to the most relevant section. This improves the user experience, particularly for users relying on screen readers and keyboard navigation. It also enhances navigation for users with motor disabilities, providing smooth transitions.
   - **Unique Page Titles**: Each section of the SPA has a unique page title that reflects its content. This is crucial for accessibility, as it helps users with screen readers to understand the current context of the page. The unique titles are also helpful for users navigating using the browser’s history or back button.
   - **Browser Back Button Sync**: The application properly integrates with the browser’s back button functionality, ensuring that the browser history is in sync with the user’s navigation within the SPA. When users navigate through sections, they can use the back button to return to the previous state without losing any context.

### 2. **Layout Design**
   - **Responsive Design**: The SPA is fully responsive, adapting seamlessly to various screen sizes. Whether users are viewing the website on a desktop, tablet, or smartphone, the layout will adjust to provide an optimal viewing experience. This is achieved using CSS media queries, ensuring that all content is easily accessible across all devices.
   - **User-Friendly and Accessible Design**: The layout focuses on simplicity and ease of use, with clear navigation and readable text. We’ve ensured that color contrasts meet WCAG 2.1 AA standards, making the site accessible to users with visual impairments. The design prioritizes content clarity, with large clickable areas and easy-to-read fonts, ensuring a smooth experience for all users.

### 3. **HTML Semantics**
   - **Proper Page Structure**: The SPA utilizes semantic HTML tags such as `<header>`, `<nav>`, `<main>`, `<footer>`, and `<section>`, ensuring the document structure is clear and logical. This not only benefits SEO but also improves accessibility for screen readers.
   - **Content and Headings**: Headings are appropriately used to structure content and create a clear hierarchy. This allows screen reader users to easily navigate through sections. Each section is introduced with a descriptive heading, ensuring users know exactly where they are within the page.

### 4. **Interactive Components**
   - **Navigation Bar**: The navigation bar provides an intuitive and accessible way for users to jump to different sections of the website. It is fully keyboard-navigable, with each link focusable using the `tab` key. The navigation is also responsive, collapsing into a mobile-friendly format on smaller screens.
   - **Lightbox/Modal**: The Lightbox/Modal displays content such as community information or additional details about services. It is accessible, with proper ARIA roles, and users can easily close the modal using either a close button or the `Esc` key. Focus management is implemented to ensure users are directed to the modal content when it is opened.
   - **Switch Component**: The interactive switch allows users to toggle between different options, such as toggling email notifications. The switch is fully keyboard-accessible, and its state (on/off) is clearly communicated to assistive technologies via ARIA attributes.
   - **Show/Hide Feature (Form - Tell Us About Your Event)**: This feature dynamically displays a text area when the "Invite a speaker to your event" checkbox is selected. The form’s show/hide behavior enhances user experience by reducing clutter and providing relevant options only when needed.

### 5. **Web Form**
   - **Keyboard Accessibility**: All form fields and interactive elements within the web form are fully navigable using the keyboard, including text inputs, checkboxes, and buttons. Users can move through the form easily with the `Tab` key and interact with form elements using the `Enter` key or `Spacebar`.
   - **Error Validation**: The form performs real-time validation, ensuring that required fields are filled out and that data types (such as email addresses) are correctly entered. If an error is detected, users are immediately notified with clear, accessible error messages, which are conveyed via both visual cues and ARIA live regions.
   - **User Notifications**: After submitting the form, users receive a notification confirming their submission. A "thank you" message is displayed for successful submissions, and error messages are shown if any required fields are missing or incorrectly filled. Notifications are communicated clearly with assistive technologies to ensure all users are aware of the form’s status.

## File Structure
- `EmpowerAbilityLab.html`: Main HTML template based on Bootstrap.
- `EmpowerAbilityLab.CSS`: Custom styles.
- `EmpowerAbilityLab.JS`: JavaScript for interactive components and ARIA implementation.
- `images/`: Folder containing project images.

## Accessibility Testing
The project has been tested with screen readers and keyboard-only navigation to ensure full accessibility compliance.

## GitHub Repository and Deployment
- **Repository URL**: [https://github.com/savaserturk/EmpowerAbilityLab.git](#)
- **Deployed SPA URL**: [https://savaserturk.github.io/EmpowerAbilityLab/EmpowerAbilityLab.html](#)

## Challenges and Solutions
1. **Challenge**: Ensuring full accessibility with custom components.
   - **Solution**: Followed ARIA authoring practices and tested with screen readers.
   
2. **Challenge**: Implementing keyboard-only navigation for interactive elements.
   - **Solution**: Used proper `tabindex` values and keyboard event listeners for smooth navigation.
   
3. **Challenge**: Handling dynamic content in modals and forms.
   - **Solution**: Focus management was implemented to shift the focus to relevant content when a modal or form is triggered.

## Group Members
- **Gulsah Avsar** - Student Number: 041052497
- **Lokman Avsar** - Student Number: 041052496
- **Savas Erturk** - Student Number: 040919022
- **Serpil Dundar** - Student Number: 041018075
- **Seyfullah Burul** - Student Number: 040963942


