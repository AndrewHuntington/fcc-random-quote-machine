import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quoteData, setQuoteData] = useState({ content: "", author: "" });
  const URL = "https://api.quotable.io/random";
  async function getQuote() {
    const response = await axios.get(URL);
    const { content, author } = response.data;
    return { content, author };
  }

  // TODO: causing problems, come back to this
  useEffect(() => {
    setQuoteData(getQuote());
  }, [quoteData]);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>{quoteData.content}</p>
      <p>--{quoteData.author}</p>
    </div>
  );
}

export default App;
