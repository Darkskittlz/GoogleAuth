import '../App.css'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import { ParticleBackground } from './ParticleBackground'

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <ParticleBackground />
      <div className="container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <p>Home</p>
      </div>
    </>
  );
};
export default Home;
