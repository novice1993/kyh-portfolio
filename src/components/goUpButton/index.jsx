import styled from "styled-components";

const GoUpButton = ({ buttonText }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <Button onClick={handleScrollToTop}>{buttonText}</Button>;
};

export default GoUpButton;

const Button = styled.button`
  position: fixed;
  bottom: 103px;
  right: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;

  font-size: 35px;
  width: 48px;
  height: 48px;
  background-color: white;
  border: 3px solid black;
  border-radius: 0.3rem;
  opacity: 0.55;

  &:hover {
    cursor: pointer;
  }
`;
