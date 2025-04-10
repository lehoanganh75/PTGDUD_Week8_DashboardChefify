import React from 'react';

const editorsPicks = [
    {
        title: 'Stuffed sticky rice ball',
        author: 'Jennifer King',
        description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
        time: '34 minutes',
        image: './images/Selection.png', // Replace with actual path
    },
    {
        title: 'Strawberry smoothie',
        author: 'Matthew Martinez',
        description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
        time: '40 minutes',
        image: './images/Selection (1).png', // Replace with actual path
    },
    {
        title: 'Latte Art',
        author: 'Sarah Hill',
        description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte....',
        time: '19 minutes',
        image: './images/Selection (2).png', // Replace with actual path
    },
    {
        title: 'Butter fried noodles',
        author: 'Julia Lopez',
        description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal....',
        time: '16 minutes',
        image: './images/Selection (3).png', // Replace with actual path
    },
];

const EditorsPick = () => {
    return (
        <div className="bg-white py-12"> {/* Changed p-30 to py-12 for better vertical spacing */}
            <h2 className="text-3xl font-bold mb-4 text-[#F44B87FF] text-center">Editor's pick</h2>
            <p className="text-gray-600 mb-8 text-center">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added max-width and horizontal padding for better layout on larger screens */}
                {editorsPicks.map((pick, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md bg-gray-50 flex flex-col md:flex-row">
                        <img src={pick.image} alt={pick.title} className="w-full md:w-1/2 h-48 object-cover" />
                        <div className="p-4 flex flex-col justify-between">
                            <div>
                              <div className='flex justify-between'>
                              <h3 className="text-lg font-semibold text-gray-900">{pick.title}</h3>
                              <img src="./images/Icon.png" alt="" />
                              </div>
                                <p className="text-sm text-gray-500 mb-2">{pick.time}</p>
                                <div className='flex items-center py-2'> {/* Added items-center for vertical alignment */}
                                    <img src="./images/avatar.png" alt="" className="w-12 h-12 rounded-full mr-2" /> {/* Added styling for avatar */}
                                    <p className="text-xs font-italic text-gray-600 mb-2">By {pick.author}</p>
                                </div>
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