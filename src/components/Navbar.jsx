
const Navbar = () => {
  return (
    <nav className="flex justify-between px-[80px] py-3 items-center">
          <h2 className="font-bold text-[2.6rem] text-[#190C39]">boobook</h2>
          <div className="block space-y-3">
              <ul className="flex gap-5 justify-end font-semibold text-[#75727D]">
                  <li>jobs</li>
                  <li>team & culture</li>
                  <li>insight</li>
                  <li>resources</li>
              </ul>
              <ul className="flex items-center text-lg text-[#190C39] font-bold gap-5">
                <li>expertise</li>
                <li>why boobook</li>
                <li>case studies</li>
                <li>about us</li>
                <button className="bg-[#190C39] text-[#BA9AFD] rounded-3xl py-[9px] px-6">contact us</button>
              </ul>
          </div>
    </nav>
  )
}

export default Navbar