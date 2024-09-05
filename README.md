# Peter's Portfolio

## Summary

This project is intended to showcase the React technical skills I have acquired and my ability to use the library. The end goal of this project is to complete the UI and functionality of a portfolio website built with React.

## Tech Stack

React

## Libraries

- Chakra UI
- Formik
- Yup
- Font Awesome

## Tasks

### 1. Header Section

- [x] Add external social media links using HStack and FontAwesomeIcon.
- [x] Add internal links to "Projects" and "Contact Me" sections.
- [x] Ensure smooth scrolling and URL update on link click.
- [ ] Implement header show/hide animation based on scroll direction using useEffect, useRef, and scroll event listeners.

### 2. Landing Section

- [x] Implement with avatar, greeting, and role description using provided variables.

### 3. Projects Section

- [x] Implement the Card component for displaying projects using Chakra UI components.

### 4. Contact Me Section

#### 4-1. Form Logic

- [x] Configure useFormik with initialValues, onSubmit, and validationSchema.
- [x] Validate fields with Yup (required fields, email validation, minimum character length).

#### 4-2. Controlled Components

- [x] Make input fields controlled using getFieldProps.

#### 4-3. Error Handling

- [x] Display error messages using isInvalid and FormErrorMessage.

#### 4-4. Form Submission

- [x] Connect form onSubmit with Formik’s handleSubmit.
- [ ] Display a success alert and reset the form upon successful submission.
