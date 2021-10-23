import React from "react";
import { useState, useEffect } from "react";
import useToggleState from "./hooks/useToggleState";
import axios from "axios";

function QuoteBox() {
  const [quoteData, setQuoteData] = useState({ content: "", author: "" });
  const [toggledState, toggle] = useToggleState(); // Hacky. Can improve?
  const URL = "https://api.quotable.io/random";

  useEffect(() => {
    async function getQuote() {
      const response = await axios.get(URL);
      const { content, author } = response.data;
      setQuoteData({ content, author });
    }
    getQuote();
  }, [toggledState]);

  return (
    <div className="QuoteBox" id="quote-box">
      <p>{quoteData.content}</p>
      <p>--{quoteData.author}</p>
      <button onClick={() => toggle()}>Get New Quote</button>
    </div>
  );
}

export default QuoteBox;
