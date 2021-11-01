import React from "react";
import { useState, useEffect } from "react";
import { sleep } from "./libs/sleep";
import axios from "axios";
import "./QuoteBox.css";

async function controlAnimations() {
  // ugly but it works
  const quoteText = document.querySelector(".QuoteBox-text");
  const quoteAuthor = document.querySelector(".QuoteBox-author");
  const app = document.querySelector(".App");
  const btn = document.querySelector(".QuoteBox-new-quote");

  quoteText.classList.toggle("animate__fadeOut");
  quoteAuthor.classList.toggle("animate__fadeOut");
  app.classList.toggle("bg-pan-top");
  btn.classList.toggle("bg-pan-top");
  btn.disabled = true;

  await sleep(2000);
  quoteText.classList.toggle("animate__fadeOut");
  quoteAuthor.classList.toggle("animate__fadeOut");
  quoteText.classList.toggle("animate__fadeIn");
  quoteAuthor.classList.toggle("animate__fadeIn");

  await sleep(2000);
  quoteText.classList.toggle("animate__fadeIn");
  quoteAuthor.classList.toggle("animate__fadeIn");

  await sleep(5000);
  app.classList.toggle("bg-pan-top");
  btn.classList.toggle("bg-pan-top");
  btn.disabled = false;
}

function QuoteBox({ currColor, setCurrColor, setPrevColor, randColor }) {
  const [quoteData, setQuoteData] = useState({ content: "", author: "" });
  const URL = "https://api.quotable.io/random";

  async function getQuote() {
    const response = await axios.get(URL);
    const { content, author } = response.data;

    controlAnimations();
    setPrevColor(currColor);
    setCurrColor(randColor);

    setTimeout(() => {
      setQuoteData({ content, author });
    }, 2000);
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="QuoteBox box" id="quote-box" style={{ currColor }}>
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
          <i className="fa-brands fa-twitter-square" style={{ currColor }}></i>
        </a>
        <button
          id="new-quote"
          className="button QuoteBox-new-quote"
          onClick={getQuote}
          style={{ backgroundColor: currColor }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
