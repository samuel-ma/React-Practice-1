import { useState, useEffect } from "react";
import "./styles.css";
import Message from "./Message.js";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount(count + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <button onClick={getAdvice}>Get Advice</button>
      <Message advice={advice} />
      <p>Advice number = {count}</p>
    </div>
  );
}
