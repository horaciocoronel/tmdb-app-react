import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import '../assets/styles/ug-grid.css';
import '../assets/styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			films: []
		}
	}

	componentDidMount() {
			// Call the API and set the Initial list
			const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-CA&page=1`;
			fetch(`${url}`)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            films: result.results
	          });
	        },
	        (error) => {
	          alert("Couldn't reach the API server")
	        }
	      )
  }

  render() {
    return (
			<div className="ug-wrapper">
	      	<Header />
					<MainContent films={this.state.films} />
			</div>
    );
  }
}

export default App;
