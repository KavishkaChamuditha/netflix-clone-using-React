import { useRef, useState } from "react"
import "./rejister.scss"

export default function Rejister() {

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const emailRef = useRef()
  const paswordRef = useRef()

  const handleStart=()=>{
    setEmail(emailRef.current.value)
  }

  const handleFinish=()=>{
    setPassword(paswordRef.current.value)
  }

  return (
    <div className="rejister">
      <div className="top">
        <div className="wrapper">
        <img className="logo" src="images/netflix-logo-png-2582.png" alt="" />

        <button className="loginbutton">Sign in</button>
        </div>
      </div>

    <div className="container">
        <h1>This is neflix World Best Tv Series</h1>
        <h2>This is neflix World Best Tv Series</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
         {!email ? (
        <div className="input">
            <input type="email" placeholder="email addres" ref={emailRef}/>
            <button className="rejisterbtn" onClick={handleStart}>
                Get Started
            </button>
            </div>
            ):(
              <form className="input">
              <input type="password" placeholder="Password" ref={paswordRef}/>
              <button className="rejisterbtn" onClick={handleFinish} >
                 Login
              </button>
            </form>
            
         ) }
    </div>

    </div>
  )
}
