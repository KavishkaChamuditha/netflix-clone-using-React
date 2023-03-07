import { ArrowBackIos } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIos/>
        Home
      </div>
      <video src="video/avatar_the_way_of_water_official_trailer_h264_33163.mp4" className="video" autoPlay progress controls></video>
    </div>
  )
}
