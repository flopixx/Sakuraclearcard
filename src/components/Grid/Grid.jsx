import React from "react";
import { Container, Wrapper } from "./Gridstyled";

const Grid = ({ header, children }) => {
	return (
		<Container>
			<h1>{header}</h1>
			<Wrapper>{children}</Wrapper>
		</Container>
	);
};

export default Grid;
