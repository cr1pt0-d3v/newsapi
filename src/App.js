import React from "react";
import "./App.css";
import useFetch from "./effects/use-fetch.effect";

function App() {
  const country = "de";
  const category = "business";
  const news = useFetch(country, category);
  console.log(news);

  return (
    <div className="App">
      {news
        ? news.articles.map((article, id) => (
            <p key={id}>{article.description}</p>
          ))
        : null}
    </div>
  );
}

export default App;
