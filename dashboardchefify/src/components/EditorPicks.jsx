import React from 'react';

const editorsPicks = [
    {
        title: 'Stuffed sticky rice ball',
        author: 'Jennifer King',
        description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
        time: '34 minutes',
        image: './images/Selection.png', // Replace
    },
    {
        title: 'Strawberry smoothie',
        author: 'Matthew Martinez',
        description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
        time: '40 minutes',
        image: './images/Selection (1).png', // Replace
    },
    {
        title: 'Latte Art',
        author: 'Sarah Hill',
        description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte....',
        time: '19 minutes',
        image: './images/Selection (2).png', // Replace
    },
    {
        title: 'Butter fried noodles',
        author: 'Julia Lopez',
        description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal....',
        time: '16 minutes',
        image: './images/Selection (3).png', // Replace
    },
];

const EditorsPick = () => {
     return (
        <div className="bg-white p-30">
            <h2 className="text-3xl font-bold mb-4 text-[#F44B87FF] text-center">Editor's pick</h2>
            <p className="text-gray-600 mb-8 text-center">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {editorsPicks.map((pick, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md bg-gray-50 flex flex-col md:flex-row">
                        <img src={pick.image} alt={pick.title} className="w-full md:w-1/2 h-48 object-cover" />
                        <div className="p-4 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{pick.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">{pick.time}</p>
                                <p className="text-xs font-italic text-gray-600 mb-2">By {pick.author}</p>
                                <p className="text-gray-700">{pick.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditorsPick;
