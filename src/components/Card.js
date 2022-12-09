import styled from "styled-components";

const Card = () => {
  return (
    <CardStyle>
      <h1>Card</h1>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  height: 16rem;
  width: 5rem;
  background: blue;
`;

export default Card;
