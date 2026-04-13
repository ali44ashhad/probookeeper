import React from 'react'
import images from '../assets/images.js'
import { cardData, features } from '../data/data.js'
import { Phone, LineChart } from 'lucide-react' 
import HomeFurtherSection from './HomeFurtherSection'  
import { Link }from 'react-router-dom'



const Home = () => {
  return (
    <> 
      {/* Section 1 - Hero (Alternative Content) */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-14 sm:py-16 lg:py-20">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 rounded-2xl p-0 lg:p-12">
            {/* Left Image */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-8 lg:mb-0 bg-transparent">
              <img
                src={images.heroImage}
                alt="Smart bookkeeping dashboard"
                className="w-full h-auto max-w-4xl lg:max-w-5xl rounded-br-[10%] rounded-bl-[10%] shadow-xl object-cover"
              />
            </div>

            {/* Right Content - Alternative copy */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-gray-900">
                Effortless bookkeeping, smarter business choices
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium mb-4 text-gray-700">
                Cloud-based accounting built for growing businesses
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
                Streamline your invoicing, match bank transactions in seconds, and gain clear financial insights to scale with confidence. Get started with our guided setup and discover bookkeeping that truly supports your business growth.
              </p>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-3 bg-[#0b6b3b] hover:bg-green-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Talk to a specialist: 1-888-871-0037
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - CTA Banner (Alternative) */}
      <section className="w-full bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Have questions about migration or payroll?</h2>
          <p className="text-gray-700 mb-6">Schedule a free 15-minute audit, and we’ll guide you toward the simplest path forward.</p>
          <Link to="/contact-us" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-md transition">
            Book free audit
          </Link>
        </div>
      </section>

      {/* Section 3 - Support Callout (Alternative) */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need help with troubleshooting or data recovery?</h2>
              <p className="text-gray-700 mb-6">Our certified experts restore files, resolve sync issues, and keep your books secure—fast and hassle-free.</p>
              <Link to="/contact-us" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg inline-block transition-colors duration-300">
                📞 Support: 1-888-871-0037
              </Link>
            </div>

            {/* Right Circular Image */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-transparent">
                <img src={images.gettingImage} alt="Support team in action" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4th section - Feature Highlight (Alternative) */}
      <section className="w-full bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10 sm:py-12">
          <div className="bg-gradient-to-r from-slate-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-1/2 min-h-[320px] relative">
              <img src={images.expertingImage} alt="Advisor helping with accounts" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center text-white text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 lg:mb-6 leading-tight">Partner with certified advisors</h2>
              <p className="text-lg sm:text-xl font-semibold mb-6 lg:mb-8 text-blue-200">From onboarding to year-end close — we’re with you at every stage.</p>

              <ul className="list-none space-y-3 mb-8 lg:mb-10 text-lg sm:text-xl">
                <li>Tailored onboarding to fit your business needs</li>
                <li>Reliable file repair and secure data backups</li>
                <li>Customized reports and KPI dashboards for better insights</li>
              </ul>

              <Link to="/contact-us" className="inline-flex items-center justify-center bg-green-700 hover:bg-green-600 transition-colors text-white text-lg font-bold py-3 px-6 rounded-full self-center lg:self-start max-w-xs w-full sm:w-auto">
                <Phone className="mr-3 h-5 w-5" />
                Call: 1-888-871-0037
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5th section - Cards (Alternative) */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <div key={index} className="bg-gray-50 p-8 flex flex-col items-center text-center rounded-lg border border-gray-100">
                <div className="mb-4">
                  {/* Render provided icon component, fallback to LineChart if missing */}
                  {card.icon ? <card.icon className="w-8 h-8 text-black" /> : <LineChart className="w-8 h-8 text-black" />}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-black">{card.title}</h3>
                <p className="text-gray-600 text-base">{card.altDescription || card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6th section - Features (Alternative) */}
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Clear reporting. Faster decisions.</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">Visualize your cash flow, track profit margins, and export accountant-ready reports in just one click. Our platform eliminates the busywork so you can stay focused on growing your business.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 flex flex-col items-center text-center rounded-lg shadow-sm border border-gray-200">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-green-50 border-2 border-green-400 mb-4">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.altDescription || feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeFurtherSection />

    </>
  )
}

export default Home
