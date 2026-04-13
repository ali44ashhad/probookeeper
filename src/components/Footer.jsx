// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import images from "../assets/images.js";
import { Link } from 'react-router-dom'


const Footer = ({ paymentImg, social = {}, className = "" }) => {
  const paymentSrc =
    paymentImg && paymentImg.trim() !== ""
      ? paymentImg
      : "https://placehold.co/150x40/ffffff/0A8B46?text=Payment+Methods";

  const fb = social.facebook ?? "#";
  const twitter = social.twitter ?? "#";
  const linkedin = social.linkedin ?? "#";
  const pinterest = social.pinterest ?? "#";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (

<>
<div className="w-full h-60 md:h-72 lg:h-80 
                    bg-gradient-to-r from-green-600 via-green-800 to-gray-700 
                    flex items-center justify-center p-4">
      
      {/* Inner content box with white border */}
      <div className="border-2 border-white p-6 md:p-8 lg:p-10 
                      text-center max-w-4xl mx-auto">
        
        {/* Discount Message */}
        <p className="text-white text-xl md:text-3xl lg:text-4xl 
                      font-semibold tracking-wide leading-snug">
          Get up to 50% Discount on every Orders.
        </p>
        
        {/* Call to Action */}
        <p className="text-white text-base md:text-xl lg:text-2xl 
                      font-medium mt-2 md:mt-3">
          Contact Us For More Info
        </p>
      </div>
    </div>


    <footer className={`bg-white text-gray-800 ${className} h-[80]`}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand + Disclaimer */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4">
             
              <div>
                <h3 className="text-2xl font-semibold text-green-600">Probookeeper</h3>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Disclaimer:</strong> Probookeeper is an independent accounting firm &amp; Certified QuickBooks Pro-Advisor.
                   Licenses are issued by Intuit. We are not Intuit Inc.
                </p> 

              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-md font-semibold mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-green-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>     
              <li><Link to="/contact-us" className="hover:text-green-600">Contact</Link></li>
              <li><Link to="/privacy-policy " className="hover:text-green-600">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-green-600">Refund Policy</Link></li>
            </ul>
          </div>
          {/* Contact + Social + Newsletter */}
          <div>
          <div className="flex gap-2 justify-around">
             
          </div>
            <h4 className="text-md font-semibold mb-3">Contact Us</h4>
            <p className="text-sm text-gray-700 mb-1">Phone: <a className="font-medium text-gray-900" href="tel:+18888710037">1-888-871-0037</a></p>
            <p className="text-sm text-gray-700 mb-3">Email: <a className="text-gray-900" href="mailto:info@Probookeeper.com">info@Probookeeper.com</a></p>

            <div className="flex items-center gap-3 mb-4">
              <a href={fb} aria-label="Facebook" className="p-2 rounded-md bg-gray-50 hover:bg-green-50">
                <FaFacebookF className="w-4 h-4 text-gray-700" />
              </a>
              <a href={twitter} aria-label="Twitter" className="p-2 rounded-md bg-gray-50 hover:bg-green-50">
                <FaTwitter className="w-4 h-4 text-gray-700" />
              </a>
              <a href={linkedin} aria-label="LinkedIn" className="p-2 rounded-md bg-gray-50 hover:bg-green-50">
                <FaLinkedinIn className="w-4 h-4 text-gray-700" />
              </a>
              <a href={pinterest} aria-label="Pinterest" className="p-2 rounded-md bg-gray-50 hover:bg-green-50">
                <FaPinterestP className="w-4 h-4 text-gray-700" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom row: legal / back-to-top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Probookeeper. All rights reserved.
           
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded-md hover:bg-gray-100"
              aria-label="Back to top"
            >
              Back to top
            </button>

            <div className="text-sm text-gray-500">Powered by Probookeeper</div>
          </div>
        </div>
      </div>
    </footer>

    </>
  );
};

export default Footer;
