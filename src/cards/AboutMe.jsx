import rings from "../assets/rings.png"

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="work-status-container card">
        <p>
          <strong>Full Time. </strong>Part Time. <strong>Freelance.</strong>
        </p>
        <img src={rings} alt="small colored rings" />
      </div>
      <div className="about-me card">
        <h2>About Me</h2>
        <hr className="hr-small" />
        <p>
          Enthusiastic and detail-oriented Developer with a solid foundation in
          front-end and back-end web development. Proficient in Design,
          JavaScript, React.js, HTML5, and CSS3, with hands-on experience in
          building responsive and user-friendly web applications.
        </p>
      </div>
    </div>
  )
}
