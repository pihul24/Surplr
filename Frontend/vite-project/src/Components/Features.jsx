import React from 'react'
import {useState} from 'react'
import GlassCard from './GlassCard'

const Features = ({image,text,title,description,className,titleclassName, descriptionclassName}) => {
  // use state 
  const [activeFeature, setActiveFeature] = useState(null)

  return (
    <div onClick={()=>{setActiveFeature(prev=>!prev)}}  className={`Features ${className} p-6 w-30 h-30 rounded-full bg-white/5 z-10 border border-white/20 hover:scale-150 transition-all duration-600 ease-out hover:shadow-[0_0_20px_rgba(77,235,255,0.15)] backdrop-blur-2xl`}>
      {image ? (<img src={image} alt={title}  />): 
        (<div className="text-center text-3xl font-bold mt-7 px-2 py-2 ">{text}</div>)}

        
      {activeFeature && (
        
        <GlassCard className=" absolute top-full mt-4 left-1/2 -translate-x-1/2 z-50 w-72 "
        title={title}
        description={description}
        titleclassName={titleclassName}
        descriptionclassName={descriptionclassName}
        />
      )}
      
    </div>
  )
}

export default Features