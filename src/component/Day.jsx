import { useParams } from "react-router-dom";
import Word from "./Word.tsx";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams(); //주소창에 있는 문자열이 들어옴
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2> Day {day}</h2>
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
