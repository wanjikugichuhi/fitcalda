import React from 'react';
import { FaBicycle, FaBoxOpen, FaExchangeAlt } from 'react-icons/fa';

const BenefitsSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center px-4">
        
        <div>
          <FaBicycle size={40} className="mx-auto text-pink-600" />
          <h3 className="text-xl font-bold mt-4">More than 65 sports</h3>
          <p className="text-gray-600 mt-2">
            At Fit Calda, we support all women in sports since 2024.
          </p>
        </div>

        <div>
          <FaBoxOpen size={40} className="mx-auto text-pink-600" />
          <h3 className="text-xl font-bold mt-4">Free In-Store Pick-up</h3>
          <p className="text-gray-600 mt-2">
            Order online and collect from our hubs in 2 hours.
          </p>
        </div>

        <div>
          <FaExchangeAlt size={40} className="mx-auto text-pink-600" />
          <h3 className="text-xl font-bold mt-4">Easy Returns</h3>
          <p className="text-gray-600 mt-2">
            We offer easy exchange within 90 days for all orders.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;