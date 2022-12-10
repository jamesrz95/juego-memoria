import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "../Modal";

//import cards list
import cards from "../data";
// import styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const ListCards = ({ setTurns, setCardsRemaining, cardsRemaining, turns }) => {
  const [cardsGame, setCardsGame] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const shuffleCards = () => {
    const pairCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuidv4() }));
    setCardsGame(pairCards);
    setCardsRemaining(pairCards.length);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const restTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.img === choiceTwo.img && choiceOne.id !== choiceTwo.id) {
        setCardsGame((prevCards) => {
          return prevCards.map((card) => {
            if (card.img === choiceOne.img) {
              setCardsRemaining(cardsRemaining - 2);
              return { ...card, isMatch: true };
            } else {
              return card;
            }
          });
        });
        restTurn();
      } else {
        setTimeout(() => restTurn(), 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choiceOne, choiceTwo]);
  useEffect(() => {
    if (cardsRemaining === 0) setOpenModal(true);
  }, [cardsRemaining]);

  console.log("New Cards: ", cardsGame);
  return (
    <WrapperList>
      <Modal openModal={openModal} turns={turns} />
      {cardsGame.length === 0 ? (
        <motion.button
          onClick={shuffleCards}
          whileTap={{ background: "#f52576" }}
        >
          Start new Game
        </motion.button>
      ) : (
        ""
      )}
      {cardsGame &&
        cardsGame.map((item) => (
          <Card
            item={item}
            key={item.id}
            handleChoice={handleChoice}
            flipped={item === choiceOne || item === choiceTwo || item.isMatch}
          />
        ))}
    </WrapperList>
  );
};

const WrapperList = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 70px;
  margin-bottom: 15rem;

  button {
    height: 40%;
    width: 20%;
    font-size: 1.5rem;
    border: 2px solid #f52576;
    outline: 2px solid #0e141b;
    background: transparent;
    border-radius: 10px;
    outline-offset: -10px;
    transition: outline-offset 200ms ease;
    transition: all 200ms ease;
    cursor: pointer;
  }
  button:hover {
    border-radius: 20px;
    outline-offset: 2px;
    font-size: 1.8rem;
  }
`;
export default ListCards;
