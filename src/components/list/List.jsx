import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons"
import "./list.scss"
import ListItem from "../listitem/ListItem"
import { useRef, useState } from "react"

export default function List() {

  const [listMoved, setMoved] = useState(false)
  const [slidenumber, setSlideNumber] = useState(0)
  const listRef = useRef()

  const handleClick =(direction)=>{
    setMoved(true)
    let distance  = listRef.current.getBoundingClientRect().x - 50
   if(direction === "left" && slidenumber > 0){
      setSlideNumber(slidenumber -1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if(direction === "right"  && slidenumber < 5){
      setSlideNumber(slidenumber +1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }

  }

  return (
    <div className="list">
      <span className="listtitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIos className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !listMoved && "none"}}/>
            <div className="container" ref={listRef}>
               
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
          

            </div>
            <ArrowForwardIos className="sliderArrow right"  onClick={()=>handleClick("right")}/>

        </div>
    </div>
  )
}
