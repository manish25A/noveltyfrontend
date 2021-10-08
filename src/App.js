import './App.css';

import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import TranscationPage from './Components/Transcation';
import Dashboard from './Components/Dashboard';
function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Route exact path='/' component={HomePage} />
				<Route exact path='/transcation' component={TranscationPage} />
				<Route exact path='/dashboard' component={Dashboard} />
			</Router>
		</div>
	);
}

export default App;
