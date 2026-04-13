import React from 'react'
import { termsSections } from '../data/data.js'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Helmet } from 'react-helmet-async'

const Terms = () => {
  return (
   <>
     <Helmet>
                <title>Terms and Conditions | Probookeeper</title>
                <meta
                    name="description"
                    content="Read ISHEP Foundation's Anti-Discrimination Policy detailing equality, inclusion, and fairness."
                />
            </Helmet>
   <Header/>
     <div>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-20">
      {/* Content: Centered, without shadow, background, border, or rounded corners */}
      <div className="max-w-4xl mx-auto p-6 sm:p-10 lg:p-12">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-4">
            Terms and Conditions
          </h1>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-sm sm:text-base">
            Last Updated: November 21, 2025
          </p>
        </div>

        {/* Terms Sections Map */}
        <div className="space-y-8">
          {termsSections.map((section, index) => (
            <div key={index} className="group">
              {/* Section Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                {/* Decorative green dot before title */}
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1 block"></span>
                {section.title}
              </h2>

              {/* Section Content */}
              <div className="pl-5 border-l-2 border-gray-100 ml-1 group-hover:border-green-200 transition-colors duration-300">
                {section.content.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex} 
                    className="text-gray-600 mb-3 leading-relaxed text-base text-justify sm:text-left"
                    // Allows for **bold** markdown-style text within the paragraphs
                    dangerouslySetInnerHTML={{ 
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-gray-800">$1</span>') 
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            If you have any questions regarding these Terms and Conditions, please contact us directly.
          </p>
        </div>

      </div>
    </div>
    </div>
    <Footer/>
   </>
  )
}

export default Terms