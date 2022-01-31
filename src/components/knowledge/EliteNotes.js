import React from 'react';

function Outline() {
	return (
		<ul className='horizontal'>
			<li>
				<a href='#mining'>mining</a>
				<ul>
					<li>
						<a href='#miningOutfitting'>outfitting</a>
					</li>
					<li>
						<a href='#miningLocations'>locations</a>
					</li>
					<li>
						<a href='#miningHowTo'>how to</a>
					</li>
					<li>
						<a href='#miningSelling'>selling</a>
					</li>
				</ul>
			</li>
			{/*<li>
				<a href='#trading'>trading</a>
				<ul>
					<li>
						<a href='#tradingOutfitting'>outfitting</a>
					</li>
					<li>
						<a href='#tradingInGame'>in game</a>
					</li>
					<li>
						<a href='#tradingExternal'>external tools</a>
					</li>
				</ul>
			</li>
			<li>
				<a href='#exploration'>exploration</a>
				<ul>
					<li>
						<a href='#explorationShips'>ships</a>
					</li>
					<li>
						<a href='#explorationOutfitting'>outfitting</a>
					</li>
				</ul>
			</li>
			<li>
				<a href='#combat'>combat</a>
				<ul>
					<li>
						<a href='#combatOutfitting'>outfitting</a>
					</li>
					<li>
						<a href='#combatLocations'>locations</a>
					</li>
				</ul>
			</li>
			<li>
				<a href='#bounty'>bounty hunting</a>
				<ul>
					<li>
						<a href='#bountyOutfitting'>outfitting</a>
					</li>
					<li>
						<a href='#bountyLocations'>locations</a>
					</li>
				</ul>
			</li>
			<li>
				<a href='#piracy'>piracy</a>
				<ul>
					<li>
						<a href='#piracyOutfitting'>outfitting</a>
					</li>
					<li>
						<a href='#piracyLocations'>locations</a>
					</li>
				</ul>
			</li>**/}
		</ul>
	);
}

