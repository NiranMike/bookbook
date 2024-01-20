/* eslint-disable react/prop-types */

const ExploreCard = ({image}) => {
  return (
    <div className="lg:w-[1200px] w-[700px] relative text-[#2b1f4b]  cursor-grab selection:cursor-grabbing px-[10px] lg:px-[100px]">
        <img className=" object-cover transition-all ease-in-out duration-200 hover:scale-95 h-[500px] lg:h-[700px] rounded-3xl" src={image} alt="" />
        <div className="bg-[rgb(237,185,155)] transition-all ease-in-out duration-200 cursor-pointer hover:bg-[#B999FC] p-5 space-y-3 rounded-xl absolute bottom-10 left-[5rem] lg:left-[10rem] ">
          <div className="p-2 border lg:w-[65px] font-semibold rounded-md border-[#2b1f4b] ">Brand</div>
          <p className="diff--font text-[1.5rem] lg:text-[2.5rem] w-[350px] lg:w-[700px] leading-[1.7rem] lg:leading-[2.5rem] ">How an automotive company optimised their advertising messaging: The importance brand alignment when launching a new product</p>
          <div>
            <button className=" group  font-bold rounded-3xl text-[#2b1f4b] transition-all duration-200  flex items-center gap-2">More on price<span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></button>
          </div>
        </div>
    </div>
  )
}

export default ExploreCard