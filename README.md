
# Assignment-Watch-Project-Main


## Overview
This project is a React.js-based product details and cart management application. It displays a detailed product page, allows users to select various attributes such as size and color, manage quantity, and add products to a shopping cart. The application also includes a modal for viewing the cart and proceeding to checkout.


## Live Preview

View the live preview of this application here:  
<<<<<<< HEAD
(https://your-project-live-link.com)
=======

>>>>>>> a7a84fe81c56a2396ee298962f6975d1c41d54f0


## Technologies Used

- React.js

- Tailwind CSS

- Heroicons

- JSON for data management




## Features

### 1.Product Details Page

#### Displays detailed information for a product including:

- Image

- Title

- Rating

- Price (including old price)

- Description

- Type and model number

### 2. Interactive Options

- Color Selection: Users can select a product color.

- Size Selection: Users can select a wrist size (S, M, L, XL), with prices dynamically updated.

- Quantity Management: Allows users to increase or decrease the product quantity.

### 3. Add to Cart

- Users can add selected products with chosen attributes (color, size, quantity) to the cart.

- Prevents duplicate items with the same attributes in the cart.

### 4. Cart Modal

- A modal displays the items added to the cart, showing details such as:

- Product title, image, size, color, quantity, and price.

- Total price and quantity.

- Includes options to continue shopping or proceed to checkout.
## Project File Structure

```bash
src/
|-- App.jsx               // Main component rendering the ProductDetailsCard component
|-- index.css             // Tailwind CSS styling
|-- main.jsx              // Entry point for the React application
|-- ProductDetailsCard.jsx // Core component managing product details and cart functionality
|-- products.json         // Mock data for products
```


## Instructions to Run the Project

### 1. Prerequisites

Ensure the following are installed:

- Node.js

- npm

### 2. Installation Steps
  #### 1. Clone the repository:
  ```bash
  git clone <repository-url>
  ```

  #### 2. Navigate to the project directory:
    
    cd <project-folder>
  
  #### 3. Install dependencies:
```bash 
npm install
```
  #### 4. Run the Application
```bash 
npm run dev
```
Open http://localhost:5173 in your browser to view the application.



## Mock Data
The products.json file contains product details used in the application. It is located in the src/ directory

```bash
[
  {
    "imageUrl": "https://example.com/image.jpg",
    "title": "Oris",
    "rating": "5 stars",
    "reviews": 3,
    "price": "$70",
    "color": "red",
    "oldPrice": "$90",
    "description": "A durable watch suitable for adventures.",
    "type": "watch",
    "modelNumber": "OR-290xt"
  }
]
```

## Key Components

### 1. App.jsx

- Renders the ProductDetailsCard component.

### 2. ProductDetailsCard.jsx

 #### Core functionality for:

- Displaying product details.

- Managing color, size, quantity, and cart operations.

- Checkout functionality via a modal.

### 3. products.json

Contains mock product data, providing flexibility to add or modify products easily.


## Future Improvements

- Integrate a backend for dynamic product data and cart persistence.

- Implement authentication for user-specific carts.

- Enhance the UI/UX with animations and responsiveness.

- Add payment gateway integration for checkout.




    

  


<<<<<<< HEAD
    
=======
    
>>>>>>> a7a84fe81c56a2396ee298962f6975d1c41d54f0
