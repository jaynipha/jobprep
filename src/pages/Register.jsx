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
						class="form-control form-control-lg"
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
						class="form-control form-control-lg"
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
						class="form-control form-control-lg"
						aria-labelledby="passwordHelpBlock"
					/>
				</div>
				<button type="button" class="btn btn-primary loginButton">
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
