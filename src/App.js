import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import { IndexContext } from "./context/IndexContext";
import PlayArea from "./components/PlayArea";
import StartScreen from "./components/StartScreen";
import "./index.css";
import EndScreen from "./components/EndScreen";
function App() {
    const [index, setindex] = useState(0);
    const [data, setdata] = useState();
    const [wpm, setwpm] = useState();
    const [completed, setCompleted] = useState(false);
    const [started, setStarted] = useState(false);
    const textArea = useRef();
    const textRef = useRef();

    return (
        <div className="App">
            <IndexContext.Provider
                value={{
                    index,
                    setindex,
                    data,
                    setdata,
                    textArea,
                    textRef,
                    wpm,
                    setwpm,
                    completed,
                    setCompleted,
                    started,
                    setStarted
                }}
            >
                <Navbar />
                {started ? !completed?<PlayArea/>:<EndScreen/> : <StartScreen/>}
            </IndexContext.Provider>
        </div>
    );
}

export default App;
