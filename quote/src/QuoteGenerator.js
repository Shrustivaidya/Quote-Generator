import React, { useState, useEffect } from "react";
import "./App.css"; // Import CSS for styling
import axios from "axios";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
      const response = await axios.get("http://api.quotable.io/random");
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  // Fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <div className="quote-box">
        <p className="quote">"{quote}"</p>
        <h4 className="author">- {author}</h4>
        <button className="button" onClick={fetchQuote}>
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
