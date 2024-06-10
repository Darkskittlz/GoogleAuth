import '../App.css'
import viteLogo from '/vite.svg'
import { ParticleBackground } from './ParticleBackground'

const Home = () => {
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
