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
						film={this.state.currentFilm}
						show={this.state.isOpen}
						onClose={this.toggleModal}
					 />
			</div>
    );
  }
}

export default App;
