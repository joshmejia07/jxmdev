import React, { useState } from "react"

export default function Card({ image, altText, divClass, imgClass, website }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <a href={website} target="_blank" rel="noopener noreference">
      <div
        className={`${divClass} card-hov ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={`${imgClass} ${isHovered ? "hovered" : ""}`}
          src={image}
          alt={altText}
        />
      </div>
    </a>
  )
}

// export default function Card({ image, altText, divClass, imgClass, website }) {
//   return (
//     <a href={website} target="_blank" rel="noopener noreference">
//       <div className={divClass}>
//         <img className={imgClass} src={image} alt={altText} />
//       </div>
//     </a>
//   )
// }
