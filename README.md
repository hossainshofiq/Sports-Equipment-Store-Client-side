# Sports Gear

**Live Site URL:** 
[https://sports-equipments-4a037.web.app/](https://sports-equipments-4a037.web.app/)

## Contact Information

You can reach me at the following contact number:

**Phone Number:** +8801689819951

## Overview

Sports Equipment Hub is a full-stack web application designed to showcase, manage, and explore sports equipment seamlessly. With user-friendly navigation, robust private routes, and engaging animations, the platform offers a comprehensive experience for sports enthusiasts.

## Sports Gear
![Sports Gear Screenshot](/src/assets/banner_screenshot.jpg)

## Technology Stack

1. **Frontend (Client-Side)**:
- React.js – Frontend library for building UI
- React Router – Navigation and routing
- Tailwind CSS – Styling and responsive design
- Redux / Context API
- Firebase Authentication
- Axios / Fetch API
- React Awesome Reveal

2. **Backend (Server-Side)**:
- Node.js – Server runtime
- Express.js – Backend framework for handling API requests
- MongoDB – Database and ODM for data management
- JWT (JSON Web Token) – Secure authentication and authorization
- Dotenv – Environment variable management

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

## Installation

**Clone the repository**
- git clone https://github.com/your-username/your-repo.git
- cd your-repo

**Install dependencies**
- npm install

**Start the development server**
- npm run dev

## Dependencies

**Main Dependencies**
-  "firebase": "^11.0.2",
-  "localforage": "^1.10.0",
-  "lottie-react": "^2.4.0",
-  "match-sorter": "^8.0.0",
-  "react": "^18.3.1",
-  "react-dom": "^18.3.1",
-  "react-icons": "^5.4.0",
-  "react-router-dom": "^7.0.2",
-  "react-tooltip": "^5.28.0",
-  "sort-by": "^1.2.0",
-  "sweetalert2": "^11.14.5",
-  "swiper": "^11.1.15"

**Development Dependencies**
-  "@eslint/js": "^9.15.0",
-  "@types/react": "^18.3.12",
-  "@types/react-dom": "^18.3.1",
-  "@vitejs/plugin-react": "^4.3.4",
-  "autoprefixer": "^10.4.20",
-  "daisyui": "^4.12.14",
-  "eslint": "^9.15.0",
-  "eslint-plugin-react": "^7.37.2",
-  "eslint-plugin-react-hooks": "^5.0.0",
-  "eslint-plugin-react-refresh": "^0.4.14",
-  "globals": "^15.12.0",
-  "postcss": "^8.4.49",
-  "tailwindcss": "^3.4.15",
-  "vite": "^6.0.1"