import React from 'react';

const recipes = [
    {
        title: 'Italian-style tomato',
        description: '',
        time: '15 minutes',
        image: './images/Italian-style tomato.png', // Replace with actual image URLs
    },
    {
        title: 'Spaghetti with vegetables',
        description: '',
        time: '15 minutes',
        image: './images/Vegetable and shrimp spaghetti.png', // Replace
    },
    {
        title: 'Lotus delight salad',
        description: '',
        time: '25 minutes',
        image: './images/Lotus delight salad.png', // Replace
    },
    {
        title: 'Snack cakes',
        description: '',
        time: '25 minutes',
        image: './images/Snack cakes.png', // Replace
    },
    {
        title: 'Salad with cabbage and shrimp',
        description: '',
        time: '12 minutes',
        image: './images/Salad with cabbage.png', // Replace
    },
    {
      title: 'Salad of cove beans, shrimp and potatoes',
      description: '',
      time: '20 minutes',
      image: './images/Bean, shrimp, and potato salad.png', // Replace
    },
    {
        title: 'Sunny-side up fried egg',
        description: '',
        time: '5 minutes',
        image: './images/Sunny-side up fried eggs.png', // Replace
    },
    {
        title: 'Lotus delight salad',
        description: '',
        time: '25 minutes',
        image: './images/Lotus delight salad_01.png', // Replace
    },
];

const Content = () => {
    return (
        <div className="bg-white p-30 ">
            <h2 className="text-3xl font-bold mb-4 text-[#F44B87FF] text-center">This Summer Recipes</h2>
            <p className="text-gray-600 mb-8 text-center">We have all your Independence Day sweets covered.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {recipes.slice(0, 4).map((recipe, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                        <div className="p-8">
                           <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold text-gray-900">{recipe.title}</h3>
                           <button type='button' className='hover:cursor-pointer'>
                                <img src="./images/Icon.png" alt="" />
                           </button>
                           </div>
                           <br />
                           <p className="text-sm text-[#F44B87FF] p-2 w-25 bg-[#FEF0F5FF] rounded-lg">{recipe.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold mb-4 text-[#F44B87FF] text-center">Recipes With Videos</h2>
            <p className="text-gray-600 mb-8 text-center">Cooking Up Culinary Creations with Step-by-Step Videos</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {recipes.slice(4).map((recipe, index) => (
                   <div key={index} className="rounded-lg overflow-hidden shadow-md">
                   <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                   <div className="p-8">
                      <div className='flex justify-between'>
                       <h3 className="text-lg font-semibold text-gray-900">{recipe.title}</h3>
                      <button type='button' className='hover:cursor-pointer'>
                           <img src="./images/Icon.png" alt="" />
                      </button>
                      </div>
                      <br />
                      <p className="text-sm text-[#F44B87FF] p-2 w-25 bg-[#FEF0F5FF] rounded-lg">{recipe.time}</p>
                   </div>
               </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
