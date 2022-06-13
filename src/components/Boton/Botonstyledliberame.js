import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffc8c8;
  text-align: center;
  padding: 1.25rem 1.25rem;
  z-index: -3;
  border-radius: 3%;
  transition: all 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: -100vh;
  :hover {
    transform: scale(1.1);
  }

  button {
    background-color: #f145d0;
    border: none;
    outline: none;
    padding: 0.625rem 1.25rem;
    border-radius: 7%;
    font-size: var(--fontsmall);
    color: #fcf8f3;
    font-weight: bold;
  }
`;
