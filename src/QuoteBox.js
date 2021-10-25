import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function QuoteBox() {
  const [quoteData, setQuoteData] = useState({ content: "", author: "" });
  const URL = "https://api.quotable.io/random";

  async function getQuote() {
    const response = await axios.get(URL);
    const { content, author } = response.data;
    setQuoteData({ content, author });
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="QuoteBox box" id="quote-box">
      <p style={{ fontSize: "1.5rem", textAlign: "Center" }}>
        {quoteData.content}
      </p>
      <p>--{quoteData.author}</p>
      <button className="button is-primary" onClick={getQuote}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;
