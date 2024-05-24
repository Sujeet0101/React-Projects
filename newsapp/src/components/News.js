import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

    constructor() {
        super();
        this.state = {
          articles: [],
          loading: false,
          page: 1  
        }
      }

      async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a15597977edc47249772681e7c3f6171&page=1&pageSize=18";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
      }

    handleNext = async()=> {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/18)){

        }else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a15597977edc47249772681e7c3f6171&page=${this.state.page + 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
        }
        
    }
    
    handlePrevious = async()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a15597977edc47249772681e7c3f6171&page=${this.state.page - 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    


    render() {
        return(
            <div className="container my-4">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=> {
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem  title={element.title?element.title:""} 
                    description={element.description?element.description:""} 
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}/>
                    </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>    
        )
    }
}

