import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import RefundPolicy from './pages/RefundPolicy'
import QBScertified from './pages/QBScertified' 
import PrivacyPolicy from './pages/PrivacyPolicy'
import Faq from './pages/Faq' 
import ContactUsForm from './pages/ContactUsForm'
import Authenticity from './pages/Authenticity'
import Terms from './pages/Terms'

function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact-us" element={<ContactUsForm />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/faqs" element={<Faq />} /> 
          <Route path="/qbs-certified" element={<QBScertified />} />
          <Route path="/authenticity" element={<Authenticity />} />
          <Route path="/terms-conditions" element={<Terms />} /> 
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
