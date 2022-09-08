import React, { Component } from 'react';
import {Row} from "react-bootstrap";

class MoviesClass extends Component {

  constructor(props) {
    super();
    this.state = { movies: [] };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=big&opening-date=1980-01-01:1990-01-01&api-key=aSJrHj6YrcaqGqnQKjz1UkWSpRhVhODT"
    )
      .then((res) => {
        res.json().then((moviesinfo) => {
          this.setState({ movies: moviesinfo.results });
          console.log(moviesinfo);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 style={{color: "#01132d", marginLeft:"50px"}}>Movie Reviews With "Big" In The Title That Opened In The U.S. Between 1980 and 1990</h2>
        {this.state.movies.map((movie, index) => {
          return (
            <Row md="6">
            <div key={index} style={{background: "#01132d", color: "#fff" , marginLeft: "150px", height: "170px", width: "300px", padding: "10px 20px", marginBottom: "15px"}}>
              <p><strong> Byline: </strong> {movie.byline} </p>
              <p> <strong> Critic Pick: </strong> {movie.critics_pick} </p>
              <p> <strong> Title : </strong> {movie.display_title} </p>
              <p> <strong> Headline : </strong> {movie.headline} </p>
            </div>
            </Row>
          );
        })}
      </div>
    );
  }
}

export default MoviesClass;
