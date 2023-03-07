import { KeyboardArrowDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <img src="images/netflix-logo-png-2582.png" alt="" />
           
            <span>HomePage</span>
            <span>Tv Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
            </div>
            <div className="right">
              <Search className="icon"/>
              <span>KID</span>
              <Notifications className="icon"/>
              <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg" alt="" />

            <div className="profile">              <KeyboardArrowDown className="icon"/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>

            </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar
