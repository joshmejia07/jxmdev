import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact({ targetRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [messageSent, setMessageSent] = useState(false)

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setMessageSent(true)

          setTimeout(() => {
            setMessageSent(false)
          }, 2500)

          setFormData({
            name: "",
            email: "",
            message: "",
          })
        },
        error => {
          alert("Failed to send email")
          console.log("FAILED...", error.text)
        }
      )
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="card grid-col-span" ref={targetRef}>
      <div className="grid-container">
        <div className="cta-container">
          <h1 className="cta-text">
            Let's <br /> work <span>together.</span>
          </h1>
          <p>Get in touch</p>
        </div>
        <form onSubmit={sendEmail} ref={form}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="form-inputs"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="form-inputs"
          />
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Comments"
            required
            className="form-inputs grid-col-span"
          />
          {messageSent ? (
            <p className="confirmation-message">
              Thank you! We'll be in touch soon.
            </p>
          ) : (
            <button type="submit" className="btn-styled pointer">
              Send
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
