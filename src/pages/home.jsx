import '../App.css'
import Navbar from '../components/Navbar';

const Home = ({ credentialResponse, theme, toggleTheme }) => {
  return (
    <>
      <Navbar credentialResponse={credentialResponse} theme={theme} toggleTheme={toggleTheme} />
      <div className="items-center flex flex-col">
        <div className="w-1/2 rounded-xl h-full p-20 backdrop-blur border">
          <h2 className="text-2xl text-white">Homepage </h2>
          <p className='text-white'>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
        </div>
      </div>
    </>
  )
}

export default Home;
