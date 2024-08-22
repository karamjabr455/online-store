import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaBars, FaTimes, FaMoon, FaSun, FaTrashAlt, FaEdit, FaPlus, FaCheck, FaFacebookF, FaTwitter, FaInstagram,FaPhoneAlt ,FaEnvelope,FaTrash } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Logo from './images/logo.png'; 
import LanguageSelector from './components/LanguageSwitcher';
import BackgroundImage from "./images/background-image.png";
import VisaLogo from './images/visa-logo.png'; 
import MasterCardLogo from './images/mastercard-logo.png';   
import Image26 from './images/image 26.png';

function Cart() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({}); // Store quantities for each product
  const [editingIndex, setEditingIndex] = useState(null); // Specifies the product being modified
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [newCardType, setNewCardType] = useState('');
  const [newCardNumber, setNewCardNumber] = useState('');
  const [cards, setCards] = useState([]);



  const navigate = useNavigate(); // Define useNavigate

  const handleNextClick = () => {
    navigate('/checkout');// Directing to the Checkout page
  };

  const handleBackClick = () => {
    navigate(-1); // Return to the previous page
  };


  useEffect(() => {
    //// Read the basket from local storage when the component is loaded
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(cart);
    
  // Read quantities from local storage
    const storedQuantities = JSON.parse(localStorage.getItem('quantities')) || {};
    setQuantities(storedQuantities);
    
// Read cards from local storage
const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCards(storedCards);
  }, []);

  useEffect(() => {
// Save the quantities to local storage when modified
localStorage.setItem('quantities', JSON.stringify(quantities));
  }, [quantities]);

  useEffect(() => {
// Save products to local storage when modified
localStorage.setItem('cart', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
// Save cards to local storage when modified
localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const increaseQuantity = (index) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [index]: prevQuantities[index] + 1
    }));
  };

  const decreaseQuantity = (index) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [index]: prevQuantities[index] > 1 ? prevQuantities[index] - 1 : 1
    }));
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
// Delete the quantity related to this product
setQuantities(prevQuantities => {
      const { [index]: _, ...rest } = prevQuantities;
      return rest;
    });
  };

  const handleEditOrder = (index) => {
    setEditingIndex(index);// Set the product being modified
  };

  const handleSaveChanges = () => {
    setEditingIndex(null); // Disable edit mode
  };

  const calculateTotalPrice = (price, quantity) => {
    const priceValue = parseFloat(price.replace('$', ''));
    return (priceValue * quantity).toFixed(2);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCardSelect = (cardType) => {
    setSelectedCard(cardType);
  };

  const openAddCardModal = () => {
    setShowAddCardModal(true);
  };

  const closeAddCardModal = () => {
    setShowAddCardModal(false);
    setNewCardType('');
    setNewCardNumber('');
  };

  const handleAddCard = () => {
    if (newCardType && newCardNumber) {
      const newCard = { type: newCardType, lastFour: newCardNumber.slice(-4) };
      setCards([...cards, newCard]);
      closeAddCardModal();
    }
  };
// A function to calculate the total price in the cart

const calculateTotalCartPrice = () => {
  return products.reduce((total, product, index) => {
    const priceValue = parseFloat(product.price.replace('$', ''));
    const quantity = quantities[index] || 1;
    return total + priceValue * quantity;
  }, 0).toFixed(2);
};

// Function to calculate shipping cost
const calculateTotalShipping = () => {
  return products.reduce((total, product, index) => {
    const priceValue = parseFloat(product.price.replace('$', ''));
    const quantity = quantities[index] || 1;
    return total + (priceValue * quantity * 0.05); // 5% of the price of each product

  }, 0).toFixed(2);
};

// A function to calculate the total cost
const calculateTotalCost = () => {
  const totalCartPrice = parseFloat(calculateTotalCartPrice());
  const totalShipping = parseFloat(calculateTotalShipping());
  return (totalCartPrice + totalShipping).toFixed(2);
};


const handleDeleteCard = (index) => {
  const updatedCards = cards.filter((_, i) => i !== index);
  setCards(updatedCards);
  if (selectedCard === index) {
    setSelectedCard(null);
  }
};


  return (
    <div
      className={`min-h-screen flex flex-col relative ${isDarkMode ? 'dark' : ''}`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-lg p-4 flex items-center justify-between z-50 border-b border-transparent shadow-md">
  <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 xl:px-24">
    <div className="flex items-center space-x-4 md:space-x-6">
      <img src={Logo} alt="Logo" className="w-12 h-auto" />
      <div className="hidden md:flex md:items-center md:space-x-6">
        <Link to="/" className="text-white font-semibold hover:text-gray-300 transition">
          {t('home')}
        </Link>
        <Link to="/about" className="text-white font-semibold hover:text-gray-300 transition">
          {t('about_us')}
        </Link>
        <Link to="/products" className="text-white font-semibold hover:text-gray-300 transition">
          {t('products')}
        </Link>
        <Link to="/services" className="text-white font-semibold hover:text-gray-300 transition">
          {t('services')}
        </Link>
        <Link to="/contact" className="text-white font-semibold hover:text-gray-300 transition">
          {t('contact_us')}
        </Link>
      </div>
    </div>
     {/* Theme Toggle Button */}
    <div className="flex items-center space-x-4">
      <button
        onClick={handleThemeToggle}
        className="p-2 rounded-full text-white bg-gray-800 hover:bg-gray-700 transition"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
      <LanguageSelector />

          {/* Search Button */}
      <div className="relative flex items-center">
        <button
          onClick={toggleSearch}
          className="w-10 h-10 flex items-center justify-center rounded-full shadow-md"
        >
          <FaSearch className="text-white" />
        </button>
        {searchVisible && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-48 md:w-60">
            <button
              onClick={toggleSearch}
              className="absolute top-2 right-2 text-gray-500"
            >
              <FaTimes />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
        )}
      </div>

         {/* Cart and Favorites Links */}
      <Link
        to="/cart"
        className="w-10 h-10 flex items-center justify-center rounded-full shadow-md"
      >
        <FaShoppingCart className="text-white" />
      </Link>
      <Link
        to="/favorites"
        className="w-10 h-10 flex items-center justify-center rounded-full shadow-md"
      >
        <FaHeart className="text-white" />
      </Link>
      <button
        onClick={() => alert("Logged out")}
        className="px-4 py-2 border border-white rounded-full text-white font-semibold transition hover:bg-[#4b7c4a]"
        style={{ borderRadius: "46px" }}
      >
        {t('log_out')}
      </button>
      <button
        onClick={toggleMenu}
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full shadow-md"
      >
        <FaBars className="text-white" />
      </button>
    </div>
  </div>

   {/* Mobile Menu */}
  {menuOpen && (
    <div className="fixed top-16 left-0 right-0 bg-white shadow-lg p-4 md:hidden">
      <button
        onClick={toggleMenu}
        className="absolute top-2 right-2 text-gray-500"
      >
        <FaTimes />
      </button>
      <div className="flex flex-col space-y-4 mt-8">
        <Link
          to="/"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('home')}
        </Link>
        <Link
          to="/about"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('about_us')}
        </Link>
        <Link
          to="/products"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('products')}
        </Link>
        <Link
          to="/services"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('services')}
        </Link>
        <Link
          to="/contact"
          className="text-black font-semibold hover:text-gray-600 transition"
        >
          {t('contact_us')}
        </Link>
      </div>
    </div>
  )}
