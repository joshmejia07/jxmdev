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
import ServiceCard from "./cards/ServiceCard"

import otsLogo from "./assets/ots-logo.png"
import importFirestore from "./assets/import-firestore-logo.png"
import momntmSite from "./assets/momntm-site.png"
import theYoke from "./assets/the-yoke.png"
import webDevIcon from "./assets/web-development-icon.png"
import uxIcon from "./assets/ux-design-icon.png"
import maintenanceIcon from "./assets/maintenance-icon.png"
import marketingIcon from "./assets/digital-marketing-icon.png"
import TitleCard from "./cards/TitleCard"

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
          <ServiceCard
            icon={webDevIcon}
            title="Web Development"
            description="Frontend Development, Responsive Web Design, E-commerce Development, CMS Development (WordPress, Joomla, etc.), Social Media Integration."
            color="#f2bf5c"
          />
          <ServiceCard
            icon={uxIcon}
            title="UX/UI Design"
            description="User Interface Design, User Experience  Design, Wireframing and Prototyping, Usability Testing."
            color="#5cb3f2"
          />
          <ServiceCard
            icon={maintenanceIcon}
            title="Maintenance & Support"
            description="Website Maintenance, Software Updates and Upgrades, Bug Fixes and Troubleshooting, Performance Monitoring."
            color="#f25c65"
          />
          <ServiceCard
            icon={marketingIcon}
            title="Digital Marketing Services"
            description="Comprehensive SEO Services, Complete Website Audits, Website Analytics and Reporting, Conversion Rate Optimization (CRO), Google Analytics, Google Search Console Set Up."
            color="#955cf2"
          />
          <TitleCard />
          <Card
            image={otsLogo}
            altText="On the Strip Logo"
            divClass="card flex-center aspect-ratio-box"
            imgClass="ots-logo"
            website={
              "https://onthestrip.com/restaurants/bardot-brasserie-las-vegas/"
            }
          />
          <Card
            image={importFirestore}
            altText="Momntm Logo"
            divClass="card flex-center grid-item aspect-ratio-box"
            imgClass="import-firestore-logo"
            website={"https://importfirestoreov.netlify.app/"}
          />
          <Card
            image={momntmSite}
            altText="Momntm Website"
            divClass=""
            imgClass="card grid-item"
            website={"https://joshmejia07.github.io/momntm/"}
          />
          <Card
            image={theYoke}
            altText="The Yoke Website"
            divClass="banner-pos"
            imgClass="card grid-item"
            website={"https://theyoke.netlify.app/"}
            // banner={<h4 className="banner">COMING SOON</h4>}
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
