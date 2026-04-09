# Shopping Cart

**A dynamic e-commerce interface built with React. This project focuses on state management, client-side routing, and providing a seamless user experience for browsing and purchasing products.**

### Project Context
This application was developed as part of my frontend development journey to master **React**. The primary goal was to move beyond simple components and handle a "global-like" state where items added in one view (Product Page) are reflected and editable in another (Cart).

## Features
* **Live API Integration:** Dynamically fetches product data (titles, prices, images, and categories) from the [Fake Store API](https://fakestoreapi.com/).
* **Asynchronous Loading:** Implemented loading states to ensure a smooth UI experience during data fetching.
* **Live Shopping Cart:** Real-time updates to item counts and total price calculations.
* **Navigation:** Smooth client-side routing between Home and Shop pages using React Router.
* **Interactive UI:** Users can increment/decrement quantities and remove items directly from the cart.

## Tech Stack
* **Framework:** React.js
* **Build Tool:** Vite
* **Routing:** React Router
* **Testing:** Vitest / React Testing Library
* **Deployment:** Vercel

## Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16+ recommended)
* npm or yarn

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/2007MK/shopping-cart.git](https://github.com/2007MK/shopping-cart.git)
   cd shopping-cart
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. Start the dev server
   ```bash
   npm run dev
   ```

## Project Structure
```plaintext
├── src/
│   ├── components/    # Reusable UI components (Cart, Navbar, Card)
│   ├── pages/         # Page-level components (Home, Shop)
│   ├── App.jsx        # Main application component & State management
│   ├── main.jsx       # Entry point
│   └── styles/        # CSS modules or global stylesheets
├── public/            # Static assets
└── vite.config.js     # Vite configuration
```

   
