import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pillar from "./components/Pillar"


function App() {

  return (
    <>
      <div className="relative ">
        <div className="h-[20px] absolute inset-0 w-[20px] bg-[#F2BD9E] rounded-[50%]" />
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
