import React from 'react';
import './login.css';

const Login = () => {
	return (
		<div className="login">
			<form action="" className="loginForm">
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
					Login
				</button>
				<div className="resetLink text-center mb-3">
					<a href="/magic" className="active link ">
						Send a magic link
					</a>
				</div>
				<div className="resetLink text-center mb-3">
					<a href="#" className=" active link">
						Forgot Password?
					</a>
				</div>
				<div className="resetLink text-center ">
					<a href="#" className="active link">
						Register
					</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
