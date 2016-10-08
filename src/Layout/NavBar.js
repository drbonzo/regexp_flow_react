import React, {Component} from 'react';

class NavBar extends Component {
	render() {
		return (
			<div className="NavBar">
				<nav className="navbar navbar-default navbar--no-bottom-margin">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"/>
								<span className="icon-bar"/>
								<span className="icon-bar"/>
							</button>
							<a className="navbar-brand" href="#">RegexpFlow 2.0</a>
						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li className="active"><a href="#/editor">Editor <span className="sr-only">(current)</span></a></li>
								<li><a href="#/library">Library</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default NavBar;