import React, { useContext } from "react";
import { Themecontextt } from "../../Context/Themecontext";

import { Icon, Light, Dark } from "./Themebotonstyled";

const Themeboton = () => {
  const { Theme, toglleTheme } = useContext(Themecontextt);
  let iconn = Theme === "light" ? <div>🌞</div> : <div>🌙</div>;

  return <Icon onClick={toglleTheme}>{iconn}</Icon>;
};

export default Themeboton;
