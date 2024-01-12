/* eslint-disable react/prop-types */
import gsap from "gsap"
import { ScrollTrigger, Power1 } from "gsap/all"
import { useEffect } from "react"

const Card = ({ title, image, description }) => {
  
  gsap.registerPlugin(ScrollTrigger)
    var timeline1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".pillar--card--anim",
            start: "+=600",
            end: "+=40",
      
        }
    })

    useEffect(() => {
        timeline1.addLabel("start")
        .to(".pillar--card--anim", {
        translateY: .5,
        opacity: 0.9,
        scrub:1,
        ease: Power1.easeInOut,
        stagger: {
            amount: 2,
            from: "bottom"
        }
        })
    },[timeline1])

  return (
    <div className="bg-[#F2BD9E] pillar--card--anim translate-y-[5rem] opacity-0 text-[#2b1f4b] space-y-5 px-8 py-8 rounded-3xl">
      <div className="flex gap-3 items-center">
        <img src={image} className="w-[90px] h-[90px]" alt="" />
        <p className="text-[2rem] diff--font">{title}</p>
      </div>
      <p className="font-medium">
        {description}
      </p>
      <div>
        <button className=" group  font-bold rounded-3xl text-[#2b1f4b] transition-all duration-200  flex items-center gap-2">More on price<span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></button>
      </div>
    </div>
  )
}

export default Card