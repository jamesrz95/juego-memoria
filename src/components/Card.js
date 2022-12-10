import styled from "styled-components";

// images
import IMAGES from "../img/cards/index.js";

const Card = () => {
  return (
    <CardStyle>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={IMAGES.cover} alt="" />
        </div>
        <div class="flip-card-back">
          <img src={IMAGES.wolf} alt="" />
        </div>
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  height: 16rem;
  width: 12rem;
  border-radius: 5px;
  margin: 10px;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  img {
    height: 16rem;
    width: 12rem;
    object-fit: fill;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border: 5px solid;
    border-radius: 20px;
  }

  .flip-card-inner:hover,
  .flip-card-inner:focus {
    border: 5px solid;
    border-color: orange;
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
  }

  /* Style the back side */
  .flip-card-back {
    transform: rotateY(180deg);
  }
`;

export default Card;
