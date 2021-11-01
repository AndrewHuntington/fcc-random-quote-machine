import { useState } from "react";
import colors from "./libs/colors";
import QuoteBox from "./QuoteBox";
import "./App.css";

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [prevColor, setPrevColor] = useState("#fafafa");
  const [currColor, setCurrColor] = useState(randomColor());

  return (
    <div
      className="App"
      style={{
        "--bg-color-one": prevColor,
        "--bg-color-two": currColor,
        backgroundColor: currColor,
      }}
    >
      <QuoteBox
        currColor={currColor}
        setCurrColor={setCurrColor}
        setPrevColor={setPrevColor}
        randColor={randomColor}
      />
    </div>
  );
}

export default App;
