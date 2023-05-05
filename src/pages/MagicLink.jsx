import React from 'react';
import './login.css';

const MagicLink = () => {
	return (
		<div className="login">
			<form action="" className="loginForm">
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						Email address
					</label>
					<input
						type="email"
						class="form-control form-control-lg magic"
						id="exampleFormControlInput1"
						placeholder="enter your email"
					/>
				</div>

				<button type="button" class="btn btn-primary loginButton">
					receive magic link
				</button>
				<div className="resetLink text-center mt-3">
					<a href="/login" className="active link ">
						already have an account ? login
					</a>
				</div>
			</form>
		</div>
	);
};

export default MagicLink;
