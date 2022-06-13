import React, { useContext } from "react";
import { Carts } from "../../components/Cards/Cardsstyled";
import Boton from "../../components/Boton/Boton";

import { Favoritescontext } from "../../Context/Favoritescontext";

const Sakucard = ({ card }) => {
	const { addFavorite, removeFavorite, itemisFavorite } =
		useContext(Favoritescontext);
	const itemFav = itemisFavorite(card.cardNumber);

	const togglefavorite = () => {
		if (itemFav) {
			removeFavorite(card.cardNumber);
		} else {
			addFavorite({
				id: card.cardNumber,
				imagen: card.sakuraCard,
			});
		}
	};
	return (
		<>
			<Carts>
				<div className='card__container .html.sr'>
					<img src={card.sakuraCard} alt={card.spanishName} />
				</div>
				<div className='card__fav' onClick={togglefavorite}>
					{itemFav ? (
						<div>🖤</div>
					) : <div>❤️</div> && card.sakuraCard ? (
						<div>❤️</div>
					) : null}
				</div>

				{card.sakuraCard ? (
					<Boton
						spanishName={card.spanishName}
						englishName={card.englishName}
						kanji={card.kanji}
						Rōmaji={card.Rōmaji}
						clowCard={card.sakuraCard}
						cardNumber={card.cardNumber}
						meaning={card.meaning}
					/>
				) : null}
			</Carts>
		</>
	);
};

export default Sakucard;
