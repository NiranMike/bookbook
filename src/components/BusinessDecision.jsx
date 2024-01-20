/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import gsap from "gsap"
import { ScrollTrigger, Power1 } from "gsap/all"
import { useEffect } from "react"


const BusinessDecision = () => {

  gsap.registerPlugin(ScrollTrigger);
  var timeline1 = gsap.timeline({
      scrollTrigger: {
          trigger: ".business--header",
          start: "+=6050",
          end: "+=40",
    
      }
  })

  useEffect(() => {
    timeline1.addLabel("start")
    .to(".business--header", {
    translateY: .5,
    opacity: 0.9,
    scrub:1,
    ease: Power1.easeInOut,
    stagger: {
        amount: .5,
        from: "bottom"
        },
    duration:1
    })
        
  }, [timeline1])

  return (
    <div className="bg-[#BA9AFD] business--header opacity-0 translate-y-12 mb-10 space-y-10 py-[60px] rounded-3xl lg:mx-[150px] flex flex-col justify-center items-center">
        <h2 className='flex flex-col diff--font text-center text-4xl text-[#190C39]'>Make better <span className='poppin--font font-semibold'>business decisions </span></h2>
        <div className="text-center flex justify-center items-center mx-[40px] lg:mx-[300px]">
            <p>Explore our success stories and learn how we've successfully helped different businesses. Or get in touch with us to schedule an introductory call.</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className="py-3  rounded-full hover:bg-[#3e2c6c] cursor-pointer  flex items-center gap-2 group  font-bold px-4 bg-[#190C39] text-[#B999FC]">View all insights <span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></div>
            <div className="py-3  rounded-full cursor-pointer  flex items-center gap-2 group  font-bold px-4 bg-[#190c3900] text-[#190C39] hover:bg-[#190C39] hover:text-[#B999FC] border transition-all duration-300 ease-in-out border-[#190C39]">View all insights <span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></div>
        </div>
    </div>
  )
}

export default BusinessDecision