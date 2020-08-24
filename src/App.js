import React from 'react';
import MainNav from './components/MainNav';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';

function App() {
	return (
		<div className="main-layout card">
			<MainHeader/>
			<MainNav/>
			<MainContent/>
		</div>
	);
}

export default App;
