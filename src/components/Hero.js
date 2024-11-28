import React from "react";

function Hero() {
  return (
    <section id="hero" className="container mx-auto mt-8 px-4">
      <div
        className="bg-cover bg-center h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-lg shadow-lg mb-8 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2024/01/MSFT_M365_Jan_10_Blog-1_240111_V03-1024x576.webp')",
        }}
      >
        {/* Add any call-to-action text or buttons here */}
      </div>
    </section>
  );
}

export default Hero;