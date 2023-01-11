import {useState} from "react";

export function TenAction(){
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prev) => prev + 10);
  }

  return <button onClick={increment}>Current: {value} (+10)</button>
}

export function TwentyAction(){
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prev) => prev + 20);
  }

  return <button onClick={increment}>Current: {value} (+20)</button>
}