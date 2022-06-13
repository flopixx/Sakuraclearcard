import React, { useContext } from "react";
import { Carts } from "./Cardsstyled";

import Boton from "../Boton/Boton";
import { Favoritescontext } from "../../Context/Favoritescontext";

const Card = ({
	spanishName,
	englishName,
	kanji,
	Rōmaji,
	appeardManga,
	appeardAnime,
	clowCard,
	cardNumber,
	meaning,
	key,
}) => {
	// animacion
	// let imagen = {
	//animaciones
	//    duration: 3000,
	//    origin: "bottom",
	//    distance: "-800px",
	//    delay: 250,
	// };
	// ScrollReveal().reveal(".cont", imagen);
	const { addFavorite, removeFavorite, itemisFavorite } =
		useContext(Favoritescontext);
	const itemFav = itemisFavorite(cardNumber);

	const togglefavorite = () => {
		if (itemFav) {
			removeFavorite(cardNumber);
		} else {
			addFavorite({
				id: cardNumber,
				imagen: clowCard,
			});
		}
	};

	return (
		<>
			<Carts>
				<div className='card__container .html.sr'>
					<img src={clowCard} />
				</div>
				<div className='card__fav' onClick={togglefavorite}>
					{itemFav ? (
						<div>🖤</div>
					) : <div>❤️</div> && clowCard ? (
						<div>❤️</div>
					) : null}
				</div>

				{clowCard ? (
					<Boton
						spanishName={spanishName}
						englishName={englishName}
						kanji={kanji}
						Rōmaji={Rōmaji}
						clowCard={clowCard}
						cardNumber={cardNumber}
						meaning={meaning}
					/>
				) : null}
			</Carts>
		</>
	);
};

export default Card;
