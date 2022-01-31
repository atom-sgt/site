import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import MainNav from './components/MainNav';
import MainHeader from './components/MainHeader';
import MainRouter from './components/MainRouter';

function App() {
	return (
		<Router>
			<div className="main-layout">
				<MainHeader/>
				<MainNav className='sticky'/>
				<div className="main-content">
					<MainRouter/>
				</div>
			</div>
		</Router>
	);
}

export default App;
