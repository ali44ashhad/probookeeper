import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Helmet } from 'react-helmet-async'


const Authenticity = () => {
  return (
   <>

    <Helmet>
         <link rel="icon" type="image/svg+xml" href="react.svg" />
                <title>Authenticity | Probookeepers</title>
                <meta
                    name="description"
                    content="Authenticity of Probookeepers."
                />
            </Helmet>
   <Header/>
     <div>

        <div className="max-w-7xl mx-auto p-8 pt-30">
      {/* Main Heading */}
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
       Authenticity
      </h2>
      
      {/* Section 1: Data Access */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Data Retrieval
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          All user data is securely managed by our central API service. If you lose access credentials and have a verified account, you can always recover your information online. Visit your account credentials dashboard
           to reset your password and retrieve your API key. If you haven't verified your account, use the  Key Recovery Tool
        </p>
      </div>

      {/* Horizontal Rule for separation */}
      <hr className="my-8 border-gray-200" />
      
      {/* Section 2: Technical Support */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Technical Assistance
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          All premium software licenses purchased from <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 underline transition duration-150 ease-in-out"
          >
         www.qbsaccounting.us</a> are fully supported by our Dev Support Team. Please note that <b>priority support</b> is available for **Platinum** and **Gold** tier subscriptions. Other plans come with standard support (mostly deployment-related issues). Advanced support can be secured by upgrading to an Enterprise subscription
        </p>
        <p className="text-gray-600 leading-relaxed">
          You can also request more information by emailing us at <a 
          href="mailto:info@Probookeepers.com" 
          className="text-blue-600 hover:text-blue-800 underline transition duration-150 ease-in-out"
          > info@Probookeepers.com</a>
        </p>
      </div>
    </div>
    </div>
    <Footer/>
   </>
  )
}

export default Authenticity