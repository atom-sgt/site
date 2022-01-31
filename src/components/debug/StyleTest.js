import React from 'react';

export default function StyleTest() {
	return (
		<div>
			<h1>Heading 1</h1>
			default
			<h2>Heading 2</h2>
			default
			<h3>Heading 3</h3>
			default
			<h4>Heading 4</h4>
			default
			<h5>Heading 5</h5>
			default
			<h6>Heading 6</h6>
			default
			<hr/>

			<h1>Text:</h1>
			<div>
				<p>Paragaph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div>
				<blockquote>
					Block quote lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</blockquote>
			</div>
			<div>
				<u>Underline</u>
			</div>
			<div>
				<i>Italics</i>
			</div>
			<div>
				<b>Bold</b>
			</div>
			<div>
				<strong>Strong</strong>
			</div>
			<div>
				<em>Emphasis</em>
			</div>
			<div>
				Example<sub>Subscript</sub>
			</div>
			<div>
				Example<sup>Superscript</sup>
			</div>
			<div>
				Example <small>small</small>
			</div>
			<div>
				<var>variable</var>
			</div>
			<div>
				Example <abbr title="Abbreviation">Abbr.</abbr>
			</div>
			<div>
				Code example:
				<code>
{`if (true) {
	console.log('Hello World!');
}`}
				</code>
			</div>
			<div>
				Preformatted example:

				<pre>{`
pre
	for
		matt
			ed

lorem ipsum
	dolor sit amet,
		consectetur adipiscing elit,
	sed do eiusmod
tempor incididunt`}
				</pre>
			</div>
			<hr/>

			<h1>Links:</h1>
			<div>Lorem ipsum <a href="/style-test">hyperlink</a> dolor sit amet.</div>
			<hr/>

			<h1>Lists:</h1>
			Unordered list
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>

			Ordered list
			<ol>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ol>

			Description list
			<dl>
				<dt>
					Example term
				</dt>
				<dd>
					Example description
				</dd>
				<dt>
					Example term
				</dt>
				<dd>
					Example description
				</dd>
				<dt>
					Example term
				</dt>
				<dd>
					Example description
				</dd>
			</dl>
			<hr/>
		</div>
	);
}