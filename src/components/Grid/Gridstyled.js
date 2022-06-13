import styled from "styled-components";

export const Container = styled.div`
	max-width: 1250px;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	// display: flex; movil

	padding: 3.125rem 3.125rem;
	h1 {
		font-family: "Lato", sans-serif;
		color: #ffedbc;
		word-spacing: 3px;
		letter-spacing: 3px;
		position: absolute;
		top: 100px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 auto;
	padding-top: 2.5rem;
`;
