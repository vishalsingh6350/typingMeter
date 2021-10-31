import Airtable, { Record } from "airtable";
import { useContext, useEffect, useRef, useState } from "react";
import { IndexContext } from "../context/IndexContext";
const MainText = () => {
    const base = new Airtable({ apiKey: "YOUR_API_KEY" }).base(
        "YOUR_BASE_KEY"
    );
    const { textRef, textArea, setwpm, setCompleted } =
        useContext(IndexContext);
    const [inputText, setinputText] = useState();
    const [mainText, setmainText] = useState();
    const startingTime = useRef();
    const isLetter = (c) => {
        return c.length === 1 && c.match(/[a-zA-Z0-9.?:;,'" ]/m);
    };
    function keydownHandler(e) {
        if (isLetter(e.key)) {
            setinputText(textArea.current.value + e.key);

            if (
                e.key ===
                textRef.current.querySelectorAll("span")[
                    textArea.current.value.length
                ].textContent
            ) {
                textRef.current
                    .querySelectorAll("span")
                    [textArea.current.value.length].classList.remove("error");
                textRef.current
                    .querySelectorAll("span")
                    [textArea.current.value.length].classList.add("success");
                let currTime = new Date();
                
                    let timeDiff =
                        Math.floor(currTime.getTime() / 1000) -
                        startingTime.current;
                    setwpm(
                        (
                            (textArea.current.value.length / 4.7).toFixed() /
                            (timeDiff / 60).toFixed(2)
                        ).toFixed(1)
                    );
            } else {
                textRef.current
                    .querySelectorAll("span")
                    [textArea.current.value.length].classList.remove("success");
                textRef.current
                    .querySelectorAll("span")
                    [textArea.current.value.length].classList.add("error");
            }
            if (
                textRef.current.querySelectorAll("span").length ===
                textArea.current.value.length + 1
            ) {
                setCompleted(true);
            }
        } else if (e.key === "Backspace") {
            setinputText(textArea.current.value);
            if (textArea.current.value.length > 0) {
                textRef.current
                    .querySelectorAll("span")
                    [textArea.current.value.length - 1].classList.remove(
                        "success"
                    );
            }
            if (textArea.current.value.length > 0) {
                textRef.current
                    .querySelectorAll("span")
                    [textArea.current.value.length - 1].classList.remove(
                        "error"
                    );
            }
        }
    }
    if (textArea.current) textArea.current.disabled = !Boolean(mainText);

    useEffect(() => {
        base("Random Paragraphs")
            .select({ view: "Grid view" })
            .eachPage((records, fetchnextpage) => {
                setmainText(
                    records[
                        Math.floor(Math.random() * records.length)
                    ].fields.para.split("")
                );
                fetchnextpage();
            });
        setinputText(textArea.current.value);
        textArea.current.addEventListener("keydown", keydownHandler);
        setwpm(0)
        let currTime=new Date()
        startingTime.current = Math.floor(
            currTime.getTime() / 1000
        );
        return () => {
            if (textArea.current) {
                textArea.current.removeEventListerner(
                    "keydown",
                    keydownHandler
                );
            }
        };
    }, []);

    return (
        <div className="mainText" ref={textRef}>
            {mainText
                ? mainText.map((item) => <span>{item}</span>)
                : "Waiting...."}
        </div>
    );
};

export default MainText;
