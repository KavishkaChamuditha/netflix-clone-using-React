import { Add, PlayArrow, ThumbDown, ThumbUp } from "@material-ui/icons"
import { useState } from "react";
import "./listitem.scss"


export default function ListItem({index}) {
  
  const [isHovered, setisHovered] = useState(false);
  const trailer = "video/avatar_the_way_of_water_official_trailer_h264_33163.mp4"
  

  return (
    <div className="listitem" 
    style={{ left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=>setisHovered(true)} 
    onMouseLeave={()=>setisHovered(false)}>

     <img src="https://i.ytimg.com/vi/7hjPxUfV32Q/maxresdefault.jpg" alt="" />
     
      {isHovered && (
 <>
     <video src={trailer} autoPlay={true} loop />
   
     <div className="iteminfo">
      <div className="iconsName">
        <PlayArrow className="icons"/>
        <Add className="icons"/>
        <ThumbUp className="icons"/>
        <ThumbDown className="icons"/>
      </div>

     <div className="iteminfotop">
      <span>1 Hour 14 min</span>
      <span className="limit">+15</span>
      <span>2000</span>
    </div>

    <div className="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laudantium quas, tenetur,
    </div>

    <div className="genre">
      Action
    </div>
    
    </div>
    </>
)}
    </div>
  )
}
