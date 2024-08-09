
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image1 from './images/Vector.png';
import Image2 from './images/Vector (1).png';
import Image3 from './images/ph_phone-call-thin.png';


const AboutUsSection = () => {
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
          About Us
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl">
          This site is for those who admire the beauty and harmony of nature.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-transparent text-white p-6 rounded-lg border border-[#1A5319] shadow-[0px_7px_7.5px_0px_rgba(255,255,255,0.3)] transform-gpu hover:scale-105 transition-transform flex flex-col items-center w-80">
          <img
            src={Image1} // Replace with your image path
            alt="Card 1"
            className="w-24 h-24 object-cover mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-center">Large Assortment</h3>
          <p className="text-base text-center" style={{ fontSize: '14px' }}>
            We offer our customers more than 15,000 items of natural and artificial flowers, trees, and many accessories for floristry.
          </p>
        </div>
        <div className="bg-transparent text-white p-6 rounded-lg border border-[#1A5319] shadow-[0px_7px_7.5px_0px_rgba(255,255,255,0.3)] transform-gpu hover:scale-105 transition-transform flex flex-col items-center w-80">
          <img
            src={Image2} // Replace with your image path
            alt="Card 2"
            className="w-24 h-24 object-cover mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-center">Free & Fast Shipping</h3>
          <p className="text-base text-center" style={{ fontSize: '14px' }}>
            We will ship your goods after receipt of funds to the current account. Choose the most convenient option from the offered delivery methods.
          </p>
        </div>
        <div className="bg-transparent text-white p-6 rounded-lg border border-[#1A5319] shadow-[0px_7px_7.5px_0px_rgba(255,255,255,0.3)] transform-gpu hover:scale-105 transition-transform flex flex-col items-center w-80">
          <img
            src={Image3} // Replace with your image path
            alt="Card 3"
            className="w-24 h-24 object-cover mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-center">24/7 Support</h3>
          <p className="text-base text-center" style={{ fontSize: '14px' }}>
            We work seven days a week, including lunch breaks. We will be glad to welcome you as our buyer and thank you for your trust in us.
          </p>
        </div>
      </div>
    </animated.section>
  );
};

export default AboutUsSection;