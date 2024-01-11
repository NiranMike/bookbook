import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pillar from "./components/Pillar"


function App() {

  return (
    <>
      <div className="relative ">
        <Navbar />
        <div className="px-[130px]">
          <Hero />
          <Pillar />
        </div>
        
      </div>
    </>
  )
}

export default App
