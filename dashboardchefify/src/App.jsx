// App.tsx
import React from 'react';
import Header from './components/Header';

import Footer from "./components/Footer"
import RecipeOfTheDay from './components/RecipeOfTheDay ';
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <RecipeOfTheDay />
      <Footer />
    </div>
  );
}

export default App;