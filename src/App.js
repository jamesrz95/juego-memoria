import styled from "styled-components";
// import components
import Card from "./components/Card";

function App() {
  return (
    <Wrapper>
      <Header>
        <h1>Welcome to Memoramas Test</h1>
      </Header>
      <LayoutGame>
        <Card />
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
  height: 70vh;
  width: 80vw;
  background: white;
  border-radius: 1rem;
`;

const Header = styled.div`
  height: 5rem;
  width: 80vw;
  background: white;
  border-radius: 1rem;
  margin-bottom: 10px;

  h1 {
    padding: 15px;
  }
`;

export default App;
