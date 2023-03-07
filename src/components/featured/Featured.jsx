import { ErrorOutline, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>

                </select>
            </div>
        )}
       <img src="images/wallpaperflare.com_wallpaper.jpg" alt="" /> 

    <div className="info">
         <img width="100p%" src="images\pngwing.com.png" alt="" />
         <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur fuga aspernatur officia, praesentium dolor? Sed maiores quaerat, dicta qui porro error perspiciatis, saepe quae cumque odio velit at. Laudantium.
         </span>
         <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <ErrorOutline/>
                <span>Info</span>
            </button>
         </div>
    </div>
</div>
  )
}


