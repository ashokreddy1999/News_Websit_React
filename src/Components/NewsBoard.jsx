import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "4f4113205b2b4e1b89afd30ec639ff1f";
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setArticles(data.articles))
      .catch(error => {
        console.error("Fetching news failed:", error);
        setError("Failed to load news.");
      });
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news) => {
        return <Newsitem key={news.url} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  );
}

export default NewsBoard;
