import rings from "../assets/rings.png"

export default function TitleCard() {
  return (
    <div
      className="projects-head-container grid-col-span card"
      // style={{ backgroundColor: "#5b5b5b" }}
    >
      <h1
        className="projects-head-text"
        style={{ paddingTop: "1rem", paddingBottom: "1rem", color: "#f2bf5c" }}
      >
        Projects
      </h1>
      {/* <img
        src={rings}
        alt="small colored rings"
        style={{ marginBottom: "3rem" }}
      /> */}
      <hr
        className="hr-center"
        style={{ marginBottom: "3rem", backgroundColor: "#f2bf5c" }}
      />
    </div>
  )
}
