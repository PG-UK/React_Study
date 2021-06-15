import { useState } from "react";
import UserNmae from './UserName'

export default function Hello({ age }) {

    const [name, setNmae] = useState("UK'S");
    // const [age, setAge] = useState(props.age);
    const msg = age > 19 ? '성인입니다.' : '미성년자 입니다.';

    return ( 
        <div>
            <h2 id = "name">
                {name}({age} : {msg})
            </h2>

            <UserNmae name = {name} />

            <button onClick={() => {
                setNmae(name === "UK'S" ? "DONGUK" : "UK'S");
                // setAge(age + 1);
            }}>
                Change
            </button>
        </div>
    );
}