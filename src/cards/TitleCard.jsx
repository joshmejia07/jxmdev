import rings from "../assets/rings.png"

export default function TitleCard() {
  return (
    <div
      className="projects-head-container grid-col-span m-top-bottom"
      // style={{ backgroundColor: "#fff" }}
    >
      <h2
        className="projects-head-text"
        style={{ paddingTop: "1rem", paddingBottom: "1rem", color: "#f2bf5c" }}
      >
        Projects
      </h2>
      <hr
        className="hr-center"
        style={{ marginBottom: "3rem", backgroundColor: "#f2bf5c" }}
      />
    </div>
  )
}
