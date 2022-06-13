import React, { useState } from "react";

import sakura from "../../img/Wiki-wordmark.png";
import { Link } from "react-router-dom";
import Themeboton from "../Themeboton/Themeboton";
import "./Nav.css";

const Nav = () => {
	const [isOpen, setopen] = useState(false);

	const handleclick = () => {
		setopen(!isOpen);
	};
	return (
		<header>
			<div className='navbar'>
				<Link to='/Homecarts'>
					<img src={sakura} alt='sakuralogo' />
				</Link>
				<div className='navbar__menu' onClick={handleclick}>
					<div>&#9776;</div>
				</div>
				<div className={isOpen ? "circleopen" : "circle"}>
					<div className='navbar__links'>
						<Link to='/homecarts' className='wavy'>
							Clow cards
						</Link>
						<Link to='/sakuracards' className='wavy'>
							Sakura cards
						</Link>
						<Link to='/favorites' className='wavy'>
							My favorites
						</Link>

						<Link to='/personajes' className='wavy'>
							Characters
						</Link>

						<Themeboton />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Nav;
