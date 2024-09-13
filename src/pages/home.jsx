import '../App.css'
import Navbar from '../components/Navbar';
import EmblaCarousel from '../components/EmblaCarousel';


const OPTIONS = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = ({ credentialResponse, theme, toggleTheme }) => {
  return (
    <>
      <Navbar credentialResponse={credentialResponse} theme={theme} toggleTheme={toggleTheme} />
      <div className="w-full justify-center flex desktop:mb-0 desktop:h-full">
        <div className='w-1/2 mt-12 md:mt-0 mb-0 md:-mb-28'>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
      <div className="items-center flex flex-col">
        <div className="w-full px-4 sm:w-3/4 rounded-xl desktop:h-full backdrop-blur">
          <h2 className="text-2xl my-4 text-white">Homepage </h2>
          <p className='indent-4 text-left text-white'>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
        </div>
      </div>
    </>
  )
}

export default Home;
