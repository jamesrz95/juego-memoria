import { useState } from "react";
import styled from "styled-components";
// import components
import ListCards from "./components/listCards";

function App() {
  const [turns, setTurns] = useState(0);
  const [cardsRemaining, setCardsRemaining] = useState();

  return (
    <Wrapper>
      <Header>
        <h1>Welcome to Memoramas Test</h1>
        <div className="header-item">
          <p>
            Turn: <span>{turns}</span>
          </p>
          <p>
            Cards Remaining: <span>{cardsRemaining}</span>
          </p>
        </div>
      </Header>
      <LayoutGame>
        <ListCards
          setTurns={setTurns}
          setCardsRemaining={setCardsRemaining}
          cardsRemaining={cardsRemaining}
          turns={turns}
        />
      </LayoutGame>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #fb2576;
    font-size: 1.5rem;
  }
`;
const LayoutGame = styled.div`
  height: 80%;
  width: 90%;
  background: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  height: 5rem;
  width: 90vw;
  border-radius: 1rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  h1 {
    padding: 15px;
  }
  .header-item {
    position: absolute;
    display: flex;
    right: 200px;
    font-size: 1.5rem;
    color: white;
    border: 2px solid;
    border-radius: 10px;
    margin-left: 50px;
  }

  .header-item p {
    margin: 5px;
    padding: 5px;
  }
  .header-item span {
    color: #fb2576;
  }
`;

export default App;
