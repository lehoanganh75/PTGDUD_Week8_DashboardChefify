import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <img src="./images/chefify.png" alt="Logo" className="h-10" />
                <div className="flex items-center rounded-lg">
                    <img
                        src="./images/Search.png"
                        alt="Search"
                        className="h-5 w-5 mx-2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="What would you like to cook?"
                        className="w-[400px] pl-2 pr-4 py-4 rounded-lg focus:outline-none text-gray-300"
                    />
                </div>
            </div>
            <nav className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-pink-500">Recipes</a>
                <a href="#" className="text-gray-700 hover:text-pink-500">Ingredients</a>
                <a href="#" className="text-gray-700 hover:text-pink-500">Occasions</a>
                <a href="#" className="text-gray-700 hover:text-pink-500">About Us</a>
            </nav>
            <div className="flex space-x-4">
                <button className="bg-pink-100 text-pink-700 px-4 py-2 rounded hover:bg-pink-300">
                    Login
                </button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700">
                    Subscribe
                </button>
            </div>
        </header>
    );
};

export default Header;