// App.tsx
import React from 'react';
import Header from './components/Header';
import ChefifyInspired from './components/ChefifyInspired';
import Footer from "./components/Footer"
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <ChefifyInspired />
      <Footer />
    </div>
  );
}

export default App;