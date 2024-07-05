export default function Header({ handleScroll }) {
  return (
    <div className="header">
      <p className="logo">
        JXM<strong>DEV</strong>
      </p>
      <button className="btn-styled pointer" onClick={handleScroll}>
        Contact
      </button>
    </div>
  )
}
