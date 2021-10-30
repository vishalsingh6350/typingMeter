import { useRef, useEffect, useContext } from "react";
import { IndexContext } from "../context/IndexContext";
const InputText = () => {
    const { textArea } = useContext(IndexContext);
    return (
        <textarea
            name="input"
            id="input"
            placeholder="Start typing from here...."
            rows="10"
            ref={textArea}
            disabled={true}
        ></textarea>
    );
};

export default InputText;
