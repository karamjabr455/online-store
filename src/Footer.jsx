import React from 'react';
import Logo from './images/logo.png'; 
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="w-full flex flex-col lg:flex-row items-center lg:items-start font-poppins"
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
  );
};

export default Footer;
