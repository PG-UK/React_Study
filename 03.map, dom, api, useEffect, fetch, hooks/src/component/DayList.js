//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFatch from "../hooks/useFatch";

// Map 은 Array를 받아서 또 다른 Array를 반환해줌
export default function DayList() {
  // const [days, setDays] = useState([]);

  // 의존성 배열
  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     });
  // }, []);

  const days = useFatch("http://localhost:3001/days");

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
