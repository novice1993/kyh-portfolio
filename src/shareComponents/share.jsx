import styled from "styled-components";
import link from "../asset/link.png";

export const Container = ({ title, bgColor, children }) => {
  return (
    <Wrraper bgColor={bgColor}>
      <div className="container">
        <img className="image" src={link} />
        <h1 className="title">{title}</h1>
      </div>
      {children}
    </Wrraper>
  );
};

const Wrraper = styled.div`
  border: 1px solid darkgray; // 임시추가
  background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : "white")};

  width: 100%;
  padding: 64px 32px 64px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 48px;
  }

  .image {
    width: 24px;
  }

  .title {
    border-bottom: 1px solid darkgray;
  }
`;
