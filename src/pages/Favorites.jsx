import React, { useContext } from "react";

import Grid from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";

import { Favoritescontext } from "../Context/Favoritescontext";
import "./Fav.css";
import { Fav } from "./Favoritesstyled";

const Favorites = () => {
	const { favorites } = useContext(Favoritescontext);

	return (
		<>
			<div className='favorites__container'>
				<div className={favorites.length === 0 ? null : "favo"}>
					<Nav />

					<div className={favorites.length === 0 ? "noimage" : null}>
						<Grid header='Mis favoritos ❤️'>
							{favorites.map((card, index) => (
								<Fav>
									<img src={card.imagen} alt='{card.imagen}' key={index} />
								</Fav>
							))}
						</Grid>
					</div>
					{favorites.length === 0 ? <p>No tienes favoritos</p> : null}
				</div>
			</div>
		</>
	);
};

export default Favorites;
