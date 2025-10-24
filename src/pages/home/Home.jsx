import About from "../about/About";
import Contact from "../contact/Contact";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import Skills from "../skill/Skills";
export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
