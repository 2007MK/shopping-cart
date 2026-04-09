# Shopping Cart

**A dynamic e-commerce interface built with React. This project focuses on state management, client-side routing, and providing a seamless user experience for browsing and purchasing products.**

### Project Context
This application was developed as part of my frontend development journey to master **React**. The primary goal was to move beyond simple components and handle a "global-like" state where items added in one view (Product Page) are reflected and editable in another (Cart).

## Features
* **Product Catalog:** Fetches and displays products dynamically.
* **Live Shopping Cart:** Real-time updates to item counts and total price.
* **Navigation:** Smooth client-side routing between the Home and Shop pages.
* **Responsive Design:** Optimized for both desktop and mobile viewing.
* **Interactive UI:** Users can increment/decrement quantities directly within the cart.

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

   
