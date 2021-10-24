import {useRef,useEffect,useContext} from 'react'
import { IndexContext } from '../context/IndexContext'
const InputText = () => {
   const textArea = useRef()
   const {setindex,setdata,index}=useContext(IndexContext)
   
   
   const isLetter = (c) => {
      return (c.length === 1 && c.match(/[[a-zA-Z]/i) || c === ' ' || c === ','|| c === '.'|| c === ':'|| c === ';'|| c === ' " '|| c === "'");
  }
  function keydownEventHandler(e){
   if(isLetter(e.key)){
      setindex(textArea.current.value.length)
      // setdata(textArea.current.value[textArea.current.value.length])
      setdata(prev=>e.key===prev?prev:e.key)
   }
  }
   useEffect(() => {
      textArea.current.addEventListener('keydown',keydownEventHandler)
      return(()=>{
         textArea.current.removeEventListener('keydown',keydownEventHandler)
      })
   }, [index])
   return (
     <textarea name="input" id="input" placeholder='Start typing from here....' rows='10' ref={textArea}>
     </textarea>
   )
}

export default InputText