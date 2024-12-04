# Empower Ability Labs - SPA Website

## Overview
This project is an accessible Single-Page Application (SPA) for Empower Ability Labs, a company dedicated to promoting accessibility awareness and empathy-building through immersive workshops, empathy lab days, and usability testing.

The goal is to create a website that conforms to WCAG 2.1 AA guidelines and ARIA Authoring Practices. The website includes interactive components like modals, navigation bars, form validation, and dynamic content for a user-friendly experience.


## Features

### 1. **Single-Page App (SPA)**
   - **Focus Management**: We implemented automatic focus shifts to ensure that when users interact with different sections, focus moves to the relevant content, improving navigation for keyboard and screen reader users.
   - **Unique Page Titles**: We assigned dynamic page titles to each section, updating them as users navigate. This helps users understand the context of the page, particularly for screen readers.
   - **Browser Back Button Sync**: We ensured that the back button functionality works as expected within the SPA, so users can return to previous sections without losing context.

### 2. **Layout Design**
   - **Responsive Design**: Our SPA adjusts seamlessly across different screen sizes. We used CSS media queries to ensure content is accessible on desktops, tablets, and smartphones.
   - **User-Friendly Design**: We focused on clear navigation, readable text, and ensured that color contrast met WCAG 2.1 AA standards for better accessibility.

### 3. **HTML Semantics**
   - **Proper Structure**: We used semantic HTML tags like `<header>`, `<nav>`, `<main>`, and `<footer>`, creating a clear and accessible structure for the page.
   - **Content & Headings**: We ensured proper use of headings to create a clear content hierarchy, making navigation easier for screen readers.

### 4. **Interactive Components**
   - **Navigation Bar**: We made the navigation bar fully keyboard-accessible, with links that users can focus on using the `tab` key. The bar also collapses responsively for mobile devices.
   - **Lightbox/Modal**: We created an accessible modal for additional content. Users can easily open and close the modal using either a close button or the `Esc` key.
   - **Switch Component**: We designed an interactive toggle that allows users to switch options, like email notifications. This component is fully keyboard-navigable and uses ARIA attributes for screen reader support.
   - **Show/Hide Feature**: We added a dynamic form feature that reveals extra fields only when needed, improving the form’s usability and keeping the interface clean.

### 5. **Web Form**
   - **Keyboard Accessibility**: We ensured that all form fields are fully navigable using the keyboard, allowing users to fill out forms easily.
   - **Error Validation**: Our form includes real-time validation to ensure that users fill in required fields correctly. We provide clear error messages if something goes wrong.
   - **User Notifications**: After form submission, users are notified with either a confirmation message or error alerts, ensuring they know the status of their submission.


## File Structure
- `EmpowerAbilityLab.html`: Main HTML template based on Bootstrap.
- `EmpowerAbilityLab.CSS`: Custom styles.
- `EmpowerAbilityLab.JS`: JavaScript for interactive components and ARIA implementation.
- `images/`: Folder containing project images.

## Accessibility Testing
The project has been tested with screen readers and keyboard-only navigation to ensure full accessibility compliance.

## GitHub Repository and Deployment
- **Repository URL**: [https://github.com/savaserturk/EmpowerAbilityLab.git](https://github.com/savaserturk/EmpowerAbilityLab.git)
- **Deployed SPA URL**: [https://savaserturk.github.io/EmpowerAbilityLab/EmpowerAbilityLab.html](https://savaserturk.github.io/EmpowerAbilityLab/EmpowerAbilityLab.html)

## Challenge and Solution

1. **Challenge**: Preventing keyboard traps in interactive elements.
   - **Solution**: We implemented focus management to ensure that users cannot get stuck in modals or other interactive components. We ensured that focus moves to the relevant element and that users can navigate out of these components using the `Tab` key or the `Esc` key to close them.


## Group Members
- **Gulsah Avsar** - Student Number: 041052497
- **Lokman Avsar** - Student Number: 041052496
- **Savas Erturk** - Student Number: 040919022
- **Serpil Dundar** - Student Number: 041018075
- **Seyfullah Burul** - Student Number: 040963942


