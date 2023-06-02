import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar "+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Shawkat.</a>
          <div className="itemcontainer">
            <Person className="icon"/>
            <span>+880 162021 0055</span>
          </div>
          <div className="itemcontainer">
            <Mail className="icon"/>
            <span>shawkatali@iut-dhaka.edu</span>
          </div>
        </div>
        <div className="right">
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
