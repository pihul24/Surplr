

function Lights() {
  return (
    <>
    <ambientLight intensity={0.8} />
    <directionalLight 
        position={[5,5,5]}
        intensity={2}
        //color="#ffffff"
    />
    {/* <pointLight
        position={[0, 0, 5]}
        intensity={25}
        
      /> */}
    </>
  )
}

export default Lights