import profilePic from "../assets/profile-pic.jpg"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

export default function Profile() {
  return (
    <div className="profile-card card">
      <img className="profile-pic" src={profilePic} alt="profile picture" />
      <div className="profile-flex">
        <div className="profile-info">
          <p className="fs--xl">JOSH</p>
          <h3 className="fs--xl">MEJIA</h3>
          <p className="txt--clr-med location">Las Vegas, NV</p>
        </div>
        <div className="profile-icons pointer">
          <a
            href="https://www.linkedin.com/in/jxmdev/"
            target="_black"
            rel="noopener noreferrer"
          >
            <div className="icon-bg">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://github.com/joshmejia07"
            target="_black"
            rel="noopener noreferrer"
          >
            <div className="icon-bg">
              <FaGithub />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
