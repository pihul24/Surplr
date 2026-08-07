import React from 'react'

function GlassCard({image , title ,description,className , titleclassName , descriptionclassName,children}) {
  return (
    <div className={`glassCardComponent p-6  rounded-3xl bg-white/5 z-10 hover:scale-110 transition-all duration-500 ease-out shadow-2xl border border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]  backdrop-blur-2xl ${className}`} >
      {image && <img src={image} alt={title}/>}  
      <h2 className={`tittle p-2 font-semibold font-serif  ${titleclassName}`}>
            {title}
      </h2>
      <div className={`mt-2 ${descriptionclassName}`}>{description}</div>
      {children}
    </div>
  );

}

export default GlassCard 