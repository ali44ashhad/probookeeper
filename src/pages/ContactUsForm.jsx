import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Helmet } from 'react-helmet-async';

const ContactUsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
  <>
  <Helmet>
                <title>Contact | Probookeeper</title>
                <meta
                    name="description"
                    content="Contact Probookeeper for any questions or inquiries."
                />
            </Helmet>
  <Header/>
      <div className="bg-[#1e1e1e] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl font-semibold mb-2">
            Feel Free To Contact Us
          </h2>
          <div className="flex justify-center mb-6">
             <div className="w-12 h-1 bg-yellow-600 rounded"></div>
          </div>
          <p className="text-white text-lg">
            Drop a line
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="YOUR NAME *"
                className="p-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md text-gray-800 placeholder-gray-500"
                required
              />
              <input
                type="email"
                placeholder="YOUR EMAIL *"
                className="p-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md text-gray-800 placeholder-gray-500"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="YOUR PHONE *"
              className="p-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md text-gray-800 placeholder-gray-500"
              required
            />
            <textarea
              placeholder="YOUR MESSAGE"
              rows="6"
              className="p-4 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md text-gray-800 placeholder-gray-500 md:col-span-2"
            ></textarea>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-[#1e1e1e]"
              >
                Submit
              </button>
            </div>
          </form>

          {/* RIGHT SIDE: Contact Information */}
          <div className="text-white lg:pl-12">
            <h3 className="text-2xl font-bold mb-6">Probookeeper</h3>
            
            {/* Head Office */}
            <div className="flex items-start mb-4">
              <span className="mr-3 text-lg">📍</span> {/* Location Icon */}
              <div>
                <p className="font-semibold text-gray-300">Head Office:</p>
                <p className="text-gray-400">30 N Gould St Ste</p>
                <p className="text-gray-400">R. Sheridan, WY 82801</p>
              </div>
            </div>

            {/* Office Phone */}
            <div className="flex items-center mb-4">
              <span className="mr-3 text-lg">📞</span> {/* Phone Icon */}
              <div>
                <p className="font-semibold text-gray-300">Office Phone:</p>
                <a href="tel:+18888710037" className="text-green-500 hover:text-green-400 transition-colors">
                  1-888-871-0037
                </a>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center mb-6">
              <span className="mr-3 text-lg">📧</span> {/* Email Icon */}
              <div>
                <p className="font-semibold text-gray-300">Email Address:</p>
                <a href="mailto:info@Probookeeper.com" className="text-green-500 hover:text-green-400 transition-colors">
                  info@Probookeeper.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div>
              <p className="font-semibold text-gray-300">Working Hour:</p>
              <p className="text-gray-400">Monday – Friday: 9:00AM – 9:00PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default ContactUsForm;