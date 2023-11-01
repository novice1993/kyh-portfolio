import styled from "styled-components";
import link from "../asset/link.png";

export const Container = ({ title, children }) => {
  return (
    <Wrraper>
      <h1 className="title">
        <img src={link} />
        <span>{title}</span>
      </h1>
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

  .title {
    margin-bottom: 48px;
    border-bottom: 1px solid darkgray;

    & img {
      width: 24px;
      height: auto;
    }

    & span {
      padding-left: 10px;
    }
  }
`;
