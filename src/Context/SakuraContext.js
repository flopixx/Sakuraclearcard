import React, { createContext, useState, useEffect } from "react";

export const SakuraApicontext = createContext();

// provider es donde se encuentran las funciones y estados
export const SakuraProvider = (props) => {
  // crear estado
  const [cards, setCards] = useState([]);
  const [pageActual, setpageActual] = useState(1);

  useEffect(() => {
    const gett = async () => {
      const url = `https://protected-taiga-89091.herokuapp.com/api/card?pageSize=10&page=${pageActual} `;

      const resp = await fetch(url);
      const res = await resp.json();
      setCards(res.data);
      console.log(res);
    };

    gett();
  }, [pageActual]);

  const prev = () => {
    const nueva = pageActual - 1;
    if (nueva === 0) return;
    setpageActual(nueva);
  };
  const next = () => {
    const nueva = pageActual + 1;
    if (nueva > 55) return; // para no ir mas alla hasta 55 va
    setpageActual(nueva);
  };

  return (
    <SakuraApicontext.Provider
      value={{
        cards,
        prev,
        next,
        pageActual,
      }}
    >
      {props.children}
    </SakuraApicontext.Provider>
  );
};
export default SakuraProvider;
