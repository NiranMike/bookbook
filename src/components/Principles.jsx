/* eslint-disable react/no-unescaped-entities */

const Principles = () => {
  return (
    <div className="px-[130px] py-[150px] space-y-[7rem]">
        <div className='grid grid-cols-2 '>
            <h2 className='flex flex-col diff--font text-4xl text-[#190C39]'>The boobook <span className='poppin--font font-semibold'>principles</span></h2>
            <div className='flex flex-col gap-9'>
                <p className='text-[#75727D] text-[1.2rem]'>At the heart of boobook, there is a passionate and dedicated team aligned on values and work ethic. These are fundamental guides that shape our culture and help us tackle challenges together.</p>
                <div className='flex gap-4'>
                    <div className="py-3  rounded-full hover:bg-[#3e2c6c] cursor-pointer  flex items-center gap-2 group  font-bold px-4 bg-[#190C39] text-[#B999FC]">The world of boobook <span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></div>
                    <div className="py-3  rounded-full hover:bg-[#bfa5f7] cursor-pointer  flex items-center gap-2 group  font-bold px-4 bg-[#B999FC] text-[#190C39] ">Join us <span className="text-[1.2rem] delay-75 opacity-0 transition-all duration-300 ease-in-out -translate-x-[24px] group-hover:translate-x-1 group-hover:opacity-100 ">&#8594;</span> <span className="text-[1.2rem] ease-in-out delay-75 -translate-x-6 group-hover:translate-x-0 group-hover:opacity-0 transition-all duration-300">&#8594;</span></div>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
            <div className="flex gap-[3rem] ">
                <div className="flex flex-col gap-6">
                    <h2 className="diff--font text-[2rem] text-[#190C39]">Collaborative spirit</h2>
                    <p className="text-[#75727D] text-[1rem]">Whether it's within our team or with our clients, partners or suppliers, we foster an environment of co-creation, knowledge sharing, and open dialogue. We thrive on asking questions and challenging one another because we know that together, we achieve smarter and more effective solutions.</p>
                </div>
                <div className="h-full w-1 bg-[#75727D]" />
            </div>
            <div className="flex gap-[3rem] ">
                <div className="flex flex-col gap-6">
                    <h2 className="diff--font text-[2rem] text-[#190C39]">Deep expertise</h2>
                    <p className="text-[#75727D] text-[1rem]">With over 20 years of industry experience, our talented professionals bring a wealth of knowledge and expertise to every project. We stay at the forefront of the latest data analysis techniques and industry trends to deliver exceptional results.</p>
                </div>
                <div className="h-full w-1 bg-[#75727D]" />
            </div>
            <div className="flex gap-[3rem] ">
                <div className="flex flex-col gap-6">
                    <h2 className="diff--font text-[2rem] text-[#190C39]">Personalised approach</h2>
                    <p className="text-[#75727D] text-[1rem]">While some business questions may be similar, each business is unique. We are dedicated to comprehending your specific business requirements and developing customised solutions that will fuel growth and success.</p>
                </div>
                <div className="h-full w-1 bg-[#75727D]" />
            </div>
        </div>
    </div>
  )
}

export default Principles