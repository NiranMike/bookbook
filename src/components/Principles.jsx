/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import gsap from "gsap"
import { ScrollTrigger, Power1 } from "gsap/all"
import { useEffect } from "react"
const Principles = () => {

    gsap.registerPlugin(ScrollTrigger);
    var timeline1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".principle--header",
            start: "+=2450",
            end: "+=40",
      
        }
    })

    var timeline2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".principle--header",
            start: "+=2850",
            end: "+=40",
      
        }
    })

    useEffect(() => {
        timeline1.addLabel("start")
        .to(".principle--header", {
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

    useEffect(() => {
        timeline2.addLabel("start")
        .to(".table-anim", {
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
        
    }, [timeline2])

  return (
    <div className="lg:px-[130px] px-[20px] py-[150px] space-y-[7rem]">
        <div className='grid gap-10 lg:grid-cols-2 '>
            <h2 className='flex opacity-0 translate-y-[60px] principle--header flex-row gap-3 lg:flex-col 2xl:text-center diff--font text-2xl lg:text-4xl text-[#190C39]'>The boobook <span className='poppin--font font-semibold'>principles</span></h2>
            <div className='flex flex-col principle--header gap-9 opacity-0 translate-y-[60px]'>
                <p className='text-[#75727D] text-[1.2rem]'>At the heart of boobook, there is a passionate and dedicated team aligned on values and work ethic. These are fundamental guides that shape our culture and help us tackle challenges together.</p>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className="py-3 justify-center text-center  rounded-full hover:bg-[#3e2c6c] cursor-pointer  flex items-center gap-2 group  font-bold px-4 bg-[#190C39] text-[#B999FC]">The world of boobook <span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></div>
                    <div className="py-3 justify-center text-center  rounded-full hover:bg-[#bfa5f7] cursor-pointer  flex items-center gap-2 group  font-bold px-4 bg-[#B999FC] text-[#190C39] ">Join us <span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></div>
                </div>
            </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 ">
            <div className="flex  lg:gap-[3rem] table-anim opacity-0 translate-y-[60px]">
                <div className="flex flex-col gap-6">
                    <h2 className="diff--font text-center text-[1.3rem] lg:text-[2rem] text-[#190C39]">Collaborative spirit</h2>
                    <p className="text-[#75727D] text- text-[1rem]">Whether it's within our team or with our clients, partners or suppliers, we foster an environment of co-creation, knowledge sharing, and open dialogue. We thrive on asking questions and challenging one another because we know that together, we achieve smarter and more effective solutions.</p>
                </div>
                <div className="h-full w-1 bg-[#75727D]" />
            </div>
            <div className="flex lg:gap-[3rem] table-anim opacity-0 translate-y-[60px]">
                <div className="flex flex-col gap-6">
                    <h2 className="diff--font text-[1.3rem] lg:text-[2rem] text-center text-[#190C39]">Deep expertise</h2>
                    <p className="text-[#75727D] text-[1rem]">With over 20 years of industry experience, our talented professionals bring a wealth of knowledge and expertise to every project. We stay at the forefront of the latest data analysis techniques and industry trends to deliver exceptional results.</p>
                </div>
                <div className="h-full w-1 bg-[#75727D]" />
            </div>
            <div className="flex join-anim gap-[3rem] table-anim opacity-0 translate-y-[60px]">
                <div className="flex flex-col gap-6">
                    <h2 className="diff--font text-[1.3rem] lg:text-[2rem] text-center text-[#190C39]">Personalised approach</h2>
                    <p className="text-[#75727D] text-[1rem]">While some business questions may be similar, each business is unique. We are dedicated to comprehending your specific business requirements and developing customised solutions that will fuel growth and success.</p>
                </div>
                <div className="h-full w-1 bg-[#75727D]" />
            </div>
        </div>
    </div>
  )
}

export default Principles