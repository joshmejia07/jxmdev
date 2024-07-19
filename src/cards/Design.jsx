import cardDesign from "../assets/card-design.png"
import webDesign from "../assets/web-design.png"

export default function Design() {
  return (
    <div className="card grid-col-span grid-container">
      <h2 className="fs--xxl grid-center m-auto">DESIGN</h2>
      <div className="grid-item aspect-ratio-box">
        <img
          className="grid-item"
          src={cardDesign}
          alt="Card design"
          style={{ borderRadius: "0 10px 0 10px" }}
          width="530"
          height="360"
        />
      </div>
      <div className="grid-item aspect-ratio-box">
        <img
          className="grid-item"
          src={webDesign}
          alt="Card design"
          style={{ borderRadius: "10px 0 10px 0" }}
          width="530"
          height="360"
        />
      </div>
    </div>
  )
}
