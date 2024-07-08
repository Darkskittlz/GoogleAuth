import '../App.css'
import viteLogo from '/vite.svg'

const Home = () => {
  return (
    <>
      <div className="p-12 border rounded-xl items-center flex flex-col">
        <img src={viteLogo} className="w-full pb-4" alt="Vite logo" />
        <h2 className="text-2xl">Home</h2>
      </div>
    </>
  )
}

export default Home;
