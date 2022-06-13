import React from "react";
import { Overley, Container, Card, Details, Close, Title } from "./Modalstyled";

const Modal = ({
  clowCard,
  meaning,
  spanishName,
  englishName,
  kanji,
  Rōmaji,
  openmodal,
  setModal,
}) => {
  return (
    <>
      {openmodal && (
        <Overley>
          <Container>
            <Card>
              <img src={clowCard} alt={spanishName} />
            </Card>

            <Details>
              <h2>{spanishName}</h2>
              <h3>Significado:</h3>
              <Title>{meaning}</Title>
              <h3>EnglishName:</h3>
              <Title>{englishName}</Title>
              <h3>Kanji:</h3>
              <Title>{kanji}</Title>
              <h3>Rōmaji:</h3>
              <Title>{Rōmaji}</Title>
            </Details>
            <Close onClick={() => setModal(false)} />
          </Container>
        </Overley>
      )}
    </>
  );
};

export default Modal;
