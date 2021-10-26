import { useState } from "react";
import colors from "./libs/colors";
import QuoteBox from "./QuoteBox";
import "./App.css";

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [color, setColor] = useState(randomColor());
  console.log(color);

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuoteBox color={color} setColor={setColor} randColor={randomColor} />
    </div>
  );
}

export default App;
