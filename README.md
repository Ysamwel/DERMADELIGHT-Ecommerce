# DERMADELIGHT E-Commerce Platform

Welcome to the DERMADELIGHT E-Commerce Platform! This project is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and is designed for selling skincare products online.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Product browsing and search functionality
- Shopping cart and checkout process
- Order management
- Admin panel for product and order management
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: React.js, Redux, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Stripe

## Prerequisites

- Node.js (version 12.x or higher)
- npm or yarn
- MongoDB (local or Atlas)
- MPESA/PAYPAL account for payment processing

## Installation

1. **Clone the repository**:

   ```git clone https://github.com/Ysamwel/DERMADELIGHT-Ecommerce.git```

   ```cd DERMADELIGHT-Ecommerce```


Install dependencies for both frontend and backend:

# Install server dependencies
```cd backend```

```npm install```

# Install client dependencies
```cd ../frontend```

```npm install```


# Set up environment variables

Create a .env file in the backend directory and add the following:

```NODE_ENV=development```

```PORT=5000```

```MONGO_URI=your_mongo_uri```

```JWT_SECRET=your_jwt_secret```

```MPESA_SECRET_KEY=your_stripe_secret_key```

# Running the Application

Start the backend server:

```cd backend
npm run dev```

Start the frontend development server:

```cd frontend
npm start```
