import React, {useState} from 'react'
import { productData, faqData, plans } from '../data/data.js'
import  { Phone, CheckSquare, ChevronRight, ChevronDown, ChevronsDown } from 'lucide-react'
import { FaPhone, FaCheckSquare, FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import images from "../assets/images.js";

const HomeFurtherSection = () => {


  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <> 

{/* find a plan  */}
<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Find a plan that's right for you
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Enjoy upto <b>40% off</b> for your first 3 months.*
          </p>
        </div>

        {/* Pricing Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {plans.map((plan, index) => (
            // This entire block replaces the separate <PlanCard /> component
            <div 
              key={index} 
              className="flex flex-col border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white h-auto"
            >
              
              {/* Plan Header */}
              <div className="p-6 text-center border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
                <div className="mt-2 flex flex-col items-center">
                  <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                  <p className="text-3xl font-bold text-gray-900 leading-none mt-1">{plan.price}</p>
                </div>
              <Link to="/contact-us">
                  <button 
                  className={`mt-4 w-full py-2 px-4 text-white font-medium rounded-full transition duration-150 ease-in-out ${plan.buttonColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700`}
                >
                  Try it free
                </button>
              </Link>
              </div>

              {/* Plan Features */}
              <div className="p-6 flex-grow">
                <ul className="space-y-3 text-sm text-gray-600">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-3 text-green-600 font-bold">{featureIndex + 1}.</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          *Terms and conditions apply. Offer valid for new subscribers only.
        </div>
      </div>
    </div>



<section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 py-12 bg-white">

  {/* LEFT — Circular Image */}
  <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
   <div className="w-80 h-80 sm:w-96 sm:h-96 border-none rounded-full overflow-hidden shadow-2xl border-4">
  <img 
    src={images.quickbooksImage} 
    alt="probookeeper Team" 
    className="w-full h-full object-cover" 
  />
</div>

  </div>

  {/* RIGHT — Content */}
 <div className="lg:w-1/2 w-full text-center lg:text-left">
  {/* Main Heading */}
  <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
    Want to see Probookeeper in action?
  </h2>

  {/* Sub-Heading */}
  <h3 className="text-xl lg:text-2xl font-semibold text-green-700 mb-3">
    Try our small business accounting software
  </h3>

  {/* Paragraph */}
  <p className="text-gray-700 mb-6 leading-relaxed">
  Probook automatically tracks and organizes your finances—so you can skip manual data entry. It simplifies bookkeeping, invoicing, time tracking, and more, making everyday financial tasks smooth and effortless.
  </p>

  {/* Button */}
  <Link 
    to="/contact-us"
    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg inline-block transition-colors duration-300"
  >
    Try Probook Now
  </Link>
</div>
</section>


 <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            How We Help Businesses With Probook
          </h1>
  
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Content Block */}
            <div className="order-2 md:order-1">
  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
    Access exclusive pricing on all Probook products and solutions.
  </h2>
  <p className="text-gray-600 leading-relaxed mb-4">
    Whether you're just getting started with Probook or upgrading your existing setup, we tailor a consulting plan to fit your business needs.
  </p>
  <p className="text-gray-600 leading-relaxed">
    Our US-based team of certified ProAdvisors brings extensive experience across multiple industries and works with all Probook versions, including Online, Pro, Premier, Accountant Edition, and Enterprise.
  </p>
</div>
  
            {/* Image Block */}
            <div className="order-1 md:order-2 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
              <img 
                src={images.weHelp}
                alt="A certified Probook consultant working on a laptop" 
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/9CA3AF/ffffff?text=Image+Not+Available" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ Section - INLINED */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* FAQ Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 md:mb-12">
            FAQ About Probook Services
          </h2>
          
          {/* Accordion Container */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            {/* Mapping over data and inlining AccordionItem JSX */}
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.id} className="border-b border-gray-200 w-full">
                  <button
                    className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
                    onClick={() => toggleAccordion(index)} // Calls the App's state updater
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center text-sm font-medium text-gray-700">
                      <ChevronsDown className="w-4 h-4 mr-3 text-green-600" />
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      

    </>
  )
}

export default HomeFurtherSection