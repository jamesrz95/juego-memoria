// styles library
import styled from "styled-components";
import { motion } from "framer-motion";
// images
import IMAGES from "../img/cards/index.js";

const Card = ({ item, id, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(item);
  };

  return (
    <CardStyle>
      <div
        className={flipped ? "flip-card-inner flipped" : "flip-card-inner"}
        onClick={handleClick}
      >
        <motion.div className="flip-card-front" whileTap={{ scale: 0.9 }}>
          <img src={IMAGES.cover} alt="" />
        </motion.div>
        <div className="flip-card-back">
          <img src={item.img} alt="card" />
        </div>
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  height: 80%;
  width: 8%;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;

  .flip-card-inner.flipped {
    transform: rotateY(180deg);
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    border: 3px solid;
    border-radius: 10px;
  }

  .flip-card-inner:hover,
  .flip-card-inner:focus {
    border: 3px solid;
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

  /* Style the back side */
  .flip-card-back {
    transform: rotateY(180deg);
  }
`;

export default Card;
