import { useState } from 'react'
import './index.css'
import Header from './components/Header'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
            <Header />
            <main className="p-4">
                <h1 className="text-2xl font-bold text-center">Welcome to Cheffy!</h1>
                <p className="mt-4 text-center text-gray-600">
                    Discover delicious recipes and ingredients for every occasion.
                </p>
            </main>
        </div>
  )
}

export default App
