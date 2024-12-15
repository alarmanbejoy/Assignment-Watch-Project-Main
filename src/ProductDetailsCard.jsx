import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline'; // Import Heart Icon
import products from './products.json';

const ProductDetailsCard = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(selectedProduct.price); // State for the main price
  const [cart, setCart] = useState([]); // Cart state to track added products
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const handleColorChange = (color, index) => {
    setSelectedColor(color);
    setSelectedProduct(products[index]);
    setPrice(products[index].price); // Reset price for new product
    setSelectedSize(''); // Reset selected size for new product
  };

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setPrice(price); // Set price directly to the selected size price
  };

  const handleQuantityChange = (value) => {
    setQuantity((prev) => Math.max(0, prev + value)); // Prevent negative quantity
  };

  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(
      (item) =>
        item.product.id === selectedProduct.id &&
        item.size === selectedSize &&
        item.color === selectedColor
    );

    if (existingProduct) {
      alert('This product is already added to your cart.');
      return;
    }

    const newItem = {
      product: selectedProduct,
      size: selectedSize,
      color: selectedColor,
      quantity,
      price,
    };

    setCart([...cart, newItem]);
  };

  const handleCheckoutClick = () => {
    alert(`Checkout: ${cart.length} item(s)`);
  };

  // Calculate the total price for the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 border mt-40 rounded-lg shadow-lg text-gray-800 flex flex-col bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Product Detail</h1>
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={selectedProduct.imageUrl}
            alt={selectedProduct.title}
            className="w-80 h-80 object-cover rounded-md"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 pl-4">
          <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
          <div className="flex items-center my-2">
            <span className="text-gold mr-2">⭐⭐⭐⭐⭐</span>
            <span>({selectedProduct.reviews} out of 5)</span>
          </div>
          <div className="flex items-center my-2">
            <span className="line-through text-gray-500 mr-2">
              {selectedProduct.oldPrice}
            </span>
            <span className="text-red-500">{price}</span> {/* Display updated price */}
          </div>
          <p className="my-2">{selectedProduct.description}</p>
          <div className="flex items-center my-2 text-gray-500">
            <span className="mr-2">Type:</span>
            <span className="font-bold mr-4">{selectedProduct.type}</span>
            <span className="mr-2">Model Number:</span>
            <span className="font-bold">{selectedProduct.modelNumber}</span>
          </div>
          <div className="my-4">
            <h3 className="font-bold">Watch Color:</h3>
            <div className="flex items-center my-2">
              <button
                className={`w-4 h-4 rounded-full bg-red-500 mr-2 ${selectedColor === 'red' ? 'ring-2 ring-red-900' : ''}`}
                onClick={() => handleColorChange('red', 0)}
              />
              <button
                className={`w-4 h-4 rounded-full bg-green-500 mr-2 ${selectedColor === 'green' ? 'ring-2 ring-green-900' : ''}`}
                onClick={() => handleColorChange('green', 1)}
              />
              <button
                className={`w-4 h-4 rounded-full bg-blue-500 mr-2 ${selectedColor === 'blue' ? 'ring-2 ring-blue-900' : ''}`}
                onClick={() => handleColorChange('blue', 2)}
              />
            </div>
          </div>
          <div className="my-4">
            <h3 className="font-bold">Wrist Size:</h3>
            <div className="flex items-center my-2">
              {[{ size: 'S', price: 70 }, { size: 'M', price: 77 }, { size: 'L', price: 89 }, { size: 'XL', price: 99 }].map(
                ({ size, price: sizePrice }) => (
                  <button
                    key={size}
                    className={`border p-2 mr-2 text-sm rounded-md font-semibold ${selectedSize === size ? 'border-blue-700 text-gray-400' : 'border-gray-400 text-blue-500'}`}
                    onClick={() => handleSizeChange(size, sizePrice)}
                  >
                    {size} <span className="font-normal text-gray-500">${sizePrice}</span>
                  </button>
                )
              )}
            </div>
          </div>
          <div className="my-4 flex items-center">
            <h3 className="font-bold mr-4">Quantity:</h3>
            <div className="flex items-center">
              <button
                className="border p-2 text-sm rounded-md w-10 h-10"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 0}
              >
                -
              </button>
              <span className="px-4 text-sm">{quantity}</span>
              <button
                className="border p-2 text-sm rounded-md w-10 h-10"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded ml-4 text-sm w-25 h-10"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <HeartIcon className="w-6 h-6 text-gray-500 ml-4 cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button Section */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gold text-black px-4 py-2 rounded-full text-sm mt-4"
          style={{ backgroundColor: 'gold' }}
        >
          Checkout <span className="bg-white rounded-md px-2">{cart.length}</span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full h-auto">
      <h2 className="text-lg font-semibold mb-4 ">Your Cart</h2>
      {cart.length > 0 ? (
        <div>
          {/* Table Headers */}
          <div className="mb-4">
            <div className="grid grid-cols-6 gap-2 text-sm font-semibold text-gray-400">
              <div>Item</div>
              <div>Color</div>
              <div>Size</div>
              <div>Quantity</div>
              <div>Price</div>
              <div>Total</div>
            </div>
          </div>

          {/* Product Details Rows */}
          {cart.map((item, index) => (
            <div key={index} className="grid grid-cols-6 gap-2 items-center border-b pb-2 mb-2">
              {/* Item (Image + Title) */}
              <div className="flex items-center space-x-2">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.title}
                  className="w-10 h-10 object-cover rounded-md"
                />
                <span className="font-semibold text-xs">{item.product.title}</span>
              </div>

              {/* Color */}
              <div className="text-xs">{item.color}</div>

              {/* Size */}
              <div className="text-xs">{item.size}</div>

              {/* Quantity */}
              <div className="text-xs">{item.quantity}</div>

              {/* Price */}
              <div className="text-xs">${item.price}</div>

              {/* Total Price */}
              <div className="text-xs">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}

          {/* Total Row for Quantity and Price */}
          <div className="mt-4 grid grid-cols-6 gap-2">
            {/* Empty div for alignment */}
            <div className="text-sm font-semibold">Total</div>
            {/* Empty div for alignment */}
            <div></div>
            <div></div>
            <div className="text-xs font-semibold">
              {/* Display Total Quantity under Quantity column */}
              {cart.reduce((total, item) => total + item.quantity, 0)} items
            </div>
            <div className="text-xs  font-semibold text-right">
              {/* Display Total Price under Price column */}
             Price: ${getTotalPrice()}
            </div>
            {/* Empty div for alignment */}
            <div></div>
          </div>
        </div>
      ) : (
        <p className="text-sm">Your cart is empty.</p>
      )}

      {/* Modal Footer */}
      <div className="mt-4 flex justify-end space-x-4">
        <button
          onClick={() => setShowModal(false)}
          className="border border-gray-300 px-4 py-2 rounded text-sm"
        >
          Continue Shopping
        </button>
        <button
          onClick={handleCheckoutClick}
          className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
)}



    </div>
  );
};

export default ProductDetailsCard;
