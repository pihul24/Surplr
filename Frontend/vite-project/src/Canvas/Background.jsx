
import Nebula from "./Nebula"
import Glow from "./Glow"
import Helix from "./Helix"

function Background() {
  return (
    <>
        <color attach="background" args={["#050505"] }/>
        <Nebula/>
        <Glow/>
        
        
    </>
  )
}

export default Background