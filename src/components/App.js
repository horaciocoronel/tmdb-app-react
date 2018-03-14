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
					console.log(result);
				},
				(error) => {
					alert("Couldn't reach the API server")
				}
			)
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
					<MainContent
						films={this.state.films}
						currentFilm={this.currentFilm} />
					<Modal
						show={this.state.isOpen}
						onClose={this.toggleModal}
						film={this.state.currentFilm}
					 />
					 {console.log(this.searchFilm('selena'))}
			</div>
    );
  }
}

export default App;
