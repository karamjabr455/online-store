import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaShoppingCart, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Import images
import Product1 from './images/1.png';
import Product2 from './images/2.png';
import Product3 from './images/3.png';
import Product4 from './images/4.png';
import Product5 from './images/1.png';
import Product6 from './images/2.png';
import Product7 from './images/3.png';
import Product8 from './images/4.png';

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }
  ]
};

const OurProducts = ({ title }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  const products = [
    { image: Product1, name: 'Succulents', price: '30.00$', description: 'Description of Succulents' },
    { image: Product2, name: 'Bromeliads', price: '50.00$', description: 'Description of Bromeliads' },
    { image: Product3, name: 'Calathea', price: '20.00$', description: 'Description of Calathea' },
    { image: Product4, name: 'Croton', price: '40.00$', description: 'Description of Croton' },
    { image: Product5, name: 'Succulents', price: '30.00$', description: 'Description of Succulents' },
    { image: Product6, name: 'Bromeliads', price: '50.00$', description: 'Description of Bromeliads' },
    { image: Product7, name: 'Calathea', price: '20.00$', description: 'Description of Calathea' },
    { image: Product8, name: 'Croton', price: '40.00$', description: 'Description of Croton' },
  ];

  const handleSeeMore = (product) => {
    navigate('/products', { state: { product } });
  };

  return (
    <>
      <div className="w-full flex justify-center py-20">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 border-b-4 border-white inline-block pb-2 text-white font-poppins">
          {title || t('products')}
        </h2>
      </div>

      <section className="w-full py-8 px-4 md:px-8 lg:px-12 xl:px-24 text-white mt-4">
        <div className="max-w-6xl mx-auto">
          <Slider {...sliderSettings}>
            {products.map((product, index) => (
              <div key={index} className="flex flex-col items-center bg-transparent p-4">
                <div className="relative w-full">
                  <img src={product.image} alt={`Product ${index + 1}`} className="w-full h-auto rounded-lg" />
                  <button
                    onClick={() => handleSeeMore(product)}
                    className="absolute bottom-0 left-0 w-full bg-[#d8ebda] text-[#1A5319] font-semibold text-sm py-2 rounded-b-lg"
                    style={{ fontSize: '14px' }}
                  >
                    {t('see_more')}
                  </button>
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center font-poppins">{t(product.name.toLowerCase())}</h3>
                <p className="text-md text-gray-300 text-center font-poppins">{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 bg-white text-black p-2 rounded-full flex justify-center items-center"
                >
                  <FaShoppingCart />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {showConfirmation && (
        <div className="fixed top-4 right-4 bg-[#99a184] text-[#1A5319] px-6 py-3 rounded-[25px] shadow-md flex items-center justify-center z-50">
          <FaCheckCircle className="mr-2" />
          {t('product_added_successfully')}
        </div>
      )}
    </>
  );
};

export default OurProducts;
