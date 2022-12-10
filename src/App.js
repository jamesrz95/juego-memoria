import styled from "styled-components";
// import components
import ListCards from "./components/listCards";

function App() {
  return (
    <Wrapper>
      <Header>
        <h1>Welcome to Memoramas Test</h1>
      </Header>
      <LayoutGame>
        <ListCards />
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
  background: white;
  border-radius: 1rem;
  margin-bottom: 10px;

  h1 {
    padding: 15px;
  }
`;

export default App;
