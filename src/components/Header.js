import React, { Component } from 'react';
import logo from '../assets/media/tmdb-logo-green.svg';

class Header extends Component {
  render() {
    return (
        <header className="ug-row">
					<div className="ug-col-expand">
	          <img src={logo} alt="logo" />
						<h1 className="menu-brand">TMDB App React</h1>
					</div>
        </header>
    );
  }
}

export default Header;
