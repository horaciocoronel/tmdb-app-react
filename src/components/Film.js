import React, { Component } from 'react';

class Film extends Component {
  render() {
    return (
				<div class="ug-col-s-6 ug-col-m-4 ug-col-l-2"  key={this.props.film.id}>
					<h3>{this.props.film.title}</h3>
        </div>
    );
  }
}

export default Film;
