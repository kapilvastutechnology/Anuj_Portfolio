

// export default function ProjectCard() {
//   return (
//   <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//     {/* tala ko code only paste garne ho */}
//     <div className="bg-dard-300 rounded-2xl overflow-hidden hover:translate-y-2 transition duration-300 cursor-pointer" >
//         <img src="" alt="" className="w-full h-60 object-cover" />
//         <div className="p-6">
//             <h3 className="text-xl font-semibold mb-2" >{}</h3>
//             <p className="text-gray-400 mb-4">{desc}</p>
//             <div className="flex flex-wrap gap-2 mb-4" >
//                 {tech}
//                 <span className="px-3 py-1 bg-dark-400 rounded-full text-sm" >item</span>
//             </div>
//             <div className="flex gap-2" >
//                 <a href="#" className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300  " >View Demp</a>
//                 <a href="#" className="flex-1 text-centr px-4 py-2 border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300">Code</a>

//             </div>

//         </div>
//     </div>
//     </div>
//   )
// }


export default function ProjectCard() {
  const projects = [
    {
      id: 1,
      title: "Furniture E-Commerce Website",
      desc: "A fully functional furniture store with user authentication, cart system, and admin dashboard built using PHP and MySQL.",
      img: "/images/furniture.png", // 👈 stored in public folder
      tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
      demo: "#",
      code: "#",
    },
    {
      id: 2,
      title: "React Todo App",
      desc: "A simple and modern todo application built using React and local storage.",
      img: "/images/todos.png",
      tech: ["React", "Tailwind", "JavaScript"],
      demo: "#",
      code: "#",
    },

    {
        id: 2,
      title: "Ecommerce UI",
      desc: "A simple and modern todo application built using React and local storage.",
      img: "/images/todo.png",
      tech: ["React", "Tailwind", "JavaScript"],
      demo: "#",
      code: "#",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer shadow-lg"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <a
                href={project.demo}
                className="flex-1 text-center px-4 py-2 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300 text-white"
              >
                View Demo
              </a>
              <a
                href={project.code}
                className="flex-1 text-center px-4 py-2 border border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500/20 transition duration-300"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