function Mining() {
	return (
		<article id='mining'>
			<h2>Mining</h2>
			<p>So you want to start mining in Elite Dangerous. Great! As far as resource grinds go, mining in Elite has to be one of the most interesting and engaging I've ever experienced.  It is, however, pretty complicated to get started if you're new to the game.  To save you a couple hours of trial and error or a deep dive into YouTube or Google, I've written this small guide to get you started.</p>

			<section id='miningOutfitting' className='inset'>
				<h3>Outfitting</h3>
				<div className='inset'>
					<p>There are a few modules that are the absolute bare minimum required for mining.  From there, you can scale to add more modules to make mining easier and more profitable.</p>
					<h4>Required</h4>
					<ul>
						<li><p><strong>Mining Laser:</strong>  To extract resources from an asteroid, you will require at least one mining laser.  The are other tools for other types of mining, but a mining laser is where it starts.</p>
							<p>You can equip multiple lasers, but this does not mean should should equip as many lasers as possible.  Your collector limpet controller is most likely going to be your bottleneck while mining, so your lasers only need to extract well enough to keep up with that.  Adding too many lasers will only drain your power distributor that much faster.</p></li>
						<li><p><strong>Cargo Rack:</strong>  You obviously need somewhere to put all of the rocks you're about to collect.  The more cargo space you can sqeeze into a ship, the better.</p></li>
						<li><p><strong>Refinery:</strong>  The rocks that will be ejected from the asteroids as you mine will only be fragments containing a mix of minerals.  To turn these into complete sellable items, you will need a refinery.  The fragment percentages will go into the refinery, and when you reach 100% of a particular mineral, it will be added as a single item into your cargo hold.</p></li>
					</ul>
					<h4>Essential</h4>
					<ul>
						<li><p><strong>Collector Limpet Controller:</strong>  Limpets are small drones that can be programmed to perform a variety of tasks.  One such task is retreiving collectable items near your ship.  Collector limpets are essential for mining.  Without limpets to collect your mineral fragments, you will be forced to fly around and collect them manually, which is obviously tedious and time consuming.</p></li>
						<li><p><strong>Limpets:</strong>  Limpet controllers do not come with limpets.  Though the expectation for a limpet controller might be that limpets are like ammo, this is sadly not the case.  Limpets are stored in cargo space until they are used.  Because they are cargo and not ammo, they will not be restocked by the quick restock button at a station.  They must be restocked manually via Advanced Maintenance.  The optimal amount of limpets to carry will depend on how the amount of limpets your controllers can support and how fast you are mining.  Fill up your cargo half way with limpets.  Add or remove limpets in subsequent trips as you learn how many you need.  Do not be afraid to jettison extra limpets if you run out of cargo space.  The minerals you are mining are more valuable than limpets.</p>
							<p><em>DO NOT FORGET TO RESTOCK LIMPETS BEFORE YOU GO MINING.</em></p></li>
					</ul>
					<h4>Helpful</h4>
					<ul>
						<li><p><strong>Prospector Limpet Controller:</strong>  Asteroids are made up of a variety of minerals.  Not all of these minerals are of equal value.  A prospector limpet controller can program a limpet drone that will fly to an asteroid, scan it, and tell you its composition.  From there you can choose which asteroids are worth your time to mine and which can be ignored.  To see the scan results, target the prospector limpet.  Without prospector limpets, the best way to determine the composition of an asteroid is to begin mining it and observe the mineral fragments that it produces.</p></li>
						<li><p><strong>Detailed Surface Scanner:</strong>  A DSS isn't just for scanning planets.  Probes can also be fired into rings, revealing hotspots for valuable minerals.</p></li>
					</ul>
					<h4>Advanced</h4>
					<ul>
						<li><p><strong>Abrasion Blaster:</strong>  Some asteroids will have visible surface deposits of minerals that look like a clump of crystals.  These deposits contain much larger fragments when mined.  Lasers alone are unable to break up these deposits.  Instead, you will need an abrasion blaster.</p></li>
						<li><p><strong>Sub-surface Displacement Missile:</strong>  When scanned, some asteroids will have sub-surface deposits.  To extract fragments from these deposits, you will need a sub-surface displacement missle.  A missile is fired into the deposit and a timing minigame follows.  If done correctly, numerous large fragments are extracted.  The details of how the subsurface mining minigame works will be covered later.</p></li>
					</ul>
					<h4>Core Mining</h4>
					<ul>
						<li><p><strong>Pulse Wave Analyzer:</strong>  This utility can be used to highlight asteroids with valuable sub-surface and core deposits.  This does not indicate what minerals the asteroids will contain, only that deposits will be present, and as such is not a useful tool for laser mining alone.</p></li>
						<li><p><strong>Seismic Charge Launcher:</strong>  Scanning an asteroid with a prospector limpet may sometimes reveal fissures.  These fissures are an indication of core deposits.  The seismic charge launcher fires charges into these fissures to crack open an asteroid and gain access to large, valuable, core mineral deposits.  Similar to sub-surface displacement missles, there is a mini game associated with seismic charges that will be covered later.</p></li>
					</ul>
					<h4>Guns?</h4>
					<p>If going to be mining in high population, high risk sites, you might want throw on a few guns to deter pesky pirates.  However, given that many of the best and most common mining ships have poor maneuverability, your best choice is avoidance.  Mining spots are extremely large areas and it's not hard to stay away from other people entirely.</p>
				</div>
			</section>

			<section id='miningLocations' className='inset'>
				<h3>Locations</h3>
				<div className='inset'>
					<p>You will find asteroids to mine in asteroid belt clusters and planetary rings, rings containing significantly more astroids (and other commanders).  Where you should mine depends very much on what you want to mine and how you want to mine it.  The following table shows where to find what kind of minerals, how they can be mined, and an approximation of their value.</p>

					<MineralTable />

					<p>You can find mining spots in-game using the galaxy map.  Look for systems with IndustriaL, Refinery, or Extraction type economies.  From there, look at their system maps to find planetary rings and their composition.  If you have outfitted with a detailed surface scanner module, fire a probe into each of a planet's rings to reveal hotspots of valuable minerals.  Keep an eye out for overlapping hotspots as this will increase your odds of finding valuable asteroid compositions.</p>
				</div>
			</section>

			<section id='miningHowTo' className='inset'>
				<h3>How to Mine</h3>
				<div className='inset'>
					<p>At last!  You have your ship outfitted and you've arrived at a mining location.  Now what?</p>

					<h4>Pirates</h4>
					<p>The first thing you should do is sit on your ass for a minute because NPC pirates are likely to spawn in resource extraction sites.  Give them a minute to scan you, see your empty cargo, insult you, and fly away.</p>
					<p>While on the subject of pirates, you should know how to jettison cargo (and how to do it quickly) should find yourself targetted by a pirate.  Got to the inventory tab of your ship panel.  From there you can select items in your inventory and choose an amount to jettison or abandon.</p>
					<p>If I pirate does make demands, they will ask for either a certain number of tons of a specific item or a certain amount of credits worth of cargo.  Get ready to do some simple math with a gun to your head because they will also only give you 15 seconds to respond before they start shooting.</p>

					<h4>Fire Groups</h4>
					<p>If you didn't already do so after outfitting, you will need to set fire groups for the hardpoints, utilities, and active modules under your control.  This is done from the Fire Groups tab in your ship panel.  You will see a long list of everything you can control.  You can then choose to bind things to primary or secondary fire within the fire group.  Because there are so many things to control while mining, you will be switching between fire groups frequently.</p>
					<p>One thing worth noting about collector limpet controllers is that they will never launch more limpets than they can control.  This is not true for the a prospector limpet controller, which will kill an old prospector limpet when firing a new one.  You can take advantage of this in your fire groups by binding your collector limpet controller to the action as your mining lasers.  This way you will maintain the max number of collectors any time you are using your lasers.</p>
					<p>Here is an example of fire groups for a basic laser mining ship:</p>

					<h6>Group A</h6>
					<ul>
						<li>(1) Collector Limpet Controller</li>
						<li>(1) Mining Laser</li>
						<li>(1) Mining Laser</li>
						<li>(2) Prospector limpet</li>
					</ul>

					<p>Here is an example of fire groups for a well-rounded mining ship:</p>
					<h6>Group A</h6>
					<ul>
						<li>(1) Pulse Wave Analyzer</li>
						<li>(2) Prospector Limpet Controller</li>
					</ul>
					<h6>Group B</h6>
					<ul>
						<li>(1) Collector Limpet Controller</li>
						<li>(1) Mining Laser</li>
						<li>(2) Abrasion Blaster</li>
					</ul>
					<h6>Group C</h6>
					<ul>
						<li>(1) Sub-Surface Displacement Missile</li>
						<li>(2) Seismic Charge Launcher</li>
					</ul>

					<p>Experiment and find the most intuitive groups for your mining process.</p>

					<h4></h4>
				</div>
			</section>

			<section id='miningSelling'>
				<h3>Selling</h3>
				<p></p>
			</section>
		</article>
	);
}

