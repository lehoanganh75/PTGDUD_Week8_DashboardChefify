import React from "react";

const RecipeCard = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="./images/Image 73.png"
          alt="Food background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute z-10 max-w-md mx-auto p-8 ml-20 h-screen flex flex-col justify-center">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-[#FFC415FF] text-[#5D4600FF] py-2 px-10 rounded-lg text-sm font-semibold">
            Recipe of the day
            </div>
          <section className="mb-8 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#F44B87]">Salad Caprese</h3>
              <p className="text-gray-600">
                Classic Italian Salad Caprese - ripe tomatoes, fresh mozzarella, herbs, olive oil,
                and balsamic vinegar create a refreshing dish for lunch or appetizer.
              </p>
            </div>
          </section>
          <section className="flex flex-col items-center mt-8">
            <img src="./images/avatar.png" alt="Salad Caprese Avatar" className="mb-2 rounded-full w-16 h-16 object-cover" />
            <h4 className="font-Manrope text-gray-400 mb-4">Salad Caprese</h4>
            <button className="px-4 py-2 bg-[#F44B87] text-white rounded hover:bg-[#F44B44] transition-colors">
              View now →
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;