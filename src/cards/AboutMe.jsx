import rings from "../assets/rings.png"

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="work-status-container card">
        <p>
          <strong>Full Time. </strong>Part Time. <strong>Freelance.</strong>
        </p>
        <img src={rings} alt="small colored rings" width="81" height="20" />
      </div>
      <div className="about-me card">
        <p className="fs--l m-zero">
          <strong>About Me</strong>
        </p>
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
