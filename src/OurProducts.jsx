import React from 'react';
import Slider from 'react-slick';
import { FaShoppingCart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// استيراد الصور
import Product1 from './images/1.png';
import Product2 from './images/2.png';
import Product3 from './images/3.png';
import Product4 from './images/4.png';
import Product5 from './images/1.png';
import Product6 from './images/2.png';
import Product7 from './images/3.png';
import Product8 from './images/4.png';

// إعدادات السلايدر
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // عرض شريحة واحدة في البداية
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768, // الشاشات الصغيرة
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024, // الشاشات المتوسطة
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1280, // الشاشات الكبيرة
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }
  ]
};

const OurProducts = () => {
  const { t } = useTranslation();
  
  return (
    <>
      {/* العنوان */}
      <div className="w-full flex justify-center py-20">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 border-b-4 border-white inline-block pb-2 text-white font-poppins">
          {t('products')}
        </h2>
      </div>

      {/* السلايدر */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-12 xl:px-24 text-white mt-4">
        <div className="max-w-6xl mx-auto">
          <Slider {...sliderSettings}>
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-transparent p-4">
              <div className="relative w-full">
                <img src={Product1} alt="Product 1" className="w-full h-auto rounded-lg" />
                <button
                  className="absolute bottom-0 left-0 w-full bg-[#d8ebda] text-[#1A5319] font-semibold text-sm py-2 rounded-b-lg"
                  style={{ fontSize: '14px' }}
                >
                  {t('see_more')}
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center font-poppins">{t('succulents')}</h3>
              <p className="text-md text-gray-300 text-center font-poppins">30.00$</p>
              <button className="mt-2 bg-white text-black p-2 rounded-full flex justify-center items-center">
                <FaShoppingCart />
              </button>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center bg-transparent p-4">
              <div className="relative w-full">
                <img src={Product2} alt="Product 2" className="w-full h-auto rounded-lg" />
                <button
                  className="absolute bottom-0 left-0 w-full bg-[#d8ebda] text-[#1A5319] font-semibold text-sm py-2 rounded-b-lg"
                  style={{ fontSize: '14px' }}
                >
                  {t('see_more')}
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center font-poppins">{t('bromeliads')}</h3>
              <p className="text-md text-gray-300 text-center font-poppins">50.00$</p>
              <button className="mt-2 bg-white text-black p-2 rounded-full flex justify-center items-center">
                <FaShoppingCart />
              </button>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center bg-transparent p-4">
              <div className="relative w-full">
                <img src={Product3} alt="Product 3" className="w-full h-auto rounded-lg" />
                <button
                  className="absolute bottom-0 left-0 w-full bg-[#d8ebda] text-[#1A5319] font-semibold text-sm py-2 rounded-b-lg"
                  style={{ fontSize: '14px' }}
                >
                  {t('see_more')}
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center font-poppins">{t('calathea')}</h3>
              <p className="text-md text-gray-300 text-center font-poppins">20.00$</p>
              <button className="mt-2 bg-white text-black p-2 rounded-full flex justify-center items-center">
                <FaShoppingCart />
              </button>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center bg-transparent p-4">
              <div className="relative w-full">
                <img src={Product4} alt="Product 4" className="w-full h-auto rounded-lg" />
                <button
                  className="absolute bottom-0 left-0 w-full bg-[#d8ebda] text-[#1A5319] font-semibold text-sm py-2 rounded-b-lg"
                  style={{ fontSize: '14px' }}
                >
                  {t('see_more')}
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center font-poppins">{t('croton')}</h3>
              <p className="text-md text-gray-300 text-center font-poppins">40.00$</p>
              <button className="mt-2 bg-white text-black p-2 rounded-full flex justify-center items-center">
                <FaShoppingCart />
              </button>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center bg-transparent p-4">
              <div className="relative w-full">
                <img src={Product5} alt="Product 5" className="w-full h-auto rounded-lg" />
                <button
                  className="absolute bottom-0 left-0 w-full bg-[#d8ebda] text-[#1A5319] font-semibold text-sm py-2 rounded-b-lg"
                  style={{ fontSize: '14px' }}
                >
                  {t('see_more')}
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center font-poppins">{t('succulents')}</h3>
              <p className="text-md text-gray-300 text-center font-poppins">30.00$</p>
              <button className="mt-2 bg-white text-black p-2 rounded-full flex justify-center items-center">
                <FaShoppingCart />
              </button>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center bg-transparent p-4">
              <div className="relative w-full">
                <img src={Product6} alt="Product 6" className="w-full h-auto rounded-lg" />
                <button
                  className="absolute bottom-0 left-0 w-full bg-[#d8ebda] text-[#1A5319] font-semibold text-sm py-2 rounded-b-lg"
                  style={{ fontSize: '14px' }}
                >
                  {t('see_more')}
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center font-poppins">{t('bromeliads')}</h3>
              <p className="text-md text-gray-300 text-center font-poppins">50.00$</p>
              <button className="mt-2 bg-white text-black p-2 rounded-full flex justify-center items-center">
                <FaShoppingCart />
              </button>
            </div>

            {/* Card 7 */}
            <div className="flex flex-col items-center bg-transparent p-4">
              <div className="relative w-full">
                <img src={Product7} alt="Product 7" className="w-full h-auto rounded-lg" />
                <button
                  className="absolute bottom-0 left-0 w-full bg-[#d8ebda] text-[#1A5319] font-semibold text-sm py-2 rounded-b-lg"
                  style={{ fontSize: '14px' }}
                >
                  {t('see_more')}
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center font-poppins">{t('calathea')}</h3>
              <p className="text-md text-gray-300 text-center font-poppins">20.00$</p>
              <button className="mt-2 bg-white text-black p-2 rounded-full flex justify-center items-center">
                <FaShoppingCart />
              </button>
            </div>

            {/* Card 8 */}
            <div className="flex flex-col items-center bg-transparent p-4">
              <div className="relative w-full">
                <img src={Product8} alt="Product 8" className="w-full h-auto rounded-lg" />
                <button
                  className="absolute bottom-0 left-0 w-full bg-[#d8ebda] text-[#1A5319] font-semibold text-sm py-2 rounded-b-lg"
                  style={{ fontSize: '14px' }}
                >
                  {t('see_more')}
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center font-poppins">{t('croton')}</h3>
              <p className="text-md text-gray-300 text-center font-poppins">40.00$</p>
              <button className="mt-2 bg-white text-black p-2 rounded-full flex justify-center items-center">
                <FaShoppingCart />
              </button>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default OurProducts;
