import React from 'react';
import { useTranslation } from 'react-i18next';
import Frame41 from './images/Frame 41.png';
import Frame40 from './images/Frame 39.png';
import Frame39 from './images/Frame 38.png';
import Frame38 from './images/Frame 40.png';

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* العنوان */}
      <div className="w-full flex justify-center py-6">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 border-b-4 border-white inline-block pb-2 text-white">
          {t('services_title')}
        </h2>
      </div>

      {/* القسم */}
      <section
        className="w-full py-6 px-4 md:px-8 lg:px-12 xl:px-24 text-white flex flex-col items-center"
        style={{
          background: 'linear-gradient(to right, #7C8761 50%, #D6EFD880 100%)',
        }}
      >
        {/* الكروت */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Card 1 */}
          <div
            className="p-0 rounded-lg shadow-lg flex flex-col items-center w-64"
            style={{
              background: 'linear-gradient(135deg, #98a786, #c1d7bc, #d6efd8)',
              borderRadius: '47px',
              transform: 'translateY(20px)', // نزول الكرت الأول قليلاً
            }}
          >
            <div className="w-full h-3/4 mb-4 flex-grow">
              <img
                src={Frame41}
                alt={t('selling_flower_bouquets')}
                className="w-full h-full object-cover rounded-lg"
                style={{ borderRadius: '40px' }}
              />
            </div>
            <button className="w-full flex items-center justify-center bg-transparent text-green-800 font-semibold px-4 py-2 mt-4 rounded-full">
              {t('selling_flower_bouquets')}
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Card 2 */}
          <div
            className="p-0 rounded-lg shadow-lg flex flex-col items-center w-64"
            style={{
              background: 'linear-gradient(135deg, #98a786, #c1d7bc, #d6efd8)',
              borderRadius: '40px',
              transform: 'translateY(40px)', // نزول الكرت الثاني أكثر من الأول
            }}
          >
            <div className="w-full h-3/4 mb-4 flex-grow">
              <img
                src={Frame40}
                alt={t('selling_houseplants')}
                className="w-full h-full object-cover rounded-lg"
                style={{ borderRadius: '40px' }}
              />
            </div>
            <button className="w-full flex items-center justify-center bg-transparent text-green-800 font-semibold px-4 py-2 mt-4 rounded-full">
              {t('selling_houseplants')}
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Card 3 */}
          <div
            className="p-0 rounded-lg shadow-lg flex flex-col items-center w-64"
            style={{
              background: 'linear-gradient(135deg, #98a786, #c1d7bc, #d6efd8)',
              borderRadius: '40px',
              transform: 'translateY(20px)', // نزول الكرت الثالث بنفس قدر الأول
            }}
          >
            <div className="w-full h-3/4 mb-4 flex-grow">
              <img
                src={Frame39}
                alt={t('packaging_service')}
                className="w-full h-full object-cover rounded-lg"
                style={{ borderRadius: '40px' }}
              />
            </div>
            <button className="w-full flex items-center justify-center bg-transparent text-green-800 font-semibold px-4 py-2 mt-4 rounded-full">
              {t('packaging_service')}
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Card 4 */}
          <div
            className="p-0 rounded-lg shadow-lg flex flex-col items-center w-64"
            style={{
              background: 'linear-gradient(135deg, #98a786, #c1d7bc, #d6efd8)',
              borderRadius: '40px',
              transform: 'translateY(40px)', // نزول الكرت الرابع بنفس قدر الثاني
            }}
          >
            <div className="w-full h-3/4 mb-4 flex-grow">
              <img
                src={Frame38}
                alt={t('delivery_service')}
                className="w-full h-full object-cover rounded-lg"
                style={{ borderRadius: '40px' }}
              />
            </div>
            <button className="w-full flex items-center justify-center bg-transparent text-green-800 font-semibold px-4 py-2 mt-4 rounded-full">
              {t('delivery_service')}
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;