</nav>



{/* cart content */}
<div className="flex-grow pt-24 pb-8 px-4 md:px-6 lg:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto bg-opacity-60 p-6 rounded-lg" style={{ marginRight: 'auto', marginLeft: '0' }}>
          <h1 className="text-3xl font-bold text-white mb-6">{t('cart')}</h1>
          {products.length > 0 ? (
            <div className="flex flex-col">
              {products.map((product, index) => (
                <div key={index} className="flex flex-col border-b border-gray-300 pb-4 mb-4">
                  <img src={product.image} alt={product.name} className="w-24 h-auto rounded-lg mb-4" />
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="text-left mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-white">{product.name}</h3>
                      <p className="text-lg text-gray-600">{t('price')}: ${calculateTotalPrice(product.price, quantities[index] || 1)}</p>
                    </div>
                    <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-0">
                      {editingIndex === index ? (
                        <>
                          <button
                            onClick={() => decreaseQuantity(index)}
                            className="bg-gray-200 text-black px-3 py-1 rounded-l"
                          >
                            -
                          </button>
                          <span className="mx-2 text-lg">
  {isNaN(quantities[index]) ? '0' : quantities[index]}
</span>
                          <button
                            onClick={() => increaseQuantity(index)}
                            className="bg-gray-200 text-black px-3 py-1 rounded-r"
                          >
                            +
                          </button>
                          <button
                            onClick={handleSaveChanges}
                            className="ml-4 text-blue-600"
                          >
                            {t('save_changes')}
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleEditOrder(index)}
                          className="text-[#1A5319] flex items-center ml-4"
                        >
                          <FaEdit className="w-6 h-6 mr-2" />
                          {t('edit_order')}
                        </button>
                      )}
                    </div>
                    <div className="flex items-center md:ml-8">
                      <button
                        onClick={() => handleRemoveProduct(index)}
                        className="text-[#1A5319] flex items-center"
                      >
                        <FaTrashAlt className="w-6 h-6 mr-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white mt-8">{t('no_items_in_cart')}</p>
          )}
{/* Payment section */}
<div className="mt-12">
  <div className="flex items-center justify-between">
    <h2 className="text-white text-2xl font-bold border-b-2 border-white pb-1">
      {t('payment')}
    </h2>
    <button
      onClick={openAddCardModal}
      className="flex items-center text-white border border-white px-4 py-2 rounded-full hover:bg-gray-800 transition bg-transparent"
    >
      <FaPlus className="mr-2" />
      {t('add_payment_card')}
    </button>
  </div>
  <div className="mt-8 flex flex-col space-y-4">
    {cards.map((card, index) => (
      <div
        key={index}
        className={`p-4 border rounded-lg flex items-center space-x-4 cursor-pointer ${selectedCard === index ? 'bg-gray-800 border-black' : 'bg-transparent border-black'}`}
        onClick={() => handleCardSelect(index)}
      >
        <img src={card.type === 'visa' ? VisaLogo : MasterCardLogo} alt={card.type} className="w-8 h-auto" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">
            {card.type === 'visa' ? t('visa_debit_card') : t('master_card')}
          </h3>
          <p className="text-white">**** **** **** {card.lastFour}</p>
        </div>
        {selectedCard === index && <FaCheck className="text-green-600" />}
        <button
          onClick={(e) => { e.stopPropagation(); handleDeleteCard(index); }}
          className="ml-4 text-red-600 hover:text-red-800"
        >
          <FaTrash />
        </button>
      </div>
    ))}
  </div>
</div>
</div>
</div>

{/* Pop-up window to add a new card */}
{showAddCardModal && (
  <div className="fixed inset-0  bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-gray-900 p-6 rounded-lg w-full max-w-sm">
      <h3 className="text-2xl font-bold text-white mb-4">{t('add_new_card')}</h3>
      <div className="mb-4">
        <label className="block text-white mb-2">{t('card_type')}</label>
        <select
          value={newCardType}
          onChange={(e) => setNewCardType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        >
          <option value="">{t('select_card_type')}</option>
          <option value="visa">{t('visa')}</option>
          <option value="master">{t('master')}</option>
        </select>
      </div>
      {newCardType && (
        <div className="mb-4">
          <label className="block text-white mb-2">{t('card_number')}</label>
          <input
            type="text"
            value={newCardNumber}
            onChange={(e) => setNewCardNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter card number"
          />
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button
          onClick={closeAddCardModal}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          {t('cancel')}
        </button>
        <button
          onClick={handleAddCard}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {t('add_card')}
        </button>
      </div>
    </div>
  </div>
)}
{/* Summary Order section moves to the bottom of the Payment section in medium and small screens */}

<div className="lg:fixed lg:top-40 lg:right-12 w-full max-w-xs lg:max-w-sm lg:mt-0 mt-8">
  <div className="bg-opacity-20 p-4 rounded-lg">
    <h2 className="text-white text-xl md:text-2xl font-bold border-b-2 border-white pb-1">
      {t('summary_order')}
    </h2>
    <div className="mt-4 relative">
      <input
        type="text"
        placeholder="Promocode"
        className="w-full px-4 py-2 border border-white text-white bg-transparent rounded-full placeholder-white"
        style={{ borderRadius: '50px' }}
      />
     <button
  className="absolute right-0 top-0 h-full px-4 bg-[#7C8761] text-white rounded-l-full"
  style={{ borderRadius: '0 50px 50px 0' }}
>
  Apply
</button>

    </div>
  </div>

{/* discount coupon */}
 

    {/* Total, Shipping and Total Cost section */}
    <div className="mt-8 text-white">
      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-lg">{t('total')}</span>
        <span className="text-lg font-bold">${calculateTotalCartPrice()}</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg">{t('shipping')}</span>
        <span className="text-lg font-bold">${calculateTotalShipping()}</span>
      </div>

     {/* dividing line */}

      <div className="my-4 border-t border-white"></div>

      {/* Total Cost */}
      <div className="flex justify-between items-center">
        <span className="text-lg">{t('total_cost')}</span>
        <span className="text-lg font-bold">${calculateTotalCost()}</span>
      </div>
    </div>
  </div>

{/*Buttons and Image section*/}
<div className="relative lg:fixed lg:bottom-6 lg:left-20 lg:w-full lg:max-w-xs lg:max-w-sm lg:relative lg:bottom-16">
  <div className="bg-opacity-20 p-4 rounded-lg">
{/*buttons*/}
<div className="flex flex-col space-y-4">
       {/* button Next */}
       <button
        onClick={handleNextClick} // Add a click handling function

        className="w-full px-4 py-2 bg-[#7C8761AB] text-white border border-white rounded-full"
        style={{ borderRadius: '45px' }}
      >
        {t('next')}
      </button>
      {/* buttons Back */}
      <button
        onClick={handleBackClick} // Add a click handling function

        className="w-full px-4 py-2 bg-[#FCFCFC] text-[#7C8761] border border-white rounded-full"
        style={{ borderRadius: '45px' }}
      >
        {t('back')}
      </button>
    </div>

{/* photo */}
<div className="mt-4 flex justify-center">
      <img
        src={Image26}
        alt="Description"
        className="w-24 h-auto"
      />
    </div>
  </div>
</div>
 {/* Footer section*/}
 <footer
      className="w-full flex  flex-col lg:flex-row items-center lg:items-start font-poppins mt-20"
      style={{
        background: 'linear-gradient(135deg, #809b72, #779b72, #6f966d)',
      }}
    >
{/*left section*/}
<div className="w-full lg:w-1/3 p-8 flex flex-col items-center lg:items-start text-black">
        <img src={Logo} alt="Logo" className="mb-4" style={{ maxWidth: '120px' }} />
        <p className="text-sm text-white" style={{ fontSize: '14px' }}>
          {t('company_description')}
        </p>
      </div>

{/* right section */}
<div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-evenly p-8 text-white">
{/* First section */}
<div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h3 className="font-bold mb-2 border-b-2 border-white pb-1">{t('quick_links')}</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">{t('home')}</a></li>
            <li><a href="#our-products" className="hover:underline">{t('products')}</a></li>
            <li><a href="#about-us" className="hover:underline">{t('about_us')}</a></li>
            <li><a href="#our-services" className="hover:underline">{t('services')}</a></li>
          </ul>
        </div>

{/* Second Section */}
<div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h3 className="font-bold mb-2 border-b-2 border-white pb-1">{t('contact_us')}</h3>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" />
            <span>{t('phone')}: 8979925</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>{t('email')}: info@gmail.com</span>
          </div>
        </div>

{/* Section Three */}
<div className="flex flex-col items-center lg:items-start">
          <h3 className="font-bold mb-2 border-b-2 border-white pb-1">{t('follow_us')}</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="p-2 border-2 border-white rounded-full">
                <FaFacebookF className="text-white" />
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="p-2 border-2 border-white rounded-full">
                <FaTwitter className="text-white" />
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="p-2 border-2 border-white rounded-full">
                <FaInstagram className="text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>




</div>







   
  );
}

export default Cart;
