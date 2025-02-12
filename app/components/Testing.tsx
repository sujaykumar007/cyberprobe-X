import { serviceData } from '../assets/assets';
import React from 'react';
import Image from 'next/image';

const Testing = () => {
  return (
    <div id="services" className="w-full px-4 sm:px-10 lg:px-16 py-10 scroll-mt-20">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-3xl lg:text-4xl font-bold">
        Cyber Security Experts Offering a Modern
      </h2>
      <p className="text-center max-w-3xl mx-auto mt-4 mb-8 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam debitis molestiae necessitatibus id
        laboriosam modi eos sit dolorum iste totam et, adipisci inventore aperiam, nisi iusto provident fugiat
        doloremque?
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {serviceData.slice(0, 3).map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition duration-500 text-center sm:text-left"
          >
            <div className="flex justify-center sm:justify-start">
              <Image src={icon} alt={title} width={40} height={40} />
            </div>
            <h3 className="text-lg my-4 text-gray-800 font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testing;
