import React, { Component } from 'react';
import Header from './Header';
import Modal from './Modal';
import MainContent from './MainContent';
import '../assets/styles/ug-grid.css';
import '../assets/styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			films: [],
			searchResults: [],
			currentFilm: null,
			isOpen: false,
		}
	}

	currentFilm = (film) => {
		this.setState({
			currentFilm: film
		})
		this.toggleModal();
	}
	toggleModal = () => {
			this.setState({
				isOpen: !this.state.isOpen,
			});
	}

	searchFilm = (userInput) => {
		const film = userInput;
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${film}`;
		fetch(`${url}`)
			.then(res => res.json())
			.then(
				(result) => {
					if (result.results.length > 0 && result.results !== undefined) {
						let firstFive = result.results.slice(0, 5);
						this.setState({
							searchResults: firstFive
						})
					}
				},
				(error) => {
					alert("Couldn't reach the API server")
				}
			)
	}
	resetSearchResults = () => {
		this.setState({ searchResults : [] })
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
	      	<Header
						search={this.searchFilm}
						searchResults={this.state.searchResults}
						resetSearchResults = {this.resetSearchResults}
						currentFilm={this.currentFilm}
					 />
					<MainContent
						films={this.state.films}
						currentFilm={this.currentFilm} />
					<Modal
						show={this.state.isOpen}
						onClose={this.toggleModal}
						film={this.state.currentFilm}
					 />
			</div>
    );
  }
}

export default App;