function MineralTable() {
	return (
		<table>
			<thead>
				<tr>
					<th>Mineral</th>
					<th>Value</th>
					<th>Core-Mine In:</th>
					<th>Laser-Mine In</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Alexandrite</strong></td>
					<td>200k</td>
					<td>Icy, Rocky, Metal-Rich</td>
					<td><NotApplicable /></td>
				</tr>
				<tr>
					<td>Bauxite</td>
					<td>2k</td>
					<td><NotApplicable /></td>
					<td>Rocky</td>
				</tr>
				<tr>
					<td><strong>Benitoite</strong></td>
					<td>175k</td>
					<td>Rocky</td>
					<td><NotApplicable /></td>
				</tr>
				<tr>
					<td>Bertrandite</td>
					<td>20k</td>
					<td><NotApplicable /></td>
					<td>Metallic, Metal-Rich</td>
				</tr>
				<tr>
					<td>Bromellite</td>
					<td>50k</td>
					<td>Icy</td>
					<td>Icy</td>
				</tr>
				<tr>
					<td>Cobalt</td>
					<td>5k</td>
					<td><NotApplicable /></td>
					<td>Rocky</td>
				</tr>
				<tr>
					<td>Coltan</td>
					<td>5k</td>
					<td><NotApplicable /></td>
					<td>Metal-Rich, Rocky</td>
				</tr>
				<tr>
					<td>Gallite</td>
					<td>10k</td>
					<td><NotApplicable /></td>
					<td>Metallic, Metal-Rich, Rocky</td>
				</tr>
				<tr>
					<td>Gold</td>
					<td>50k</td>
					<td><NotApplicable /></td>
					<td>Metallic, Metal-Rich</td>
				</tr>
				<tr>
					<td><strong>Grandidierite</strong></td>
					<td>200k</td>
					<td>Icy</td>
					<td><NotApplicable /></td>
				</tr>
				<tr>
					<td>Hydrogen Peroxide</td>
					<td>3k</td>
					<td><NotApplicable /></td>
					<td>Icy</td>
				</tr>
				<tr>
					<td>Indite</td>
					<td>10k</td>
					<td><NotApplicable /></td>
					<td>Metallic, Metal-Rich, Rocky</td>
				</tr>
				<tr>
					<td>Lepidolite</td>
					<td>1k</td>
					<td><NotApplicable /></td>
					<td>Metal-Rich, Rocky</td>
				</tr>
				<tr>
					<td>Liquid Oxygen</td>
					<td>1k</td>
					<td><NotApplicable /></td>
					<td>Icy</td>
				</tr>
				<tr>
					<td>Lithium Hydroxide</td>
					<td>5k</td>
					<td><NotApplicable /></td>
					<td>Icy</td>
				</tr>
				<tr>
					<td><strong>Low-Temperature Diamonds</strong></td>
					<td>125k</td>
					<td>Icy</td>
					<td>Icy</td>
				</tr>
				<tr>
					<td>Methane Clathrate</td>
					<td>1k</td>
					<td><NotApplicable /></td>
					<td>Icy</td>
				</tr>
				<tr>
					<td>Methanol Monohydrate Crystals</td>
					<td>2k</td>
					<td><NotApplicable /></td>
					<td>Icy</td>
				</tr>
				<tr>
					<td><strong>Monazite</strong></td>
					<td>250k</td>
					<td>Metallic, Metal-Rich, Rocky</td>
					<td><NotApplicable /></td>
				</tr>
				<tr>
					<td>Musgravite</td>
					<td>250k</td>
					<td>Rocky</td>
					<td><NotApplicable /></td>
				</tr>
				<tr>
					<td><strong>Osmium</strong></td>
					<td>75k</td>
					<td><NotApplicable /></td>
					<td>Metallic, Metal-Rich</td>
				</tr>
				<tr>
					<td><strong>Painite</strong></td>
					<td>???k</td>
					<td>Metallic, Metal-Rich</td>
					<td>Metallic</td>
				</tr>
				<tr>
					<td>Palladium</td>
					<td>50k</td>
					<td><NotApplicable /></td>
					<td>Metallic</td>
				</tr>
				<tr>
					<td><strong>Platinum</strong></td>
					<td>100k</td>
					<td>Metallic, Metal-Rich</td>
					<td>Metallic</td>
				</tr>
				<tr>
					<td>Praseodymium</td>
					<td>8k</td>
					<td><NotApplicable /></td>
					<td>Metallic, Metal-Rich</td>
				</tr>
				<tr>
					<td><strong>Rhodplumsite</strong></td>
					<td>200k</td>
					<td>Metallic, Metal-Rich</td>
					<td><NotApplicable /></td>
				</tr>
				<tr>
					<td>Rutile</td>
					<td>3k</td>
					<td><NotApplicable /></td>
					<td>Rocky</td>
				</tr>
				<tr>
					<td>Samarium</td>
					<td>25k</td>
					<td><NotApplicable /></td>
					<td>Metallic, Metal-Rich, Rocky</td>
				</tr>
				<tr>
					<td><strong>Serendibite</strong></td>
					<td>200k</td>
					<td>Metallic, Metal-Rich,Rocky</td>
					<td><NotApplicable /></td>
				</tr>
				<tr>
					<td>Silver</td>
					<td>50k</td>
					<td><NotApplicable /></td>
					<td>Metallic, Metal-Rich</td>
				</tr>
				<tr>
					<td>Tritium</td>
					<td>50k</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>Uraninite</td>
					<td>3k</td>
					<td><NotApplicable /></td>
					<td>Metal-Rich, Rocky</td>
				</tr>
				<tr>
					<td><strong>Void Opals</strong></td>
					<td>150k</td>
					<td>Icy</td>
					<td><NotApplicable /></td>
				</tr>
				<tr>
					<td>Water</td>
					<td>Low</td>
					<td><NotApplicable /></td>
					<td>1k</td>
				</tr>
			</tbody>
		</table>
	);
}

