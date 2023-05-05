import React from 'react';
import './login.css';

const Register = () => {
	return (
		<div className="login">
			<form action="" className="loginForm">
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						Your name
					</label>
					<input
						type="text"
						class="form-control magic "
						id="exampleFormControlInput1"
						placeholder="John doe"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">
						Email address
					</label>
					<input
						type="email"
						class="form-control  magic "
						id="exampleFormControlInput1"
						placeholder="name@example.com"
					/>
				</div>
				<div class="mb-3">
					<label for="inputPassword5" class="form-label">
						Password
					</label>
					<input
						type="password"
						id="inputPassword5"
						class="form-control  magic  "
						aria-labelledby="passwordHelpBlock"
					/>
				</div>
				<button type="button" class="btn btn-primary loginButton">
					Register
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

export default Register;
