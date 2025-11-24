import React from 'react';
import MainCover from './components/MainCover';
import Greeting from './components/Greeting';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Location from './components/Location';
import MoneyGift from './components/MoneyGift';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[800px] bg-white shadow-2xl min-h-screen flex flex-col font-sans">
        <MainCover />
        <Greeting />
        <Contact />
        <Gallery />
        <Location />
        <MoneyGift />

        <footer className="py-10 bg-gray-800 text-white text-center text-xs">
          <p>Thank you for being with us.</p>
          <p className="mt-2 opacity-50">
            Copyright © Chloe Kim :)
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
