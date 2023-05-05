import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import MagicLink from './pages/MagicLink';
import Chat from './pages/Chat';
import { Thankyou } from './pages/Thankyou';
import { Error } from './pages/Error';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Nav />
			<BrowserRouter>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/magic" element={<MagicLink />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/thanks" element={<Thankyou />} />
						<Route path="*" element={<Error />} />



					</Routes>

				</main>

			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
