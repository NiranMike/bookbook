import gsap from "gsap"
import { ScrollTrigger, Power1 } from "gsap/all"
import { useEffect } from "react"
import ExploreCard from "./ExploreCard";


const Explore = () => {

    const imgs = [
        "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65a008009797ea7fdeaa3588_boobook_case%20study_automotive%20company%20(1).png",
        "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65a00b7551c536b263093f4b_boobook_case%20study_center%20parcs%20(2)%20(1)-p-1080.png",
        "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/6549099e3a5ea8001b1eb3ad_bench-accounting-C3V88BOoRoM-unsplash-scaled-p-1080.jpeg",
        "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/6549099dce49ac6ceca8b106_customer-loyalty-card-case-study-p-1080.png",
        "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/6548cb540bff4c77b4872932_alexandre-chambon-aapSemzfsOk-unsplash-1-scaled-p-1080.jpeg",
        "https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/6549099d1925ca90ff294448_friends_toasting_at_party_2015-p-1080.jpeg"
    ]
 

    gsap.registerPlugin(ScrollTrigger);
    var timeline1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".explore--text--anim",
            start: "+=1350",
            end: "+=40",
      
        }
    })

    useEffect(() => {
        timeline1.addLabel("start")
        .to(".explore--text--anim", {
        translateY: .5,
        opacity: 0.9,
        scrub:1,
        ease: Power1.easeInOut,
        stagger: {
            amount: .5,
            from: "bottom"
        }
        }).to(".explore--btn--anim", {
        translateY: .2,
        opacity: 0.9,
        scrub:1,
        ease: Power1.easeInOut,
        stagger: {
            amount: .5,
            from: "bottom"
        }
        }).addLabel("end")
    }, [timeline1])



    


  return (
    <div className="bg-[#190C39] overflow-x-hidden space-y-10 py-20 rounded-3xl">
        <div className="lg:px-[130px] px-[10px] md:px-[20px] grid md:grid-cols-2">
            <div className="text-[#B999FC] explore--text--anim diff--font opacity-0 translate-y-9 w-[350px] text-[3rem]">Explore our <span className="poppin--font">case studies</span></div>
            <div className="flex flex-col gap-9">
                <p className="text-white explore--text--anim font-medium opacity-0 translate-y-9 text-base">Discover stories of businesses that overcame challenges and achieved remarkable results thanks to our tailored and collaborative approach.</p>
                <div className="py-3 w-[285px] explore--btn--anim opacity-0 translate-y-[3rem] rounded-full hover:bg-[#baa2ec] cursor-pointer  flex items-center gap-2 group  font-bold px-4 bg-[#B999FC]">Explore our case studies <span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></div>
            </div>
        </div>
        {/* slider should be here */}
        <div className=" overflow-x-scroll ">
            <div draggable 
                
                className="  flex  overflow-x-visible">
                {imgs.map((img, i)=>{
                    return(
                        <div key={i}>
                            <ExploreCard image={img} />
                        </div>
                    )
                })}
            </div>
        </div>
        
        <div></div>
    </div>
  )
}

export default Explore