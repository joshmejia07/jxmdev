import React from "react"

export default function Card({ image, altText, divClass, imgClass }) {
  return (
    <div className={divClass}>
      <img className={imgClass} src={image} alt={altText} />
    </div>
  )
}
