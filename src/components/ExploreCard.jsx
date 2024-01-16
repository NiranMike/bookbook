
const ExploreCard = ({image}) => {
  return (
    <div className="w-[1200px] h-[700px] cursor-grab selection:cursor-grabbing px-[100px]">
        <img className=" object-cover h-[700px] rounded-3xl" src={image} alt="" />
        <div></div>
    </div>
  )
}

export default ExploreCard