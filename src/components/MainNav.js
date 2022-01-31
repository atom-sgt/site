import React from 'react';
import { Link } from 'react-router-dom';

export default function MainNav() {
	return (
		<nav className="main-nav sticky card">
			<h6>about</h6>
			<ul>
				<li>
					<Link to="/about-me">me</Link>
				</li>
				<li>
					<a href="https://github.com/atom-sgt">github</a>
				</li>
			</ul>

			<h6>projects</h6>
			<ul>
				<li>
					<Link to="/">test</Link>
				</li>
			</ul>

			<h6>tutorials</h6>
			<ul>
				<li>
					<Link to="/">test</Link>
				</li>
			</ul>

			<h6>knowledge</h6>
			<ul>
				<li>
					<Link to="/game-dev-notes">game dev</Link>
				</li>
				<li>
					<Link to="/japanese-notes">japanese</Link>
				</li>
				<li>
					<Link to="/star-craft-notes">starcraft</Link>
				</li>
				<li>
					<Link to="/planetside-notes">planetside</Link>
				</li>
				<li>
					<Link to="/elite-notes">elite dangerous</Link>
				</li>
			</ul>

			<h6>debug</h6>
			<ul>
				<li>
					<Link to="/style-test">style test</Link>
				</li>
			</ul>

			<h6>external links</h6>
			<ul>
				<li>
					<a href="https://www.w3schools.com/cssref/css_default_values.asp">css default values</a>
				</li>
			</ul>
		</nav>
	);
}