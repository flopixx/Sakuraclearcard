import React, { useContext } from "react";
import Nav from "../../components/Nav/Nav";
import "./Sakura.css";
import Grid from "../../components/Grid/Grid";
import Botones from "../../components/Botones/Botones";

// context

import { SakuraApicontext } from "../../Context/SakuraContext";
import { Themecontextt } from "../../Context/Themecontext";
import Sakucard from "./Sakucard";

const Sakuracards = () => {
	const { cards } = useContext(SakuraApicontext);
	const { Theme } = useContext(Themecontextt);

	return (
		<div className={Theme === "dark" ? "light" : "dark"}>
			<Nav />
			<Grid header='Sakura cards'>
				{cards.map((card, index) => {
					return <Sakucard card={card} key={index} />;
				})}
			</Grid>
			<Botones />
		</div>
	);
};

export default Sakuracards;
