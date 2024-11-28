import React from "react";

const Post = () => {
  return (
    <section id="posts" className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-semibold mb-3">Recent Post</h3>
      
      {/* Post Image */}
      <img
        src="https://letsreact.org/wp-content/uploads/2020/12/How-to-run-and-build-a-React-app.png"
        alt="Post"
        className="w-full rounded-lg mb-4"
      />
      
      {/* Post Title */}
      <h4 className="text-xl font-semibold mb-2">How to Build a React Application</h4>
      
      {/* Post Description */}
      <p className="text-gray-700 mb-4">
        In this post, we will learn the basics of React and how to create a simple application step-by-step. Whether you're new to React or looking to refresh your skills, this guide will walk you through the process from setup to deployment.
      </p>
      
      {/* Post Link */}
      <a
        href="#hero"
        className="text-blue-500 hover:text-blue-700"
      >
        Read More...
      </a>
    </section>
  );
};

export default Post;