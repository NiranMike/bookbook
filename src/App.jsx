import Cursor from "./components/Cursor"
import Explore from "./components/Explore"
import Hero from "./components/Hero"
import Insights from "./components/Insights"
import Navbar from "./components/Navbar"
import Pillar from "./components/Pillar"
import Principles from "./components/Principles"
import Team from "./components/Team"


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
        <Principles />
        <Team />
        <Insights />
      </div>
    </>
  )
}

export default App
