import gsap from "gsap"
import { ScrollTrigger, Power1 } from "gsap/all"
import { useEffect } from "react"
import Card from "./Card"

const Pillar = () => {
    gsap.registerPlugin(ScrollTrigger)
    var timeline1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".pillar--text--anim",
            start: "+=400",
            end: "+=40",
      
        }
    })

    useEffect(() => {
        timeline1.addLabel("start")
        .to(".pillar--text--anim", {
        translateY: .5,
        opacity: 0.9,
        scrub:1,
        ease: Power1.easeInOut,
        stagger: {
            amount: .6,
            from: "bottom"
        }
        })
    },[timeline1])
    
  
  return (
    <div className="my-[9rem]">
        <div className="grid gap-2 justify-center mx-auto lg:gap-0 mb-[7rem] lg:grid-cols-2">
            <div className="pillar--text--anim 2xl:flex lg:text-start  translate-y-[8rem] opacity-0">
                <p className="diff--font text-[#190C39] w-[35rem] leading-[2rem]  lg:max-w-[550px] lg:leading-[3.5rem] 2xl:leading-[4.5rem] max-w-[300px] text-[1.5rem] 2xl:text-[3.5rem] lg:text-[2.5rem]">Our pillars for <span className="font-bold poppin--font">strategic success</span></p>
            </div>
            <div className="pillar--text--anim lg:max-w-[700px] max-w-[300px]  lg:text-start 2xl:max-w-[950px] translate-y-[8rem] opacity-0">
                <p className="text-[#75727D] text-[1.2rem] lg:text-[1.5rem]">Realise your business&apos;s efficiency and achieve success by optimising and harmonising the four pillars of excellence: price, brand, product, and customer. Building a thoughtful strategy for each - and aligning them - will refine your overall marketing strategy, enhance the customer journey, and boost profitability.</p>
            </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
            <Card title={"Price"} description={"Determine the optimal revenue or profit-maximizing prices for your products or services by analyzing market dynamics, competition, and customer price sensitivity."} image={"book.png"} />
            <Card title={"Brand"} description={"Craft a unique brand identity, positioning, and messaging that aligns with your pricing strategy. Strengthen brand perception to support premium pricing, foster customer loyalty, and differentiate yourself in the market."} image={"brand.png"} />
            <Card title={"Product"} description={"Understand customers' needs and preferences to inform product development decisions and pricing strategies. Identify the most valuable features that drive customer satisfaction and willingness to pay."} image={"product.png"} />
            <Card title={"Customer"} description={"Harness the power of data-driven customer segmentation to fuel our strategic pillars of pricing, branding, and product development, enabling precise targeting and impactful decision-making."} image={"customer.png"} />
        </div>
    </div>
  )
}

export default Pillar