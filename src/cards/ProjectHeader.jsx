import { useState } from "react"
import { techIcons } from "../data"

export default function ProjectHeader() {
  const [headingStyle, setHeadingStyle] = useState({})

  const [heading, setHeading] = useState("Services")

  const handleMouseEnter = (name, style) => {
    setHeading(name)
    setHeadingStyle({ color: style })
  }

  return (
    <div className="projects-head-container grid-col-span card">
      <h1 className="projects-head-text" style={headingStyle}>
        {heading}
      </h1>
      <div className="icons">
        {techIcons.map((icon, index) => {
          const IconComponent = icon.element
          return (
            <IconComponent
              key={index}
              className="icon pointer"
              onMouseEnter={() => handleMouseEnter(icon.name, icon.color)}
              onMouseLeave={() => {
                setHeading("Services")
                setHeadingStyle({})
              }}
            />
          )
        })}
      </div>
      <hr className="hr-center" style={headingStyle} />
    </div>
  )
}
