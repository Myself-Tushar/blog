import React, { useState } from 'react';

function Footer() {
  const [notification, setNotification] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    setNotification("Thank you for subscribing!");
    setTimeout(() => setNotification(""), 3000); // Clear the notification after 3 seconds
  };

  return (
    <footer className="custom-footer mt-10">
      <div className="footer-container">
        <div className="footer-grid md:grid md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="footer-section">
            <h4 className="footer-title">About Me</h4>
            <p className="footer-text">
              Tech TSR is dedicated to sharing cutting-edge web development, tech insights, and coding tutorials.
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section">
            <h4 className="footer-title">Subscribe to our Newsletter</h4>
            <p className="footer-text">Stay updated with the latest posts and tips in the tech world.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            {notification && (
              <div className="notification">
                {notification}
              </div>
            )}
          </div>

          {/* Footer Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#sidebar" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h4 className="footer-title">Follow Me</h4>
            <div className="footer-social">
              <button className="https://x.com/Tech_TSR">Twitter</button>
              <button className="https://www.instagram.com/myself_tsr/">Instagram</button>
              <button className="https://www.linkedin.com/in/tushar-singha-35a6b1334/">LinkedIn</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom flex justify-between items-center">
  <div className="footer-copyright">
    <p>&copy; 2024 Tech TSR. All Rights Reserved.</p>
  </div>
  <div className="footer-social flex space-x-4">
    <button className="social-link">Terms</button>
    <button className="social-link">Privacy</button>
  </div>
</div>
      </div>
    </footer>
  );
}

export default Footer;