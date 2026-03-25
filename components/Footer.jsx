'use client'

import { Facebook, Instagram, Link as LinkIcon, Music, Twitter } from 'lucide-react';
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter */}
      <div className="bg-gray-900 py-6 border-b border-yellow-900/70">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <p className="text-lg text-center">
            Be the first to hear about exclusive offers and new collections from <Link className="sCl" href="/signup">SpexNation</Link>
          </p>

          {/* <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 sm:w-48 px-4 py-2 rounded text-gray-900 text-sm"
            />
            <button className="pBg text-white px-4 py-2 rounded font-bold transition text-sm">
              SUBSCRIBE
            </button>
          </div> */}

        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold mb-4 sCl">FRAMES</h4>
            <ul className="space-y-2 text-md">
              <li><a href="/mens" className="hover:text-yellow-300 transition">Men's Frames</a></li>
              <li><a href="/womens" className="hover:text-yellow-300 transition">Women's Frames</a></li>
              <li><a href="/accessories" className="hover:text-yellow-300 transition">Accessories</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold mb-4 sCl">COMPANY</h4>
            <ul className="space-y-2 text-md">
              <li><a href="/about" className="hover:text-yellow-300 transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-300 transition">Contact Us</a></li>
              <li><a href="/shop" className="hover:text-yellow-300 transition">Shop</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold mb-4 sCl">INFORMATION</h4>
            <ul className="space-y-2 text-md">
              <li><a href="/prescriptiondisclaimer" className="hover:text-yellow-300 transition">Prescription Disclaimer</a></li>
              <li><a href="/howtoreadyourprescription" className="hover:text-yellow-300 transition">How to Read Your Prescription</a></li>
              <li><a href="/deliveryinformation" className="hover:text-yellow-300 transition">Delivery Information</a></li>
              <li><a href="/bestlensesforyourprescription" className="hover:text-yellow-300 transition">Best Lenses for Your Prescription</a></li>
              <li><a href="/lensandcoatingsguide" className="hover:text-yellow-300 transition">Lens and Coatings Guide</a></li>
              <li><a href="/howtomeasureyourpd" className="hover:text-yellow-300 transition">How to Measure Your PD</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold mb-4 sCl">SUPPORT</h4>
            <ul className="space-y-2 text-md">
              <li><a href="/returnspolicy" className="hover:text-yellow-300 transition">Return Policy</a></li>
              <li><a href="/cookiepolicy" className="hover:text-yellow-300 transition">Cookie Policy</a></li>
              <li><a href="/privacypolicy" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
              <li><a href="/termsandconditions" className="hover:text-yellow-300 transition ">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="border-t pt-8 border-yellow-900/70 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full pBg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                aria-label="Website"
              >
                <LinkIcon size={20} />
              </a>
            </div>
          </div>

          <p className="text-center md:text-right text-md font-light text-gray-400">
            © 2024 Spex Nation. All rights reserved. Premium eyewear for the discerning eye.
          </p>
        </div>
      </div>
    </footer>
  )
}
