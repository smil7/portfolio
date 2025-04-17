import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About'
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <> 
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} 
      <div className={`min-h-screen transtition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity:0"}
        bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
      </div>
    </>
  )
}

export default App
