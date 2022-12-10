import styled from "styled-components";
import { motion } from "framer-motion";

const Modal = ({ openModal, turns }) => {
  if (!openModal) return null;
  return (
    <ModalStyle
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className="final-score">
        <h1> Congratulations!!!!</h1>
        <p>You finish the game in:</p>
        <h3>Turns: {turns}</h3>
      </div>
    </ModalStyle>
  );
};

const ModalStyle = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background: hsla(0, 0%, 0%, 0.37);
  position: absolute;
  top: 0px;
  justify-content: center;
  align-items: center;
  opacity: 0;
  .final-score {
    height: 30%;
    width: 40%;
    background: white;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Modal;
