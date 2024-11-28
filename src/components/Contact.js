import React, { useState } from "react";

function Contact() {
  const [notification, setNotification] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent form submission
    setNotification(true);
    setTimeout(() => {
      setNotification(false); // Hide notification after 3 seconds
    }, 3000);
  };

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form
          onSubmit={handleSendMessage}
          className="max-w-xl mx-auto bg-white p-8 rounded shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
        {notification && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;