import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function sortByUpvotes(articles) {
  return articles
    .slice()
    .sort((a, b) =>
      a.upvotes < b.upvotes ? 1 : b.upvotes < a.upvotes ? -1 : 0
    );
}

function sortByDate(articles) {
  return articles.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
}
function App({ articles }) {
  const [sortedArticles, sortArticles] = useState(sortByUpvotes(articles));
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => sortArticles(sortByUpvotes(articles))}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => sortArticles(sortByDate(articles))}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  );
}

export default App;
