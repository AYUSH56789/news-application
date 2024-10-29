import NewsItem from "../newsItem/NewsItem.jsx";
import Loader from "../loader/Loader.jsx";
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5ebf98b72b9f416eb69f46c8a8fbfa7f&page=${page}&pageSize=20`;
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, page]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5ebf98b72b9f416eb69f46c8a8fbfa7f&page=${page + 1}&pageSize=20`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(prevArticles => [...prevArticles, ...data.articles]);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error("Error fetching more news:", error);
    } finally {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "70px" }}>
        {category.charAt(0).toUpperCase() + category.slice(1)} - Top Headlines News
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Loader />}
      >
        <div className="container newcontainer">
          <div className="row">
            {articles.map((data) => (
              <div className="col-md-4" key={data.url}>
                <NewsItem 
                  title={data.title || ""} 
                  discp={data.description || ""} 
                  imageurl={data.urlToImage || ""} 
                  author={data.author || "unknown"} 
                  time={data.publishedAt || "..."} 
                  source={data.source?.name || "unknown"} 
                  url={data.url || ""} 
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
