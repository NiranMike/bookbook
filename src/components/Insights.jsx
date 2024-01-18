import InsightCard from "./InsightCard"

const Insights = () => {
  return (
    <div className="mx-[130px] py-[150px] 2xl:max-w-[1500px] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:mx-auto  space-y-[4rem]">
        <div className='grid grid-cols-2 justify-center mx-auto '>
            <h2 className='flex flex-col diff--font text-4xl text-[#190C39]'>Insights and <span className='poppin--font font-semibold'>inspiration</span></h2>
            <div className='flex flex-col gap-9'>
                <p className='text-[#75727D] text-[1.2rem]'>Your source of valuable knowledge and inspiration on how to optimise your business with the right pricing, product, brand and customer strategies.</p>
                <div className='flex gap-4'>
                    <div className="py-3  rounded-full hover:bg-[#3e2c6c] cursor-pointer  flex items-center gap-2 group  font-bold px-4 bg-[#190C39] text-[#B999FC]">View all insights <span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></div>
                </div>
            </div>
        </div>
        
        <div className="py-[180px] 2xl:justify-center 2xl:mx-auto gap-5 grid lg:grid-cols-3">
          <InsightCard img={"im1.png"} mins={6} words={"Demystifying AI: How to use (and not use) artificial intelligence for insights creation and strategic consultancy"} />
          <InsightCard img={"im2.png"} mins={3} words={"Crafting a successful pricing strategy: Where strategy and consumer insights meet"} />
          <InsightCard img={"im3.png"} mins={3} words={"How businesses & customers impact each other to make more sustainable choices"} />
        </div>
    </div>
  )
}

export default Insights