import React, { useState } from "react"

export default function Card({
  image,
  altText,
  divClass,
  imgClass,
  website,
  banner,
}) {
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
        <img className={imgClass} src={image} alt={altText} />
        {isHovered ? banner : ""}
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
