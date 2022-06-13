import React, { useState } from "react";

import Modal from "../Modal/Modal";

import { Container } from "./Botonstyledliberame";

const Boton = ({
  spanishName,
  englishName,
  kanji,
  Rōmaji,
  clowCard,
  cardNumber,
  meaning,
}) => {
  const [openmodal, setModal] = useState(false);

  return (
    <>
      <Container>
        <button onClick={() => setModal(!openmodal)}>Liberame!</button>
      </Container>
      <Modal
        clowCard={clowCard}
        meaning={meaning}
        spanishName={spanishName}
        englishName={englishName}
        kanji={kanji}
        Rōmaji={Rōmaji}
        openmodal={openmodal}
        setModal={setModal}
      />
    </>
  );
};

export default Boton;
