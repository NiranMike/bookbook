/* eslint-disable react/prop-types */

const InsightCard = ({img, words, mins}) => {
  return (
    <div className="space-y-5  relative cursor-pointer transition-colors duration-200  ease-in-out py-10 px-5   rounded-2xl hover:border-[#2b1f4b]">
        <img className="bg-[#2b1f4b] object-cover h-[300px] w-[400px] rounded-lg" src={img} alt="" />
        <div className="flex gap-5 items-center">
            <p className="border rounded-lg border-[#2b1f4b] text-[#2b1f4b] font-bold py-2 px-4">customer</p>
            <p className="border rounded-lg border-[#2b1f4b] text-[#2b1f4b] font-bold py-2 px-4">price</p>
            <p>{mins} min.read</p>
        </div>
        <p className="w-[350px] text-2xl diff--font">{words}</p>
        <div className="inset-0 absolute  -z-10" />
        <div>
            <button className=" group  font-bold rounded-3xl text-[#2b1f4b] transition-all duration-200  flex items-center gap-2">More on price<span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></button>
        </div>
        
    </div>
  )
}

export default InsightCard