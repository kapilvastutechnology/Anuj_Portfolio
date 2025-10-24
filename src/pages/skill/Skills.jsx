import { motion } from "framer-motion";
import SkillCard from "../../components/SkillCard";
import { FaReact, FaServer } from "react-icons/fa";
import { IoServerSharp } from "react-icons/io5";
export default function Skills() {
  return (
    <motion.div
     initial = {{opacity:0, y:50}}
    whileInView = {{opacity:1, y:0}}
    transition = {{duration:1, ease:'easeOut'}}
    viewport = {{once:false, amount:0.2}}
    id="skills"
    className="py-20 bg-dark-100">
      <div className="container mx-auto px-6" >
        <h2 className="text-3xl fond-bold text-center mb-4" >
            My
            <span className="text-purple">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, unde.</p>

        {/* Grid-column */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-5  " >
         <SkillCard icon={<FaReact size={40}/>} title={"Frontend Development"} tools={"HTML  CSS  JavaScript  React"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
         <SkillCard icon={<FaServer size={40}/>} title={"Backend Development"} tools={"Node.js  Express"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
         <SkillCard icon={<IoServerSharp size={40} />} title={"Database Management"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
         tools={"MongoDB"}
         />
        </div>

        <div>

        </div>
      </div>
    </motion.div>
  )
}
