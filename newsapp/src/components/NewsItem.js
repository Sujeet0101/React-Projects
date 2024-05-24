import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageUrl? imageUrl : "https://images.seattletimes.com/wp-content/uploads/2024/03/03012024_tzr_tzr_162913.jpg?d=1200x630"} 
            className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} rel='noreferrer' target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
       </div>
      </div>
    )
  }
}
