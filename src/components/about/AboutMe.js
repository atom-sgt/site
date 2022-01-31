import React from 'react';

export default function AboutMe() {
	return (
		<>
			<p>My name is Adam.  I make things on computers from time to time.  I've been coding for about {new Date().getFullYear() - 2008} years now (primarily C# and js).  Check out <span className='txt-high'>projects</span> to see some of the things I'm working on.</p>
			<p>I also like to take notes to keep track of my thoughts.  Mostly video games, but a few other skills as well.  Take a look under <span className='txt-high'>knowledge</span>.</p>
			<p>This site is a love letter to lightweight web design and web 1.0 era personal websites.</p>
		</>
	);
}