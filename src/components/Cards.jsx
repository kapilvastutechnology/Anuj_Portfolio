

export default function Cards({icons, label}) {
  return (
    <div>
        <div className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300
         hover:-translate-y-2 cursor-pointer" >
            <div className="text-purple text-4xl mb-4" >
                {icons}
            </div>
            <h1 className="text-xl font-semibold" >{label}</h1>
            <p className="text-gray-400" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>          
    </div>            
  )
}
