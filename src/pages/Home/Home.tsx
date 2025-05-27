import Footer from "../../components/Footer/Footer"
import SliderComp from "../../components/Slider/Slider"
// import NavBar from "../../components/NavBar/Na´vBar"
import AboutSection from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import ProjectsSection from "./sections/Projects/Projects"


const Home = () => {

  return (
    <>
    {/* <NavBar /> */}
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Footer />
      {/* <SkillsSection /> */}
      {/* <ProjectsSection /> */}
    </>
  )
}

export default Home
