import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image1 from './images/Vector.png';
import Image2 from './images/Vector (1).png';
import Image3 from './images/ph_phone-call-thin.png';
import Rectangle61 from './images/Rectangle 61 .png';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';

const AboutUsSection = () => {
  const { t } = useTranslation();
  const [props] = useSpring(() => ({
    opacity: 1,
    transform: 'translateY(0)',
    config: { tension: 170, friction: 26 }
  }));

  return (
    <animated.section
      style={props}
      className="py-12 px-4 md:px-8 lg:px-12 xl:px-24 text-white flex flex-col items-center"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 border-b-4 border-white inline-block pb-2">
          {t('about_us')}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl">
          {t('about_us_description')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-transparent text-white p-6 rounded-lg border border-[#1A5319] shadow-[0px_7px_7.5px_0px_rgba(255,255,255,0.3)] transform-gpu hover:scale-105 transition-transform flex flex-col items-center w-80">
          <img
            src={Image1}
            alt={t('card1_alt')}
            className="w-24 h-24 object-cover mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-center">
            {t('card1_title')}
          </h3>
          <p className="text-base text-center" style={{ fontSize: '14px' }}>
            {t('card1_description')}
          </p>
        </div>
        <div className="bg-transparent text-white p-6 rounded-lg border border-[#1A5319] shadow-[0px_7px_7.5px_0px_rgba(255,255,255,0.3)] transform-gpu hover:scale-105 transition-transform flex flex-col items-center w-80">
          <img
            src={Image2}
            alt={t('card2_alt')}
            className="w-24 h-24 object-cover mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-center">
            {t('card2_title')}
          </h3>
          <p className="text-base text-center" style={{ fontSize: '14px' }}>
            {t('card2_description')}
          </p>
        </div>
        <div className="bg-transparent text-white p-6 rounded-lg border border-[#1A5319] shadow-[0px_7px_7.5px_0px_rgba(255,255,255,0.3)] transform-gpu hover:scale-105 transition-transform flex flex-col items-center w-80">
          <img
            src={Image3}
            alt={t('card3_alt')}
            className="w-24 h-24 object-cover mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-center">
            {t('card3_title')}
          </h3>
          <p className="text-base text-center" style={{ fontSize: '14px' }}>
            {t('card3_description')}
          </p>
        </div>
      </div>

      {/* New Section */}
      <div className="w-full mt-12 flex flex-col md:flex-row">
        <div className="flex-1">
          <img
            src={Rectangle61}
            alt={t('limited_offer_title')}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="relative flex-1 bg-gradient-to-r from-[#5a9159] via-[#649663] to-[#719d72] p-6 flex flex-col justify-center items-start">
          <h4 className="text-white mb-4 uppercase" style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.5)' }}>
            {t('limited_offer_title')}
          </h4>
          <p className="text-white font-bold mb-4 uppercase" style={{ fontSize: '30px' }}>
            {t('limited_offer_description')}
          </p>
          <button className="bg-transparent text-white  px-6 py-2 rounded-full flex items-center hover:bg-white hover:text-black transition">
            <span className="mr-2">{t('grab_it_now')}</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </animated.section>
  );
};

export default AboutUsSection;
