import gsap from "gsap";
import { Power1, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)
  var tl = gsap.timeline()
  var timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta-btn",
      start: "top top",
      end: "+=200",
      
    }
  })
  useEffect(() => {
    
    tl.to(".anim-text", {
      scaleY: .8,
      y: 15,
      opacity: 0.9,
      ease: Power1.easeInOut,
      stagger: {
        amount: 1.5,
        from: "start"
      }
    }).to(".hero--image", {
      x: 10,
      opacity: 0.9,
      ease: Power1.easeInOut,
      duration: .8
    }).to(".para", {
      translateY: .5,
      opacity: 0.9,
      ease: Power1.easeInOut,
      stagger: {
        amount: .5,
        from: "start"
      }
    })
    
  }, [tl])
  
  useEffect(() =>{
    timeline.addLabel("start")
    .to(".cta-btn", {
      translateY: .5,
      opacity: 0.9,
      scrub:1,
      ease: Power1.easeInOut,
      stagger: {
        amount: .5,
        from: "start"
      }
    })
  },[timeline])

  
  return (
    <section className="grid grid-cols-2 mb-6 overflow-y-hidden overflow-x-hidden gap-10 pt-[80px] ">
        <div className=" space-y-[6rem]">
            <p className="text-[4rem] ">
              <h1 className="inline-block leading-3 ">
                <div className="inline-flex gap-2">
                  <div className="word flex">
                  <p className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">G</p>
                  <p className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">r</p>
                  <p className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">o</p>
                  <p className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">w </p>
                </div>
                <div className="word flex">
                  <p className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font"> y</p>
                  <p className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">o</p>
                  <p className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">u</p>
                  <p className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">r </p>
                </div>
                <div className="word flex">
                  <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font"> b</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">u</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">s</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">i</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">n</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">e</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">s</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">s </div>
                </div>
                
                </div>
                
              </h1>
              <h1 className="flex flex-col gap-10">
                <div className="flex gap-2">
                    <div className="word flex">
                    <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font"> w</div>
                    <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">i</div>
                    <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">t</div>
                    <div className="text-[#190C39] opacity-0 anim-text text-[3.5rem]   leading-3 diff--font">h </div>
                  </div>
                    <div className="word flex">
                      <div className="text-[#190C39] opacity-0 anim-text text-[4rem]  font-semibold poppin--font leading-3"> c</div>
                      <div className="text-[#190C39] opacity-0 anim-text text-[4rem]  font-semibold poppin--font leading-3">o</div>
                      <div className="text-[#190C39] opacity-0 anim-text text-[4rem]  font-semibold poppin--font leading-3">n</div>
                      <div className="text-[#190C39] opacity-0 anim-text text-[4rem]  font-semibold poppin--font leading-3">s</div>
                      <div className="text-[#190C39] opacity-0 anim-text text-[4rem]  font-semibold poppin--font leading-3">u</div>
                      <div className="text-[#190C39] opacity-0 anim-text text-[4rem]  font-semibold poppin--font leading-3">m</div>
                      <div className="text-[#190C39] opacity-0 anim-text text-[4rem]  font-semibold poppin--font leading-3">e</div>
                      <div className="text-[#190C39] opacity-0 anim-text text-[4rem]  font-semibold poppin--font leading-3">r</div>
                      <div className="text-[#190C39] opacity-0 anim-text text-[4rem]  font-semibold poppin--font leading-3">-</div>

                    </div>
                    
                </div>
                
                
                <div className="flex gap-2">
                  <div className="word flex">
                    <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">d</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">r</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">i</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">v</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">e</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">n </div>
                  </div>
                  <div className="word flex">
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3"> i</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">n</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">s</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">i</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">g</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">t</div>
                  <div className="text-[#190C39] opacity-0 anim-text text-[4rem] poppin--font  font-semibold leading-3">s</div>
                  </div>
                
                </div>
              </h1>
            </p>
            <div className="para translate-y-14 opacity-0">
              <p className="text-[#75727D]   text-[1.2rem]">Unlock the full potential of your business with data-driven consultancy. Employ a powerful combination of data interpretation and strategic expertise to make informed decisions. Optimise pricing, brand equity, product development and customer targeting while driving sustainable growth in today&apos;s competitive market.</p>
            </div>
            <div className="flex gap-12 cta-btn translate-y-20">
              <button className="px-6 py-3 font-bold rounded-3xl text-[#B999FC] hover:bg-[#2b1f4b] transition-all duration-200 bg-[#190C39] flex items-center gap-2">Explore our expertise <span className="text-[1.2rem] ">&#8594;</span></button>
              <button className="px-6 py-3 font-bold rounded-3xl text-[#190C39] hover:bg-[#c7affc] bg-[#B999FC] transition-all duration-200 flex items-center gap-2">Why work with us <span className="text-[1.2rem]">&#8594;</span></button>
            </div>
        </div>
        <div className="hero--image opacity-0 translate-x-[50rem]">
          <img src="/hero.webp" alt="" />
        </div>
    </section>
  )
}

export default Hero