function NotApplicable() {
	return (<i className='muted'>n/a</i>);
}

export default function Template() {
	return (
		<>
			<h1 className='invert sticky'>Elite Dangerous</h1>
			<Outline/>
			<hr />
			<Mining />

			<hr />
			<h2>Misc notes</h2>
			<h3>Surface Mining <small>(Lasers)</small></h3>
			<ul>
				<li>This may be the only type of mining where overlapping hotspots matter.  Resources gained from laser mining are determined by asteroid composition and overlapping hotspots means greater chances for asteroids composed of those valuable resources.</li>
				<li>Buy a large enough refinery.  Managing the hopper is annoying and I was having to the that with a 5 bin.</li>
				<li>You can ignore resource fragments of a specified type through your contacts menu</li>
			</ul>
			<h3>Sub-surface Mining <small>(Sub-surface Displacement Missiles)</small></h3>
			<ul>
				<li>You need a sub-surface displacement missile, which comes in a 1 and 2 size (i dont know if there is a difference in yield. maybe just ammo).</li>
				<li>Good option for small ships because it doesnt require a size 2 slot</li>
				<li>It's a timing mini-game where you release the trigger in the sweet spots indicated in the graph that appears</li>
			</ul>
			<h3>Deep Core Mining <small>(Seismic Charges)</small></h3>
			<ul>
				<li>Requires size 2 slot for seismic changes</li>
				<li>I don't think overlapping hotspots matter because the rarity is in presence of core asteroids, not their composition.</li>
				<li>You're looking for very bright asteroids with your pulse wave analyzer.  You should see fissures when you prospect.</li>
				<li>Refinery matters less because the variety of resources you get is smaller</li>
				<li>Another timing mini-game.  Your trigger hold before firing the torpedo determines its strength. You're trying the end up with a total strength for all charges within the sweet spot on the graph.  If you overshoot, you can disable a charge via the context menu.  You cannot fire more than one charge into the same fissure.</li>
				<li>The detonation timer is only a minute or two.  Be far enough away before it blows. At least 1km, I think.</li>
				<li>When the asteroid cracks, it will reveal a bunch of surface deposits within.  Shoot them with an abrasion blaster to collect them.</li>
			</ul>
		</>
	);
}