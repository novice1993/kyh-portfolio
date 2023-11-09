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
  bottom: 103px;
  right: 25px;

  font-size: 35px;
  width: 48px;
  height: 48px;
  background-color: #f5f5f5;
  color: black;

  border: 3px solid black;
  border-radius: 0.3rem;
  opacity: 0.55;

  &:hover {
    cursor: pointer;
  }
`;
