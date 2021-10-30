import { useContext } from "react";
import MainText from "./MainText";
import InputText from "./InputText";
import { IndexContext } from "../context/IndexContext";
const PlayArea = () => {
   const {completed} = useContext(IndexContext)
    return (
        <div className="grid">
            <MainText />
            <InputText/>
        </div>
    );
};

export default PlayArea;
