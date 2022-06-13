import React, { useState, useEffect } from "react";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./charactersstyled.css";
import Nav from "../../components/Nav/Nav";

const Characters = () => {
	const [persons, setpersons] = useState(data);
	const [index, setindex] = useState(0);

	const nextSlide = () => {
		setindex((oldIndex) => {
			let index = oldIndex + 1;
			if (index > persons.length - 1) {
				index = 0;
			}
			return index;
		});
	};
	const prevSlide = () => {
		setindex((oldIndex) => {
			let index = oldIndex - 1;
			if (index < 0) {
				index = persons.length - 1;
			}
			return index;
		});
	};
	useEffect(() => {
		let slider = setInterval(() => {
			setindex((oldIndex) => {
				let index = oldIndex + 1;
				if (index > persons.length - 1) {
					index = 0;
				}
				return index;
			});
		}, 9000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);
	return (
		<>
			<section>
				<Nav />
				<div className='character__container'>
					<h1>
						Personajes <div>❤️</div>{" "}
					</h1>

					<div className='characters'>
						{persons.map((personajes, personajesIndex) => {
							const { id, image, name, title, details } = personajes;

							let position = "nextSlide";
							if (personajesIndex === index) {
								position = "activeSlide";
							}
							if (
								personajesIndex === index - 1 ||
								(index === 0 && personajesIndex === persons.length - 1)
							) {
								position = "lastSlide";
							}

							return (
								<article className={position} key={id}>
									<img src={image} alt={name} className='characters__image' />
									<h3 className='characters__name'>{name}</h3>
									<p className='characters__title'>{title}</p>
									<p className='characters__text'>{details}</p>
								</article>
							);
						})}
						<button className='characters__prev' onClick={prevSlide}>
							<FiChevronLeft />
						</button>
						<button className='characters__next' onClick={nextSlide}>
							<FiChevronRight />
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Characters;
