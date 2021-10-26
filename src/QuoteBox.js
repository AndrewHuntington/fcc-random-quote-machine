import React from "react";
import { useState, useEffect } from "react";
import { sleep } from "./helpers/sleep";
import axios from "axios";
import "./QuoteBox.css";

async function controlAnimation() {
  const quoteText = document.querySelector(".QuoteBox-text");
  const quoteAuthor = document.querySelector(".QuoteBox-author");

  quoteText.classList.toggle("animate__fadeOut");
  quoteAuthor.classList.toggle("animate__fadeOut");

  await sleep(2000);
  quoteText.classList.toggle("animate__fadeOut");
  quoteAuthor.classList.toggle("animate__fadeOut");
  quoteText.classList.toggle("animate__fadeIn");
  quoteAuthor.classList.toggle("animate__fadeIn");

  await sleep(2000);
  quoteText.classList.toggle("animate__fadeIn");
  quoteAuthor.classList.toggle("animate__fadeIn");
}

function QuoteBox() {
  const [quoteData, setQuoteData] = useState({ content: "", author: "" });
  const URL = "https://api.quotable.io/random";

  async function getQuote() {
    const response = await axios.get(URL);
    const { content, author } = response.data;
    controlAnimation();
    setTimeout(() => {
      setQuoteData({ content, author });
    }, 2000);
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="QuoteBox box" id="quote-box">
      <p
        className="block QuoteBox-text animate__animated animate__slow"
        id="text"
      >
        {<i className="fa-solid fa-quote-left"></i>}
        {quoteData.content}
      </p>
      <p
        className="block QuoteBox-author animate__animated animate__slow"
        id="author"
      >
        — {quoteData.author}
      </p>
      <div className="QuoteBox-buttons">
        <a
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quoteData.content}" ${quoteData.author}`}
          target="_blank"
          rel="noreferrer"
          id="tweet-quote"
          className="tweet-quote"
        >
          <i className="fa-brands fa-twitter-square"></i>
        </a>
        <button id="new-quote" className="button" onClick={getQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
