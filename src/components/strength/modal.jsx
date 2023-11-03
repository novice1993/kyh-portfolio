import styled from "styled-components";

const Modal = ({ src, setModal }) => {
  return (
    <Container>
      <img src={src} />
      <button onClick={() => setModal(0)}>&#10005;</button>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: auto;
    height: 80vh;
    border: 3px solid black;
    border-radius: 0.5rem;
  }

  & button {
    font-size: 35px;
    font-weight: bolder;
    position: fixed;
    top: 25px;
    right: 25px;
    width: 48px;
    height: 48px;
    background-color: white;
    border: 3px solid black;
    border-radius: 0.3rem;
    opacity: 0.55;

    &:hover {
      cursor: pointer;
    }
  }
`;
