import { useContext, useEffect, useRef,useState } from "react";
import { IndexContext } from "../context/IndexContext";
const MainText = () => {
    const { index ,data,setdata} = useContext(IndexContext);
    const [maintext, setmaintext] = useState()
    const textRef = useRef();
    useEffect(() => {
        if(data){
            console.log(data)
        }
    }, [index,data]);
    useEffect(() => {
        const textArray = Array.from(
            textRef.current.textContent.split("").map((item) => {
                return `<span>${item}</span>`;
            })
        );
        textRef.current.innerHTML = "";
        textArray.forEach((item) =>{
           textRef.current.innerHTML += item
      });
      setmaintext(textRef.current.querySelectorAll('span'))      
    }, []);
    return (
        <div className="mainText" ref={textRef} key={Math.random()*99999}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            odio maiores, sit quas nulla pariatur reiciendis id aperiam aut,
            minus libero quod. Consectetur, possimus accusantium. Sunt assumenda
            soluta eum explicabo doloribus eius, animi nesciunt, molestias
            ducimus iure facere ullam ratione culpa molestiae repudiandae natus.
            Reiciendis quisquam nam ipsam atque mollitia quae itaque
            perspiciatis velit eveniet sit dquod aspernatur veniam,
            error provident soluta animi eveniet repellendus? Rem magnam
            cupiditate nisi similique illum?
        </div>
    );
};

export default MainText;
