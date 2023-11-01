import styled from "styled-components";
import link from "../asset/link.png";

export const Container = ({ title, children }) => {
  return (
    <Wrraper>
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
