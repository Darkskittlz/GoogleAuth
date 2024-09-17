import '../App.css'
import Navbar from '../components/Navbar';
import EmblaCarousel from '../components/EmblaCarousel';
import StarComponent from '../components/StarRating.jsx';
import StarTest from '../components/StarTest.jsx';


const OPTIONS = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = ({ credentialResponse, theme, toggleTheme }) => {
  const mongoFunction = async () => {
    try {
      let results = await fetch("/.netlify/functions/get_movies").then(response => response.json());
      results.forEach(result => {
        const listItem = document.createElement("li");
        listItem.innerText = result.title;
        document.getElementById("movies").appendChild(listItem);
      })
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Navbar credentialResponse={credentialResponse} theme={theme} toggleTheme={toggleTheme} />
      <div className="w-full mt-36 desktop:mt-0 justify-center flex desktop:mb-0 desktop:h-full">
        <div className='w-1/2 md:mt-0 mb-0 '>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
      <div className="items-center flex backdrop-blur flex-col">
        <div className="w-full px-4 sm:w-3/4 rounded-xl desktop:h-full backdrop-blur">
          <h2 className="text-2xl my-4 text-white">Homepage </h2>
          <h2>MongoDB with Netlify Functions</h2>
          <ul id="movies"></ul>
        </div>
        <div className="flex flex-col backdrop-blur z-10">
          <h1 className="mt-14 text-4xl">Feed Cards</h1>
          <div className="flex mt-14 items-center justify-center">
            <img className="w-1/2" src="/men_logo2.png" alt="Sukuna" />
            <div className="w-1/2 items-center justify-center">
              <h2>lorem test test test test</h2>
              <input />
              <div className="flex flex-row">
                <main className="flex flex-row flex-shrink-0">
                  <StarTest />
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
