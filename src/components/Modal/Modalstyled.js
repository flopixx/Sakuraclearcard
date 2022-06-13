import styled from "styled-components";
import { MdClose } from "react-icons/md";
export const Overley = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
  }
`;
export const Container = styled.div`
  position: relative;
  width: 500px;
  max-height: 500px;
  background: #000000;

  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 200px;
    max-height: 1000px;
  }
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
`;
export const Details = styled.div`
  text-align: center;

  h2 {
    padding: 20px 0;
    color: #fe91ca;
    font-family: Delius Swash Caps;
  }
  h3 {
    font-family: "Lato", sans-serif;
    color: #ffedbc;
  }

  @media screen and (max-width: 768px) {
    h2 {
      margin-bottom: 10px;
      font-size: 1.3rem;
    }
  }
`;

export const Title = styled.p`
  text-align: center;
  margin: 0.8125rem 0.9375rem;
  font-size: var(--fontmed);

  @media screen and (max-width: 768px) {
    font-size: var(--fontsmall);
  }
`;
export const Close = styled(MdClose)`
  font-size: 2.5rem;
  margin-bottom: 450px;
  color: #fff;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 1.875rem;
    color: #fff;
    width: 20px;
    height: 20px;
    margin: 0;
  }
`;
