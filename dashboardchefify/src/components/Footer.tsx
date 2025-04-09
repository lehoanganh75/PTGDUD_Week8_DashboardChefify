import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-300 mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-800 text-sm rounded-l-md py-2 px-3 focus:outline-none w-full"
            />
            <button className="bg-[#e11d48] text-white text-sm font-semibold rounded-r-md py-2 px-4 hover:bg-[#be185d] focus:outline-none">
              Send
            </button>
          </div>
        </div>

        {/* Learn More Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Learn More</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-white">Our Cooks</a></li>
            <li><a href="#" className="hover:text-white">See Our Features</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Recipes Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recipes</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-white">What To Cook This Week</a></li>
            <li><a href="#" className="hover:text-white">Pasta</a></li>
            <li><a href="#" className="hover:text-white">Dinner</a></li>
            <li><a href="#" className="hover:text-white">Healthy</a></li>
            <li><a href="#" className="hover:text-white">Vegetarian</a></li>
            <li><a href="#" className="hover:text-white">Vegan</a></li>
            <li><a href="#" className="hover:text-white">Christmas</a></li>
          </ul>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-white">Gift Subscription</a></li>
            <li><a href="#" className="hover:text-white">Send Us Feedback</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-8 border-t border-gray-700 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center">
          <img src="/images/chefify.png" alt="Chefify Logo" className="h-6 mr-2" /> {/* Replace with your logo path */}
          <span>© 2023 Chefify Company</span>
        </div>
        <div>
          <a href="#" className="hover:text-white mr-4">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;