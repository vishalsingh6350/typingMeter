import {useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import InputText from "./components/InputText";
import { IndexContext } from "./context/IndexContext";
import './index.css'
function App() {
  const [index, setindex] = useState(0)
  const [data, setdata] = useState()
  return (
    <div className="App">
      <Navbar />
      <IndexContext.Provider value={{index,setindex,data,setdata}}>
        <MainText/>
        <InputText/>
      </IndexContext.Provider>
    </div>
  );
}

export default App;