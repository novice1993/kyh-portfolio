import styled from "styled-components";

const StackCard = ({ logo, stackTitle, description }) => {
  return (
    <Container>
      <img src={logo} />
      <div className="textBox">
        <h3 className="skillTitle">{stackTitle}</h3>
        <div className="description">{description}</div>
      </div>
    </Container>
  );
};

export default StackCard;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  width: 400px;
  height: 98px;
  padding: 10px 20px 10px 20px;
  border: 1px solid black;
  border-radius: 0.65rem;

  & img {
    width: auto;
    height: 60px;
    border: 1px solid #999;
  }

  .textBox {
    font-size: 16.5px;
    height: 60px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .description {
      font-size: 12.5px;
      line-height: 18px;
      white-space: pre-wrap;
    }
  }
`;
