import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.div 
    initial = {{opacity:0, y:50}}
      whileInView = {{opacity:1, y:0}}
      transition = {{duration:0.6, ease:'easeOut'}}
      viewport = {{once:true}}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a]  via-[#2d2d2d] to-[#1a1a1a]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between ">

                {/* left side content */}

            <div className="md-w-1/2 mb-10 md:mb-0" >
                <h1 className="text-4xl md:text-6xl font-bold mb-4" >
                    Hi, I'm <span className="text-purple" > Anuj Kumar Raidas</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter " >Mern Stack Developer</h2>
                <p className="text-lg text-gray-300 mb-8 ">I'm a MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js.</p>
                <div className="fles space-x-4" >
                    <a href="#projects" className="px-6 py-3 bg-purple rounded-lg
                     font-medium hover:bg-purple-700 transition duration-300">View Work</a>
                    <a href="#contact" className="px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition-colors duration-300" >Contact Me</a>
                </div>
            </div>

            {/* right side images */}
            <div className="md:w-1/2 flex justify-center" >
                <div className="relative w-64 h-64 md:w-80 md:h-80" >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink  opacity-70" >
                        <motion.img
                        animate={{y:[0,-20,0]}}
                        transition={{
                            duration:4,
                            repeat:Infinity,
                            repeatType : "loop",
                            ease: "easeInOut"
                        }}
                        className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10"
                        src="/images/anuj.jpg" alt="Profile" />
                    </div>
                </div>
            </div>
      </div>
    </motion.div>
  )
}
