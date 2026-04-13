import React from 'react'
import { refundData } from '../data/data.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

const RefundPolicy = () => {
  return (
 <>
   <Helmet>
     <title>Refund Policy | Probook Solutions</title>
     <meta
       name="description"
       content="Understand Probook’s refund policy, including eligibility, timelines, and service-related terms."
     />
   </Helmet>

   <Header/>

   <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-30">
     <div className="max-w-4xl mx-auto">

       {/* Header */}
       <h1 className="text-4xl font-extrabold text-green-700 text-center mb-4">
         Refund Policy
       </h1> 

       <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
         At Probook, we strive to deliver high-quality services and ensure customer satisfaction. This refund policy outlines the conditions under which refunds may be granted.
       </p>

       {/* Sections */}
       {refundData.map((section, index) => (
         <div key={index} className="mb-10">

           <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-l-4 border-green-600 pl-3">
             {section.title}
           </h2>

           <ul className="list-disc ml-6 space-y-3 text-gray-700">
             {section.content.map((item, itemIndex) => (
               <li
                 key={itemIndex}
                 className="leading-relaxed text-base"
                 dangerouslySetInnerHTML={{ __html: item }}
               />
             ))}
           </ul>
         </div>
       ))}

       {/* Footer */}
       <div className="mt-12 pt-6 border-t border-gray-200 text-center">
         <p className="text-sm text-gray-500 mb-2">
           For any questions regarding refunds, please contact our support team at:
         </p>
         <p className="text-sm font-medium text-gray-700">
           <a className="hover:underline" href="mailto:support@Probookeepers.com">support@Probookeepers.com</a> |{' '}
           <a className="hover:underline" href="tel:+18888710037">+1-888-871-0037</a>
         </p>
         <p className="text-xs text-gray-400 italic mt-4">
           *This policy represents standard refund guidelines. In case of signed agreements, contract-specific terms will take precedence.
         </p>
       </div>

     </div>
   </div>

   <Footer/>
 </>
  )
}

export default RefundPolicy