import React from 'react';
import images from '../assets/images.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Probook Solutions</title>
        <meta
          name="description"
          content="Learn how Probook helps businesses simplify bookkeeping, automate finances, and grow with confidence."
        />
      </Helmet>

      <Header />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 sm:py-12 lg:py-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-gray-800 mb-6 sm:mb-8">
            About Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Text column */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-semibold text-gray-900 mb-4">
                Simplifying finances for growing businesses.
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                At Probook, we help businesses streamline their finances and make smarter decisions with confidence. Our goal is to remove the complexity from bookkeeping so you can focus on what matters most—growing your business.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                From setup and migration to cleanup, payroll, and ongoing support, we provide tailored accounting solutions designed around your needs.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Our certified ProAdvisors bring years of experience working with businesses across multiple industries. We ensure your financial systems are accurate, organized, and optimized for success.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With a strong focus on reliability, transparency, and efficiency, Probook delivers more than just bookkeeping—we provide insights that help drive your business forward.
              </p>
            </div>

            {/* Image column */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <img
                  src={images.quickbooksImage}
                  alt="Business accounting and bookkeeping"
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="mt-8 sm:mt-12 lg:mt-20 border-t-4 border-green-600" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;