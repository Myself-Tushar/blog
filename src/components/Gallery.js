import React from 'react';

const Gallery = () => {
  return (
    <>
      {/* Gallery with Lightbox */}
      <div id="gallery" className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-semibold mb-3">Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          <button className="gallery-item" onClick={() => window.open("https://via.placeholder.com/600", "_blank")}>
            <img src="https://www.flamingoagency.com/wp-content/uploads/2023/06/dataworks-portfolio-1024x646.webp" alt="Portfolio Website" className="rounded" />
          </button>
          <button className="gallery-item" onClick={() => window.open("https://via.placeholder.com/600", "_blank")}>
            <img src="https://digitallinkspro.qa/wp-content/uploads/2023/09/ecommerce-website-checklist-b-.jpg" alt="E-Commerce Website" className="rounded" />
          </button>
          <button className="gallery-item" onClick={() => window.open("https://via.placeholder.com/600", "_blank")}>
            <img src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2024/01/MSFT_M365_Jan_10_Blog-1_240111_V03-1024x576.webp" alt="Microsoft 365" className="rounded" />
          </button>
          <button className="gallery-item" onClick={() => window.open("https://via.placeholder.com/600", "_blank")}>
            <img src="https://cdn.pixabay.com/photo/2019/09/17/18/48/computer-4484282_640.jpg" alt="Computer Parts" className="rounded" />
          </button>
        </div>
      </div>

      {/* Recent Posts with Images */}
<div id="projects" className="bg-white p-6 rounded-lg shadow-lg mb-6">
  <h3 className="text-3xl font-semibold mb-3 text-center">Projects</h3><br></br>
  <div className="flex items-center space-x-4 mb-4">
    <img
      src="https://www.flamingoagency.com/wp-content/uploads/2023/06/dataworks-portfolio-1024x646.webp"
      alt="Portfolio Website"
      className="w-20 h-20 object-cover"
    />
    <button
      onClick={() => alert("Portfolio Website clicked")}
      className="text-blue-800 hover:text-blue-600"
    >
      Portfolio Website
    </button>
  </div>
  <div className="flex items-center space-x-4 mb-4">
    <img
      src="https://digitallinkspro.qa/wp-content/uploads/2023/09/ecommerce-website-checklist-b-.jpg"
      alt="E-Commerce Website"
      className="w-20 h-20 object-cover"
    />
    <button
      onClick={() => alert("E-Commerce Website clicked")}
      className="text-blue-800 hover:text-blue-600"
    >
      E-Commerce Website
    </button>
  </div>
  <div className="flex items-center space-x-4 mb-4">
    <img
      src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2024/01/MSFT_M365_Jan_10_Blog-1_240111_V03-1024x576.webp"
      alt=""
      className="w-20 h-20 object-cover"
    />
    <button
      onClick={() => alert("Blog Website clicked")}
      className="text-blue-800 hover:text-blue-600"
    >
      Blog Website
    </button>
  </div>
  <div className="flex items-center space-x-4 mb-4">
    <img
      src="https://www.flamingoagency.com/wp-content/uploads/2023/06/dataworks-portfolio-1024x646.webp"
      alt=""
      className="w-20 h-20 object-cover"
    />
    <button
      onClick={() => alert("Business Website clicked")}
      className="text-blue-800 hover:text-blue-600"
    >
      Business Website
    </button>
  </div>
  <div className="flex items-center space-x-4 mb-4">
    <img
      src="https://as1.ftcdn.net/v2/jpg/02/65/12/50/1000_F_265125093_LgmQ05Y8pegaB9fgbPf4X0ERY6RIgBVr.jpg"
      alt=""
      className="w-20 h-20 object-cover"
    />
    <button
      onClick={() => alert("Website clicked")}
      className="text-blue-800 hover:text-blue-600"
    >
      Task Manager Website
    </button>
  </div>
  <div className="flex items-center space-x-4 mb-4">
    <img
      src="https://market-resized.envatousercontent.com/previews/files/333089017/01_sociala.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=3c79c7b917a0449819b5077aaf34b6b583f54de112e8b7a7ed55e89849e0fd48"
      alt=""
      className="w-20 h-20 object-cover"
    />
    <button
      onClick={() => alert("Website clicked")}
      className="text-blue-800 hover:text-blue-600"
    >
     Social Media Website
    </button>
  </div>
</div>
    </>
  );
};

export default Gallery;