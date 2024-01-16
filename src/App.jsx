import Cursor from "./components/Cursor"
import Explore from "./components/Explore"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pillar from "./components/Pillar"


function App() {

  return (
    <>
      <div className="relative ">
        <Cursor />
        <Navbar />
        <div className="px-[130px]">
          <Hero />
          <Pillar />
        </div>
        <Explore />
        
      </div>
    </>
  )
}

export default App
