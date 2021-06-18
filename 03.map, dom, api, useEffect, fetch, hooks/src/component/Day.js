//import dummy from "../database/data.json";
import Word from "../component/Word";
import { useParams } from "react-router-dom";
//import { useEffect, useState } from "react";
import useFatch from "../hooks/useFatch";

export default function Day() {
  // 화살표 함수를 뜻함
  // => : function
  // () : return
  const day = useParams().day;
  //const wordList = dummy.words.filter((word) => word.day === Number(day));
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  const words = useFatch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
