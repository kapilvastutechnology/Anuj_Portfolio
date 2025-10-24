import { motion } from "framer-motion"
import ProjectCard from "../../components/ProjectCard"
import { FaArrowRight } from "react-icons/fa"
export default function Projects() {
  return (
    <motion.div
     initial = {{opacity:0, y:50}}
    whileInView = {{opacity:1, y:0}}
    transition = {{duration:1, ease:'easeOut'}}
    viewport = {{once:false, amount:0.2}}
    id="projects"
    className="py-20 bg-dark-200">
      <div className="container mx-auto px-6" >
    <h2 className="text-3xl font-bold text-center mb-4" >
        My
        <span className="text-purple" >Projects</span>
    </h2>
    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16" >
        Selection of my recent projects
    </p>
    <div>
        <ProjectCard/>
    </div>
    <div className="text-center mt-12">
     <a href="#"
     className="inline-flex items-center px-6 py-3 border border-purple-500 rounded-lg font-medium
      hover:bg-purple-500/20 transition duration-300">
      <span>View More Projects</span>
      <FaArrowRight className="ml-2" />
    </a>
  </div>

    
      </div>
    </motion.div>
  )
}
