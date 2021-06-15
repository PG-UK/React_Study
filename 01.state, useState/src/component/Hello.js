import { useState } from "react";

export default function Hello() {

    //let name = "UK'S";
    // 첫번째는 변수
    // 두번째는 변수를 변경해주는 State
    const [name, setNmae] = useState("UK'S");
    const [number, setNumber] = useState(0);

    function changeNmae() {
        setNmae(name === "UK'S" ? "DONGUK" : "UK'S");
    }

    return ( 
        <div>
            <h1>state, useSate</h1>

            <br/><br/>
            <h2>{name}</h2>
            <button onClick={changeNmae}>NameChange</button>

            <br/><br/>

            <h2>{number}</h2>
            <button onClick={() => {
                setNumber(number + 1);
            }}> NumChange


            </button>

        </div>
    );
}