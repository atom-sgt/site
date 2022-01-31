import React, { Fragment } from 'react';

export default function StarCraftNotes() {
	return (
		<Fragment>
			<h1 className='invert'>StarCraft II</h1>
			<h3>Terran<small>(Thors &amp; Hellions)</small></h3>
			<p>
				Depot -&gt; barracks/gas -&gt; factory<br/>
				Call in Mules from Orbital CCs<br/>
				Fully sat? Expand<br/>
				Big bank? More production<br/>
				Goal: 11min max pop, ~80 SCV
			</p>

			<details>
				<summary>STEP 1: Main</summary>
				<ul>
					<li>
						First SCV -&gt; depot
					</li>
					<li>
						Barracks / Gas
					</li>
					<li>
						Orbital CC Upgrade
					</li>
					<li>
						Natural CC / Orbital CC upgrade
					</li>
				</ul>
			</details>
			<details>
				<summary>STEP 2: Natural</summary>
				<ul>
					<li>
						Main minerals full
					</li>
					<li>
						Main Gas
					</li>
					<li>
						Factory/tech Lab
					</li>
					<li>
						Tanks for defense
					</li>
				</ul>
			</details>
			<details>
				<summary>STEP 3: Third</summary>
				<ul>
					<li>
						Main fully saturated
					</li>
					<li>
						More factories/tech labs
					</li>
					<li>
						Engineering bay
					</li>
					<li>
						Armory
					</li>
					<li>
						3rd CC / Orbital CC upgrade
					</li>
					<li>
						Turrets?
					</li>
					<li>
						Natural minerals full
					</li>
					<li>
						Natural gas x 2
					</li>
				</ul>
			</details>
			<details>
				<summary>STEP 4: Army</summary>
				<ul>
					<li>
						Natural fully saturated
					</li>
					<li>
						Thors / Hellions
					</li>
					<li>
						Armory? (2nd)
					</li>
					<li>
						4th CC / Planetary upgrade
					</li>
					<li>
						Saturate/expand
					</li>
					<li>
						Cap SCVs at ~80
					</li>
					<li>
						Amass Thors/Hellions ftw
					</li>
				</ul>
			</details>
			<hr/>

			<h3>Protoss<small>(Oops All Stalkers)</small></h3>
			<p>
				Don't forget chrono boosts<br/> 
				Fully sat? Expand<br/> 
				Big bank? More production<br/> 
				Goal: 11min max, ~80 drone cap<br/> 
				Pylon -&gt; Gateway -&gt; Cyber core -&gt; Nexus -&gt; Pylon
			</p>

			<details>
				<summary>STEP 1: Main</summary>
				<ul>
					<li>First SCV -&gt; pylon</li>
					<li>Gateway (Cyber core -&gt; warp upgrade)</li>
					<li>Main minerals full</li>
					<li>Main gas 1</li>
					<li>Cyber core</li>
					<li>Gateway</li>
					<li>Main gas 2</li>
				</ul>
			</details>
			<details>
				<summary>STEP 2: Natural</summary>
				<ul>
					<li>Main fully saturated</li>
					<li>Build stalkers</li>
					<li>Natural Nexus</li>
					<li>Warp gate upgrade (@ cyber core)</li>
					<li>More gateways</li>
				</ul>
			</details>
			<details>
				<summary>STEP 3: Third</summary>
				<ul>
					<li>Natural minerals full</li>
					<li>Natural gas x 2</li>
					<li>More gateways</li>
					<li>Robo</li>
					<li>Forge</li>
					<li>3rd Nexus</li>
				</ul>
			</details>
			<details>
				<summary>STEP 4: Army</summary>
				<ul>
					<li>Natural fully saturated</li>
					<li>Twilight council</li>
					<li>3rd gas x 2</li>
					<li>3rd full sat</li>
					<li>4th Nexus</li>
					<li>Saturate/expand</li>
					<li>Templar archives?</li>
					<li>More gateways</li>
					<li>More stalkers</li>
					<li>More immortals</li>
				</ul>
			</details>
			<hr/>
			
			<h3>Zerg<small>(Mass Hyrdas)</small></h3>
			<p>
				Don't forget creep<br/> 
				Fully sat? Expand<br/> 
				Big bank? More production
				Goal: 9min max, ~80 drone cap<br/> 
				Roach defense, mass hyrda finish
			</p>
			<details>
				<summary>STEP 1: Main</summary>
				<ul>
					<li>Main minerals full</li>
					<li>Natural hatchery</li>
					<li>Spawning pool</li>
					<li>Main gas 1 @ 20</li>
					<li>Queens for each base</li>
					<li>Main gas 2</li>
					<li>Lair upgrade / Creep queen</li>
				</ul>
			</details>
			<details>
				<summary>STEP 2: Natural</summary>
				<ul>
					<li>Natural minerals full</li>
					<li>Roach warren</li>
					<li>3rd hatchery</li>
					<li>Natural gas x 2</li>
					<li>Evo chamber</li>
					<li>Roaches x ~10</li>
				</ul>
			</details>
			<details>
				<summary>STEP 3: Third</summary>
				<ul>
					<li>3rd minerals full</li>
					<li>Hyralisk den</li>
					<li>Evo chamber</li>
					<li>Gas x 2</li>
					<li>4th hatchery</li>
				</ul>
			</details>
			<details>
				<summary>STEP 4: Army</summary>
				<ul>
					<li>3rd fully saturated</li>
					<li>Saturate/expand</li>
					<li>Cap out at 80 drones</li>
					<li>Amass hyrdas</li>
					<li>Infestation pit</li>
					<li>Hive</li>
					<li>Ultralisks</li>
				</ul>
			</details>
		</Fragment>
	);
}