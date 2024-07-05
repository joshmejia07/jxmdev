import cardDesign from "../assets/card-design.png"
import webDesign from "../assets/web-design.png"

export default function Design() {
  return (
    <div className="card grid-col-span grid-container">
      <h1 className="fs--xxl grid-center m-auto">DESIGN</h1>
      <div className="grid-item aspect-ratio-box">
        <img
          className="grid-item"
          src={cardDesign}
          alt="Card design"
          style={{ borderRadius: "0 10px 0 10px" }}
        />
      </div>
      <div className="grid-item aspect-ratio-box">
        <img
          className="grid-item"
          src={webDesign}
          alt="Card design"
          style={{ borderRadius: "10px 0 10px 0" }}
        />
      </div>
    </div>
  )
}
