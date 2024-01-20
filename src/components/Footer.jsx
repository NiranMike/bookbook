
const Footer = () => {
  return (
    <div className="py-[80px] space-y-5 rounded-t-[3rem] px-[40px] lg:px-[180px] bg-[#190C39]">
        <div className="flex flex-col lg:flex-row lg:justify-between">
            <h2 className="font-bold text-[2.6rem] text-[#9d79f7]">boobook</h2>
            <div className="flex flex-col lg:flex-row text-white font-semibold gap-[30px] lg:gap-[150px]">
                <ul className=" space-y-3 lg:space-y-6 ">
                    <li className="text-[#9d79f7] text-xl">boobook</li>
                    <li className="hover:text-[#F2BD9E] cursor-pointer transition-colors duration-200 ease-in-out">expertise</li>
                    <li className="hover:text-[#F2BD9E] cursor-pointer transition-colors duration-200 ease-in-out">why boobook</li>
                    <li className="hover:text-[#F2BD9E] cursor-pointer transition-colors duration-200 ease-in-out">case studies</li>
                    <li className="hover:text-[#F2BD9E] cursor-pointer transition-colors duration-200 ease-in-out">about us</li>
                </ul>
                <ul className=" space-y-3 lg:space-y-6 ">
                    <li className="text-[#9d79f7] text-xl">service</li>
                    <li className="hover:text-[#F2BD9E] cursor-pointer transition-colors duration-200 ease-in-out">jobs</li>
                    <li className="hover:text-[#F2BD9E] cursor-pointer transition-colors duration-200 ease-in-out">team & culture</li>
                    <li className="hover:text-[#F2BD9E] cursor-pointer transition-colors duration-200 ease-in-out">insights</li>
                    <li className="hover:text-[#F2BD9E] cursor-pointer transition-colors duration-200 ease-in-out">resources</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="space-y-6">
                <p className="text-white">Sign up for our newsletter today and be in the know!</p>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="px-5 bg-white rounded-full py-3 lg:w-[300px]">
                        <input type="text" placeholder="Enter your mail" className=" outline-none" />
                    </div>
                    <div className=" hover:bg-[#F2BD9E] transition-colors duration-200 ease-in-out w-[50px] text-[2rem] text-center rounded-full bg-white">
                        &#8594;
                    </div>
                </div>
                <p className="text-white text-xs lg:w-[400px]">By subscribing you comply with our Privacy Policy and provide consent to receive updates from our company.</p>
            </div>
            <div className="grid grid-cols-3 gap-10 items-center">
                <img className="w-[120px] cursor-pointer hover:scale-105 transition-all ease-in-out duration-200" src="https://assets-global.website-files.com/64fed7eecff9e45d4bb373ed/650303aee622cc7d0e0324ac_mrs-logo.svg" alt="" />
                <img className="w-[120px] cursor-pointer hover:scale-105 transition-all ease-in-out duration-200" src="https://assets-global.website-files.com/64fed7eecff9e45d4bb373ed/650303aef4cfe61cfec3056d_cube-logo.svg" alt="" />
                <img className="w-[120px] cursor-pointer hover:scale-105 transition-all ease-in-out duration-200" src="https://assets-global.website-files.com/64fed7eecff9e45d4bb373ed/650303ae8f8a9496d4e22f33_esomar-logo.svg" alt="" />
            </div>
        </div>
    </div>
  )
}



export default Footer