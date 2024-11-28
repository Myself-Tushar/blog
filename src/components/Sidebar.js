import React from 'react';

function Sidebar() {
  return (
    <aside id="sidebar" className="col-lg-4">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 text-center">
        <h3 className="text-lg font-semibold mb-3">About the Author</h3>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/263/549/small_2x/education-logo-open-book-dictionary-textbook-or-notebook-with-graduation-hat-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-free-vector.jpg"
          alt="Author"
          className="rounded-full mx-auto mb-4 w-20 h-20"
        />
        <p className="text-gray-700">Hi, I’m Tushar Singha. Follow me for insights on tech and Web Development.</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="https://x.com/Tech_TSR" className="text-blue-700 hover:text-blue-800 no-underline">Twitter</a>
          <a href="https://www.linkedin.com/in/tushar-singha-35a6b1334/" className="text-blue-700 hover:text-blue-800 no-underline">LinkedIn</a>
          <a href="https://www.instagram.com/myself_tsr/" className="text-blue-700 hover:text-blue-800 no-underline">Instagram</a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;