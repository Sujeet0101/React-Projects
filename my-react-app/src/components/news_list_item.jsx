import React from "react";
import '../css/styles.css'

const NewsItem = ({item}) => {

    return (
      <div className="news_item">
        <h1>{item.title}</h1>
        <div>{item.feed}</div>
      </div>
    );
}

export default NewsItem;

