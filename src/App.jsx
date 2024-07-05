import "./index.css"

import { useRef } from "react"

import Header from "./cards/Header"
import Profile from "./cards/Profile"
import AboutMe from "./cards/AboutMe"
import ProjectHeader from "./cards/ProjectHeader"
import Card from "./cards/Card"
import Design from "./cards/Design"
import Contact from "./cards/Contact"
import Footer from "./cards/Footer"

import otsLogo from "./assets/ots-logo.png"
import momntmLogo from "./assets/momntm-logo.png"
import momntmSite from "./assets/momntm-site.png"
import theYoke from "./assets/the-yoke.png"

function App() {
  const targetRef = useRef(null)

  function handleScroll() {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <div className="site-wrapper">
        <Header handleScroll={handleScroll} />

        <section className="grid-container">
          <Profile />
          <AboutMe />
          <ProjectHeader />
          <Card
            image={otsLogo}
            altText="On the Strip Logo"
            divClass="card flex-center aspect-ratio-box"
            imgClass="ots-logo"
          />
          <Card
            image={momntmLogo}
            altText="Momntm Logo"
            divClass="card flex-center grid-item aspect-ratio-box"
            imgClass=""
          />
          <Card
            image={momntmSite}
            altText="Momntm Website"
            divClass=""
            imgClass="card grid-item"
          />
          <Card
            image={theYoke}
            altText="The Yoke Website"
            divClass=""
            imgClass="card grid-item"
          />
          <Design />
          <Contact targetRef={targetRef} />
          <Footer />
        </section>
      </div>
    </>
  )
}

export default App
