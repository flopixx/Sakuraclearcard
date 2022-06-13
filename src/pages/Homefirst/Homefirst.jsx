import React from "react"; // styles
import { Wrapper, Footer } from "./Homefirststyled";

import logo from "../../img/Wiki-wordmark.png";
import sakura from "../../img/LogoSakura.png";

import { Link } from "react-router-dom";

// images

const Homefirst = () => {
  return (
    <>
      <Wrapper>
        <div className="logo animate__animated animate__fadeInLeftBig">
          <img src={logo} alt="sakura" />
        </div>

        <Link to="/homecarts">
          <div className="sakura animate__animated  animate__fadeInUpBig">
            <img src={sakura} alt="sakura" />
          </div>
        </Link>
      </Wrapper>

      <Footer>Created with 💖 by Florencia Velazquez</Footer>
    </>
  );
};

export default Homefirst;
