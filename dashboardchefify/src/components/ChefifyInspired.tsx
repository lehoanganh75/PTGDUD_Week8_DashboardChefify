import React from 'react';

function ChefifyInspired() {
  return (
    <div className="bg-gray-100 font-sans antialiased">
      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <div className="text-xl font-bold text-red-500">Chefify</div>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full flex items-center px-4 py-2 mr-4">
              <input
                type="text"
                placeholder="What would you like to cook?"
                className="bg-transparent border-none outline-none placeholder-gray-500 w-48 sm:w-64"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-6a7 7 0 10-14 0 7 7 0 0014 0z"
                />
              </svg>
            </div>
            <nav className="hidden lg:flex space-x-6 text-gray-700 font-semibold">
              <a href="#" className="hover:text-red-500">
                What to cook
              </a>
              <a href="#" className="hover:text-red-500">
                Recipes
              </a>
              <a href="#" className="hover:text-red-500">
                Ingredients
              </a>
              <a href="#" className="hover:text-red-500">
                Occasions
              </a>
              <a href="#" className="hover:text-red-500">
                About Us
              </a>
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-700 font-semibold hover:text-red-500">
                Login
              </button>
              <button className="bg-red-500 text-white font-semibold rounded-full px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1">
                Subscribe
              </button>
            </div>
            {/* Mobile Menu (You'd typically implement this with state) */}
            <div className="lg:hidden">
              <button className="text-gray-600 hover:text-red-500 focus:outline-none">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto mt-8 flex px-4 lg:px-8">
        <aside className="w-full lg:w-96 pr-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-sm inline-block mb-4">
              Recipe of the day
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Salad Caprese
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
              herbs, olive oil, and balsamic vinegar create a refreshing dish
              for lunch or appetizer.
            </p>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Author"
                className="rounded-full w-10 h-10 mr-2 object-cover"
              />
              <span className="font-semibold text-gray-700">
                Salad Caprese
              </span>
            </div>
            <a
              href="#"
              className="bg-red-500 text-white font-semibold rounded-md px-6 py-3 inline-flex items-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
            >
              View now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </aside>

        <main className="flex-1 overflow-hidden rounded-lg shadow-md">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb644e51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            alt="Cooking Scene"
            className="w-full h-full object-cover"
          />
        </main>
      </div>

      <footer className="bg-gray-200 py-8 mt-8">
        <div className="container mx-auto px-4 lg:px-8 text-center text-gray-600">
          <p>&copy; 2023 Chefify. All rights reserved.</p>
          {/* Add more footer links or information here */}
        </div>
      </footer>
    </div>
  );
}

export default ChefifyInspired;