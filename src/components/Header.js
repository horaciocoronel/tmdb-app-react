import React, { Component } from 'react';
import SearchBar from './SearchBar';
import logo from '../assets/media/tmdb-logo-green.svg';

class Header extends Component {
  render() {
    return (
			<div>
				<header className="ug-row">
					<div className="ug-col-expand">
						<img src={logo} alt="logo" />
						<h1 className="menu-brand">TMDB App React</h1>
					</div>
				</header>
				<div className="ug-row search-bar">
					<SearchBar
						search={this.props.search}
						searchResults = {this.props.searchResults}
					 />
				</div>
			</div>
    );
  }
}

export default Header;
