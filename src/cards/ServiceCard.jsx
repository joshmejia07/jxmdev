export default function ServiceCard({ icon, title, description, color }) {
  return (
    <div className="card service-card">
      <img className="service-icon" src={icon} alt="service icon" />
      <h2 style={{ color }}>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
