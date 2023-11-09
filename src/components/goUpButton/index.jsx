import { useSelector } from "react-redux";
import styled from "styled-components";

const GoUpButton = ({ buttonText }) => {
  const scrollY = useSelector((state) => state.scrollY);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container scrollY={scrollY}>
      <Button onClick={handleScrollToTop}>{buttonText}</Button>
    </Container>
  );
};

export default GoUpButton;

const Container = styled.div`
  display: ${(props) => (props.scrollY ? "block" : "none")};
`;

const Button = styled.button`
  position: fixed;
  bottom: 90px;
  right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  background-color: transparent;
  border: none;
  opacity: 0.4;

  &:hover {
    cursor: pointer;
  }
`;
