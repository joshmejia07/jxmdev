import profilePic from "../assets/profile-pic.jpg"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

export default function Profile() {
  return (
    <div className="profile-card card">
      <img
        className="profile-pic"
        src={profilePic}
        alt="profile picture"
        width="960"
        height="859"
      />
      <div className="profile-flex">
        <div className="profile-info">
          <p className="fs--xl">JOSH</p>
          <p className="fs--xl">
            <strong>MEJIA</strong>
          </p>
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
