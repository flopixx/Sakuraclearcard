import React, { useContext } from "react";
import { SakuraApicontext } from "../../Context/SakuraContext";
import { Buton, Containerr } from "./Botonesstyled";

const Botones = () => {
  const { prev, next, pageActual } = useContext(SakuraApicontext);
  return (
    <Containerr>
      {pageActual === 1 ? null : ( // si estoy en la pagina 1 no se ve el anterior
        <Buton onClick={prev}>
          <i class="fas fa-angle-double-left"></i>
        </Buton>
      )}{" "}
      {pageActual === 6 ? null : (
        <Buton onClick={next}>
          <i class="fas fa-angle-double-right"></i>
        </Buton>
      )}
    </Containerr>
  );
};

export default Botones;
