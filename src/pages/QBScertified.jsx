import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import { qbsBusinessData, qbsBusinessSuccessData } from '../data/data.js';
import images from '../assets/images.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'

const QBScertified = () => {
  const primaryGreen = 'bg-green-700 hover:bg-green-800';

  return (
    <>
      <Helmet>
                    <title>QBS certified | Probookeepers</title>
                    <meta
                        name="description"
                        content="Certified Probookeepers for business software assistance."
                    />
                </Helmet>
    <Header/>
      {/* PAGE WRAPPER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans">

        {/* SECTION 1 */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8 lg:mb-12 pt-16 sm:pt-30">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={images.QBScertifiedHeroImage}
              alt="Digital tools for business management"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
              Professional Business Software Assistance
            </h2>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Your Trusted Technology Optimization Partner
            </h1>

            <ul className="text-base text-gray-600 space-y-2 mb-6 list-disc list-inside">
              <li>End-to-End Software Setup & Customization</li>
              <li>Advanced Data Recovery & System Diagnostics</li>
              <li>Seamless Data Import, Export, & Synchronization</li>
            </ul>

            <a
              href="tel:+18888710037"
              className={`inline-block py-2 px-6 text-white font-bold rounded-md transition duration-300 shadow ${primaryGreen}`}
            >
              Call: 1-888-871-0037
            </a>
          </div>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* SECTION 2 */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-6 my-6">
          <div className="w-full lg:w-2/3 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Accredited Technology Advisors
            </h2>

            <p className="text-base text-gray-600 mb-4">
              Our team of <strong>Certified Technology Specialists</strong> brings years of hands-on
              experience helping businesses streamline operations. We have been awarded the
              <strong> Excellence in Technical Services Award</strong>.
            </p>

            <a
              href="tel:+18888710037"
              className={`inline-block py-2 px-6 text-white font-bold rounded-md transition duration-300 shadow ${primaryGreen}`}
            >
              Call: 1-888-871-0037
            </a>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
            <img
              src={images.QBSsecondSectionImage}
              alt="Certified advisors providing support"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-full h-auto object-cover rounded-md shadow"
            />
          </div>
        </section>
      </div>

      {/* IMAGE BLOCK */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex justify-center">
        <img
          src={images.mainCertificate}
          alt="software illustration"
          className="w-full h-auto max-w-screen-md object-contain"
        />
      </div>

      {/* SECTION 3 HERO */}
      <div className="font-sans">
        <section className="bg-neutral-800 text-white py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-1">Facing Technical Glitches?</h2>
            <h3 className="text-lg sm:text-xl font-light mb-4">Get Rapid Professional Support Now</h3>

            <a
              href="tel:+18888710037"
              className="inline-flex items-center justify-center px-6 py-2 text-base font-bold rounded-full shadow bg-green-700 hover:bg-green-800 transition duration-300 ring-4 ring-green-600/40"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: 1-888-871-0037
            </a>
          </div>
        </section>

        {/* GREEN CARD */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-12">
          <div className="relative w-full max-w-4xl mx-auto bg-emerald-600 text-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg overflow-hidden"
               style={{ border: '6px solid rgba(0, 0, 0, 0.05)' }}>
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* BADGE */}
              <div className="flex-shrink-0">
                <div className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white rounded-lg shadow w-24 h-24 sm:w-28 sm:h-28 border border-gray-100">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 mb-1" />
                  <div className="text-[11px] font-semibold text-gray-700">Verified</div>
                  <div className="text-sm font-bold text-gray-900 mt-0.5">Expert</div>
                  <div className="text-[11px] text-gray-500">Technician</div>
                </div>
              </div>

              {/* TEXT */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-1 leading-tight">
                  Trusted Technology Specialists
                </h2>

                <p className="text-sm sm:text-base text-white/90 mb-3 md:mb-4 max-w-xl">
                  We provide tailored recommendations, software upgrades, data rebuilding,
                  and integration support for businesses of all sizes.
                </p>

                <a
                  href="tel:+18888710037"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2 text-base font-bold rounded-full shadow bg-green-700 hover:bg-green-800 transition duration-300"
                >
                  Call: 1-888-871-0037
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="max-w-7xl mx-auto my-6 border-gray-200" />
      </div>

      {/* SECTION 4 FEATURES */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-3">
              Powerful Tools for Smarter Operations
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
              Accessing accurate business data gives you a clear path toward informed decision-making.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qbsBusinessData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center p-4 text-center">
                  <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full text-emerald-600">
                    <Icon size={44} strokeWidth={1} className="drop-shadow-sm" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="tel:+18888710037"
              className="inline-block px-6 py-3 text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow transition duration-300"
            >
              Call: 1-888-871-0037
            </a>
          </div>
        </div>
      </div>

      {/* CERTIFICATE IMAGE (CENTERED & RESPONSIVE) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex justify-center">
        <img
          src={images.certificate}
          alt="business image"
          className="w-full h-auto max-w-screen-md object-contain"
        />
      </div>

      {/* SECTION 5 (DUPLICATE WITH NEW TEXT) */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-3">
              Your Business Success Starts with Better Tools
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
              Efficient financial tracking helps eliminate errors and strengthen your internal workflow.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qbsBusinessSuccessData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center p-4 text-center">
                  <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full text-emerald-600">
                    <Icon size={44} strokeWidth={1} className="drop-shadow-sm" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="tel:+18888710037"
              className="inline-block px-6 py-3 text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow transition duration-300"
            >
              Call: 1-888-871-0037
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default QBScertified;
