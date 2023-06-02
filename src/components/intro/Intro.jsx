import { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'

export default function Intro() {

  // const textRef = useRef();

  // useEffect(() => {
  //   console.log(textRef)
  //   init(textRef.current, {
  //     showCursor: false,
  //     strings: ['Engineer', 'Developer', 'Designer'],
  //   })
  // }, [])
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mypic.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
            Hi There, I'm
          </h2>
          <h1>Shawkat Sujon</h1>
          <h3>Software <span>Engineer</span></h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
