import React, { Component } from 'react';

class Modal extends Component {

  render() {
		if(!this.props.show) {
			return null;
		}
		const posterPathBase = ' http://image.tmdb.org/t/p/w300';
    return (

			<div className="ug-row">
				<div className="ug-col-12">
					<div className="ug-row">
						{console.log(this.props.film.id)}
					</div>
				</div>
			</div>
    );
  }
}

export default Modal;
