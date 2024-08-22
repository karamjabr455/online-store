import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactImage from './images/contact Rectangle 33.png'; 

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center py-12 px-4 md:px-8 lg:px-12 xl:px-24 relative">
{/*Form section*/}
<div className="relative z-10 w-full md:w-3/5 max-w-3xl bg-[#D6EFD83B] p-8 rounded-[50px] shadow-lg">
{/* The section containing the form */}
<div className="relative z-10">
          <h2
            className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #508D4E 100%, #161313 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {t('contact_us')}
          </h2>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder={t('first_name')}
                className="bg-transparent border-b-2 border-black py-2 px-3 text-black placeholder-gray-600 focus:outline-none max-w-sm"
                style={{ maxWidth: '250px' }}
              />
              <input
                type="text"
                placeholder={t('last_name')}
                className="bg-transparent border-b-2 border-black py-2 px-3 text-black placeholder-gray-600 focus:outline-none max-w-sm"
                style={{ maxWidth: '250px' }}
              />
            </div>
            <input
              type="email"
              placeholder={t('email')}
              className="bg-transparent border-b-2 border-black py-2 px-3 text-black placeholder-gray-600 focus:outline-none max-w-sm"
              style={{ maxWidth: '250px' }}
            />
            <textarea
              placeholder={t('message')}
              className="bg-transparent border-b-2 border-black py-2 px-3 text-black placeholder-gray-600 focus:outline-none max-w-sm"
              rows="4"
              style={{ maxWidth: '250px' }}
            />
            <button
              type="submit"
              className="w-full bg-[#7C8761] text-white py-2 rounded-full border-2 border-white"
              style={{ borderRadius: '45px', width: '300px' }}
            >
              {t('send')}
            </button>
          </form>
        </div>
      </div>

{/* Image section */}
<div className="hidden md:flex absolute right-0 w-full md:w-2/4 flex justify-center items-center mt-8 md:mt-0">
        <img
          src={ContactImage}
          alt={t('contact_us_image_alt')}
          className="object-cover"
          style={{
            maxWidth: '100%',
            maxHeight: '440px',
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
          }}
        />
      </div>
    </div>
  );
};

export default ContactUs;
