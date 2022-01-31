import React from 'react';
import {
	Switch,
	Route
} from "react-router-dom";

import StyleTest from './debug/StyleTest';
import StarCraftNotes from './knowledge/StarCraftNotes';
import JapaneseNotes from './knowledge/JapaneseNotes';
import GameDevNotes from './knowledge/GameDevNotes';
import PlanetsideNotes from './knowledge/PlanetsideNotes';
import EliteNotes from './knowledge/EliteNotes';
import AboutMe from './about/AboutMe';

export default function MainRouter() {
	return (
		<Switch>
			/* about */
			<Route path="/about-me" component={AboutMe}/>
			/* knowledge */
			<Route path="/game-dev-notes" component={GameDevNotes}/>
			<Route path="/japanese-notes" component={JapaneseNotes}/>
			<Route path="/star-craft-notes" component={StarCraftNotes}/>
			<Route path="/planetside-notes" component={PlanetsideNotes}/>
			<Route path="/elite-notes" component={EliteNotes}/>
			/* debug */
			<Route path="/style-test" component={StyleTest}/>
			/* default */
			<Route path="/">Welcome</Route>
		</Switch>
	);
}