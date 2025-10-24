

export default function SkillCard({icon,title,desc,tools}) {
  return (
    <div>
      <div className="bg-dark-300 rounded-2xl p-6 hover:translate-y-2 transition duration-300 cursor-pointer " >
        <div className="flex items-center mb-4" >
            <h1 className="w-12 mr-6 h-12 text-purple" >{icon}</h1>
            <h3 className="text-xl font-semibold" >{title}</h3>
        </div>
        <p className="text-gray-400 mb-4" >{desc}</p>
        <div className="flex flex-wrap gap-2 bg-dark-400 rounded-full text-sm  px-3 py-1" >
            <span>{tools}</span>
        </div>
      </div>
    </div>
  )
}
