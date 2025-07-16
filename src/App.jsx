import { useEffect, useState } from "react";

import "./App.css";
import { getRandom, getAll } from "@divyanshu013/inspirational-quotes";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const quoteData = getAll();
    setQuotes(quoteData);
  }, []);
  console.log(quotes);
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };
  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex == 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const currentQuote = quotes.length > 0 ? quotes[currentIndex] : null;
  const backgroundColors = [
    "#8cc084",
    "#b7ebc3",
    "#ffb37e",
    "#7fa8d7",
    "#5fa5d9",
  ];
  const currentBackgroundColor =
    backgroundColors[currentIndex % backgroundColors.length];
  return (
    <>
      <div className="content" style={{ background: currentBackgroundColor }}>
        <h1>Inspirational Quote Generator</h1>
        {currentQuote && (
          <blockquote>
            <p>"{currentQuote.quote}"</p>
          </blockquote>
        )}
        {currentQuote && <h2>{currentQuote.author}</h2>}
        {currentQuote && <h3>{currentQuote.source}</h3>}
        <div className="button-container">
          <button onClick={handlePreviousClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
