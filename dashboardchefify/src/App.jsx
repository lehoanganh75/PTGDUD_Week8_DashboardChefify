// App.tsx
import React from 'react';
import Header from './components/Header';

import Footer from "./components/Footer"
import RecipeOfTheDay from './components/RecipeOfTheDay ';
import Recipe from './components/Content';
import EditorsPick from './components/EditorPicks';
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <RecipeOfTheDay />
      <Recipe />
      <EditorsPick />
      <Footer />
    </div>
  );
}

export default App;