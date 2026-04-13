import React, {useState} from 'react'
import { faqData } from '../data/data.js';
import { ChevronsDown } from "lucide-react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Helmet } from 'react-helmet-async';

const Faq = () => {

      const [openIndex, setOpenIndex] = useState(null);
    
      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
  return (
    <>
      <Helmet>
                <title>Faq | probookeeper</title>
                <meta
                    name="description"
                    content="FAQ about probookeeper services."
                />
            </Helmet>
    <Header/>
      <div>
           <section className="pt-24 pb-16 px-4 md:px-8 lg:px-12">
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
                    <ChevronsDown 
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
    </div>
    <Footer/>
    </>
  )
}

export default Faq