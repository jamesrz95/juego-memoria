import Card from "./Card";
//import cards list
import cards from "../data";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ListCards = ({ turns, setTurns }) => {
  const [cardsGame, setCardsGame] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const pairCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuidv4() }));
    setCardsGame(pairCards);
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

  const resetGame = () => {
    setCardsGame([]);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.img === choiceTwo.img && choiceOne.id !== choiceTwo.id) {
        setCardsGame((prevCards) => {
          return prevCards.map((card) => {
            if (card.img === choiceOne.img) {
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
  }, [choiceOne, choiceTwo]);

  console.log("New Cards: ", cardsGame);
  return (
    <WrapperList>
      {cardsGame.length === 0 ? (
        <button onClick={shuffleCards}>Start new Game</button>
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
  margin-bottom: 10rem;
`;
export default ListCards;
