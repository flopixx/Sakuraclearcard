import styled from "styled-components";
export const Containerr = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const Buton = styled.button`
  display: block;
  margin-right: 6px;
  border: none;
  background-color: #bf1363;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.3);

  transition: 0.2s;
  cursor: pointer;

  :hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.5);
    filter: none;
  }
  i {
    color: white;
    font-size: 1rem;
  }
  i:hover {
    filter: blur(1px);
  }
`;
