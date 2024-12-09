# Sports Equipment Hub

**Live Site URL:** https://sports-equipment-store-server.vercel.app/

## Overview

Sports Equipment Hub is a full-stack web application designed to showcase, manage, and explore sports equipment seamlessly. With user-friendly navigation, robust private routes, and engaging animations, the platform offers a comprehensive experience for sports enthusiasts.

## Features

- **Dynamic Navbar:** Conditional rendering of "Login", "Register", and user profile options based on authentication status.
- **Home Page:** Includes a banner slider, product highlights, sports categories, and additional meaningful sections.
- **Authentication System:** Secure login and registration with password validation and social authentication (Google/GitHub).
- **CRUD Operations:** Add, view, update, and delete sports equipment with private route protection.
- **Dark/Light Theme:** Toggle between dark and light modes for enhanced user experience.
- **Sorting and Search:** Sort sports equipment by price and explore the collection easily.
- **Animations:** Integrated Lottie React and React Awesome Reveal for engaging UI animations.
- **Responsive Design:** Fully responsive layout optimized for all devices.

## Pages and Functionalities

1. **Navbar:**  
   - Features website logo, navigation links, and conditional buttons for authentication.
   - Displays user photo and name with a logout option if logged in.

2. **Home Page:**  
   - Banner slider with meaningful slides.
   - Product section with cards and "View Details" functionality.
   - Additional sections for enhanced content.

3. **Login & Register Pages:**  
   - Login: Email, password, and one-click authentication via Google/GitHub.
   - Register: Includes photo URL and password validation.

4. **Private Routes:**  
   - Add Equipment: Form for adding items to the database.
   - My Equipment List: Manage personal items with update and delete functionalities.
   - View Details: Detailed view of individual equipment.

5. **All Sports Equipment Page:**  
   - Displays all items in a table format with sorting functionality.
   - Includes "View Details" button to explore individual items.

6. **404 Page:**  
   - Custom page for handling non-existing routes.

7. **Loading Spinner:**  
   - Smooth loading experience while fetching data.

## Challenges and Integrations

- Implemented sort functionality on the All Sports Equipment page.
- Integrated React Tooltip for user guidance.
- Enhanced visuals using React Awesome Reveal and Lottie React animations.

## Technologies Used

- **Frontend:** React, React Router, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **Additional Libraries:** Lottie React, React Tooltip, React Awesome Reveal