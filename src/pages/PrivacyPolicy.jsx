import React from 'react'
import { policySections } from '../data/data.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicy = () => {
  return (
   <>
     <Helmet>
        <title>Privacy Policy | Probookeepers</title>
        <meta
          name="description"
          content="Learn how Probook protects your data, ensures privacy, and handles your information securely."
        />
      </Helmet>

      <Header/>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Content */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 lg:p-12">

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-4">
              Privacy Policy
            </h1>
            <div className="h-1 w-24 bg-green-500 mx-auto rounded-full mb-4"></div>
             
            <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              At Probook, we value your trust and are committed to protecting your personal and financial information with the highest level of security and transparency.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {policySections.map((section, index) => (
              <div key={index} className="group">
                
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1 block"></span>
                  {section.title}
                </h2>

                <div className="pl-5 border-l-2 border-gray-100 ml-1 group-hover:border-green-200 transition-colors duration-300">
                  {section.content.map((paragraph, pIndex) => (
                    <p 
                      key={pIndex} 
                      className="text-gray-600 mb-3 leading-relaxed text-base text-justify sm:text-left"
                      dangerouslySetInnerHTML={{ 
                        __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-gray-800">$1</span>') 
                      }}
                    />
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Footer Contact */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-700 font-semibold mb-2">
              Contact Us
            </p>
            <p className="text-gray-500 text-sm">
              If you have any questions about this Privacy Policy or how your data is handled, please contact our team at:
              <br/>
              <a className="font-medium text-gray-700 hover:underline" href="mailto:support@Probookeepers.com">support@Probookeepers.com</a> or{' '}
              <a className="font-medium text-gray-700 hover:underline" href="tel:+18888710037">+1-888-871-0037</a>
            </p>
          </div>

        </div>
      </div>

      <Footer/>
   </>
  )
}

export default PrivacyPolicy