import BusinessDecision from "./components/BusinessDecision"
import Cursor from "./components/Cursor"
import Explore from "./components/Explore"
import Footer from "./components/Footer"
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
        <div className="px-[10px] lg:px-[20px] xl:px-[130px]">
          <Hero />
          <Pillar />
        </div>
        <Explore />
        <Principles />
        <Team />
        <Insights />
        <BusinessDecision />
        <Footer />
      </div>
    </>
  )
}

export default App
