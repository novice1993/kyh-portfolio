import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setReadme } from "../../reducer/readme_reducer";
import styled from "styled-components";

const Readme = () => {
  const dispatch = useDispatch();

  const handleCloseReadme = () => {
    dispatch(setReadme(false));
  };

  return (
    <Container>
      <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <header>
          <div className="title">README.md</div>
          <button onClick={handleCloseReadme}>&#10005;</button>
        </header>
      </motion.div>
    </Container>
  );
};

export default Readme;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: white;

  & header {
    width: 100%;
    background-color: #222222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px 16px 20px;

    .title {
      color: white;
      font-size: 16px;
      font-weight: 800;
    }
  }

  & button {
    font-size: 20px;
    font-weight: bolder;
    width: 28px;
    height: 28px;
    background-color: white;
    border: 3px solid black;
    border-radius: 0.3rem;
    opacity: 0.55;

    &:hover {
      cursor: pointer;
    }
  }
`;
