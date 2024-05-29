// src/PricingTable.js
import React from 'react';

const PricingTable = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl">PRICING</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            BUSINESS PRICING TABLE
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
            Affordable and flexible pricing plans for every need.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Pricing Plan Card */}
          <div className="max-w-sm bg-blue-900 rounded-lg shadow-lg overflow-hidden ">
            <div className="px-8 py-6 ">
              <h3 className="text-center text-2xl font-semibold text-gray-100">Basic</h3>
              <p className="text-center text-gray-100 mt-4">$9/month</p>
              <div className="mt-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">10 User</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">50 GB Storage</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">Analytics View Only</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-red-500" checked disabled />
                    <span className="ml-3 text-gray-100">Your Domain No</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-red-" checked disabled />
                    <span className="ml-3 text-gray-100">Management No</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          {/* Repeat for other plans */}
          <div className="max-w-sm bg-green-800 rounded-lg shadow-lg overflow-hidden">
            <div className="px-8 py-8">
              <h3 className="text-center text-2xl font-semibold text-gray-100">Standard</h3>
              <p className="text-center text-gray-100 mt-4">$29/month</p>
              <div className="mt-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">15 User</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">100 GB Storage</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">Analytics View and Share</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">Your Domain Yes</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-red-500" checked disabled />
                    <span className="ml-3 text-gray-100">Management No</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-purple-900 rounded-lg shadow-lg overflow-hidden">
            <div className="px-8 py-8">
              <h3 className="text-center text-2xl font-semibold text-gray-100">Premium</h3>
              <p className="text-center text-gray-100 mt-4">$49/month</p>
              <div className="mt-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">35 User</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">200 GB Storage</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">Analytics View and Share</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">Your Domain Yes</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="text-green-500" checked disabled />
                    <span className="ml-3 text-gray-100">Management Yes</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
