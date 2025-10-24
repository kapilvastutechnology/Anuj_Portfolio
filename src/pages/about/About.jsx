import { motion } from "framer-motion";
import { FaLightbulb, FaPaintBrush } from "react-icons/fa";
import Cards from "../../components/Cards";
export default function About() {
  return (
    <motion.div
    initial = {{opacity:0, y:50}}
      whileInView = {{opacity:1, y:0}}
      transition = {{duration:0.6, ease:'easeOut'}}
      viewport = {{once:true}}
      id="about"
      className="py-20 bg-dark-200">
      <div className="container mx-0 px-6" >
            {/* Heading */}
            <h2 className="text-2xl font-bold text-center mb-4 " >About
                <span className="text-purple" > Me</span>
            </h2>
            <p className="text-gray-400 text-center mx-auto mb-16 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat tempora consequatur eius dolore obcaecati dolorum praesentium earum beatae nemo!</p>

            {/* image + my journey */}
            <div className="flex flex-col md:flex-row items-center gap-12" >
                {/* images */}
                <div className="md:w-1/2 rounded-2xl overflow-hidden" >
                    <motion.img
                     initial = {{opacity:0, y:50}}
                     whileInView = {{opacity:1, y:0}}
                     transition = {{duration:0.9, ease:'easeOut'}}
                     viewport = {{once:false, amount:0.2}}
                     className="w-full h-full object-cover"
                     src="/images/anuj.jpg" alt="Profile" />
                </div>

                {/* journey-content */}
                <motion.div
                initial = {{opacity:0, y:50}}
                whileInView = {{opacity:1, y:0}}
                transition = {{duration:0.9, ease:'easeOut'}}
                viewport = {{once:false, amount:0.2}}
                className="md:w-1/2">
                    <div className="rounded-2xl p-8" >
                        <h1 className="text-2xl font-semibold mb-6" >My Journey</h1>
                        <p className="text-gray-300 mb-6" >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Minima deleniti impedit fugit? Vitae laboriosam asperiores reprehenderit tenetur odit architecto ad inventore pariatur velit ea ab qui distinctio </p>
                        <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Minima deleniti impedit fugit? Vitae laboriosam asperiores reprehenderit tenetur odit architecto ad inventore pariatur velit ea ab qui distinctio </p>

                    {/* cards-content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                     <Cards label={"Innovation"} icons={<FaLightbulb/>} />
                    <Cards label={"Design Oriented"} icons={<FaPaintBrush/>} />
                    <Cards label={"Clean Code"} icons={<FaLightbulb/>} />
                    
                    </div>
                    </div>
                </motion.div>

            </div>
      </div>
    </motion.div>
  )
}
