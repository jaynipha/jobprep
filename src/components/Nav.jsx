import React from 'react';
import './nav.css';

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					JobPrep.ai
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item"></li>
						<li className="nav-item"></li>
						<li className="nav-item dropdown">
							<ul className="dropdown-menu">
								<li></li>
								<li></li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li></li>
							</ul>
						</li>
						<li className="nav-item"></li>
					</ul>
					<ul className="navbar-nav me-5 mb-2 mb-lg-0">
						<li className="nav-item">
							<a href="#" className="nav-link active ">
								Community
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link active">
								FAQ's
							</a>
						</li>
						<li className="nav-item">
							<button type="button" class="btn btn-primary custom">
								join waitlist
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
