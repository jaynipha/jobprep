import React from 'react';
import './pages.css';

const Home = () => {
	return (
		<div className="Home">
			<div className="HomeContainer">
				<h1 className="text-center mt-5">Ace your job interviews</h1>
				<p className="text-center mb-3">
					Prepare for job interviews with well crafted ai generated potential
					questions
				</p>
				<h1 className="text-center ">
					Get potential questions,answers, reviews and sample answers{' '}
				</h1>
				<form className="searchForm">
					<div className="input-group mb-3 search input-group-lg">
						<span className="input-group-text" id="basic-addon1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-search"
								viewBox="0 0 16 16"
							>
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</span>
						<input
							type="text"
							className="form-control searchBar"
							placeholder="Enter your job title"
							aria-label="Username"
							aria-describedby="basic-addon1"
						/>
					</div>
					<button type="button" class="btn btn-primary  searchButton">
						Search
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
