import styled from "styled-components";
import imge from "../../img/YareYareDesu.gif";

export const Wrapper = styled.div`
  position: relative;
  background: url(${imge});
  min-height: 120vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  img {
    width: 200px;
    cursor: pointer;
  }

  .logo {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }

  .sakura {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 110vh;
  }
`;
export const Footer = styled.h4`
  text-align: center;
  background-color: #e78fb3;
`;
