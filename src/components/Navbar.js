import { useContext } from "react"
import { IndexContext } from "../context/IndexContext"
const Navbar = () => {
   const {wpm}=useContext(IndexContext)
   return (
      <nav>
         TypingMeter.
         <div className="wpm">
            {wpm?`${wpm} wpm`:'__:_ wpm'}
         </div>
      </nav>
   )
}

export default Navbar
