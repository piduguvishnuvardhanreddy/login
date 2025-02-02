import './index.css'
import {SiLinkedin, SiInstagram} from 'react-icons/si'

const Footer = () => (
  <div className="footer-container">
    <div className="container">
      <div className="footer-top">
        <div className="newsletter">
          <h1 className="footer-header">BE THE FIRST TO KNOW</h1>
          <p className="footer-para">Sign up for updates from mettä muse.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-currency">
          <div className="contact">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className="currency">
            <h3>CURRENCY</h3>
            <div className="currency-dropdown">
              <button type="button">USD</button>
            </div>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr className="line" />

      <div className="footer-bottom">
        <div className="footer-links">
          <div className="brand">
            <h1 className="footer-header">Metta Muse</h1>
            <ul className="footer-section-icon">
              <li className="foooter-icon">About</li>
              <li className="foooter-icon">Stories</li>
              <li className="foooter-icon">Artisans</li>
              <li className="foooter-icon">Boutiques</li>
              <li className="foooter-icon">Contact Us</li>
              <li className="icon-width">EU Compliances Docs</li>
            </ul>
          </div>
          <div className="quick-links">
            <h1 className="quick">QUICK LINKS</h1>
            <ul className="footer-section-quick">
              <li className="icon-width">Orders & Shipping</li>
              <li className="icon-width">Join/Login as a Seller</li>
              <li className="icon-width">Payment & Pricing</li>
              <li className="icon-width">Return & Refunds</li>
              <li className="icon-width">FAQs</li>
              <li className="icon-width">Privacy Policy</li>
              <li className="icon-width">Terms & Conditions</li>
            </ul>
          </div>
          <div className="follow-us">
            <h3>FOLLOW US</h3>
            <div className="social-icons">
              <SiLinkedin />
              <SiInstagram />
            </div>
            <div className="payment-methods">
              <h1 className="meta">metta muse ACCEPTS</h1>
              <div className="payment-icons">
                <img src="/googlepay.png" alt="Google Pay" />
                <img src="/applepay.png" alt="Apple Pay" />
                <img src="/amex.png" alt="American Express" />
                <img src="/paypal.png" alt="PayPal" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
)
export default Footer
