import React from "react";

function MainContent() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="row">
        {/* Blog Posts Section */}
        <main className="col-lg-8 mb-8">
          {/* Search Bar */}
          <section id="search-bar" className="mb-6">
            <input
              type="text"
              className="form-control w-full p-2 border rounded-md"
              placeholder="Search articles..."
            />
          </section>

          {/* Blog Post Previews with Social Media Sharing */}
          <section id="portfolio-post">
            <BlogPost
              title="Portfolio Website"
              description="This blog post discusses how to create a personal portfolio website that showcases your skills, projects, and achievements as a web developer. Learn the best practices and tools for building a professional portfolio."
            />
          </section>

          <section id="ecommerce-post">
            <BlogPost
              title="E-Commerce Website"
              description="In this post, we dive into building a fully functional e-commerce website, focusing on essential features like product listings, shopping cart integration, and secure payment systems. Explore how to create a seamless shopping experience."
            />
          </section>
        </main>
      </div>
    </div>
  );
}

// Component for individual blog posts
function BlogPost({ title, description }) {
  return (
    <div className="bg-white p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 text-justify">{description}</p>
      <button className="btn btn-primary mb-3">Read More</button>
      <div className="flex space-x-4">
        <a
          href="https://twitter.com/intent/tweet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 no-underline"
        >
          Share on Twitter
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 no-underline"
        >
          Share on Facebook
        </a>
      </div>
    </div>
  );
}

export default MainContent;