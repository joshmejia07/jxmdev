export default function ServiceCard({ icon, title, description, color }) {
  return (
    <div className="card service-card">
      <img
        width="67"
        height="59"
        className="service-icon"
        src={icon}
        alt="service icon"
      />
      <h2 style={{ color }}>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
