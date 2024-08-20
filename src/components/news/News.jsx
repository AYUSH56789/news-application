import NewsItem from "../newsItem/NewsItem.jsx";
import Loader from "../loader/Loader.jsx";
import React, { Component, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function News({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    console.log("comp mount : " + category);
    console.log("dm", page)
    updateNews();
  }, [category]);

  async function updateNews() {
    // let url = `https://newsapi.org/v2//top-headlines?country=in&category=${category}&apiKey=3e117121bd3a475d9ee754c955ad5f4e&page=${page}&pageSize=20`;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=d5246169b0e74a59bb6c48f6a501a967&page=${page}&pageSize=20`;

    setLoading(true);
    console.log("iun", page)
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults);
    setLoading(false)
  }

  const fetchMoreData = async () => {
    console.log("before" + page)
    setPage(page + 1)
    console.log("after" + page)
    // let url = `https://newsapi.org/v2//top-headlines?country=in&category=${category}&apiKey=3e117121bd3a475d9ee754c955ad5f4e&page=${page+1}&pageSize=20`;
    let url = `https://newsapi.org/v2//top-headlines?country=in&category=${category}&apiKey=d9a0594430254d8f8e6b70f08da65f0e&page=${page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResult(parseData.totalResults);
  }


  return (
    <>
      <h1 className="text-center" style={{ marginTop: "70px" }}>{category.charAt(0).toUpperCase() + category.slice(1)} - Top HeadLines News</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Loader />}
      >
        <div className="container newcontainer">
          <div className="row">
            {articles.map((data) => {
              return (<div className="col-md-4" key={data.url}>
                <NewsItem title={data.title != null ? data.title : ""} discp={data.description != null ? data.description : ""} imageurl={data.urlToImage != null ? data.urlToImage : ""} author={data.author != null ? data.author : "unknown"} time={data.publishedAt != null ? data.publishedAt : "..."} source={data.source.name != null ? data.source.name : "unknown"} url={data.url != null ? data.url : ""} />
              </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
