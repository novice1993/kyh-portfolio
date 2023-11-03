import styled from "styled-components";
import velogLogo from "../asset/url_icon/velogLogo.png";
import githubLogo from "../asset/url_icon/githubLogo.png";
import { footerTitle, phoneNum, email, githubUrl, blogUrl } from "../constant/constant";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="profile">
          <span className="title">{footerTitle}</span>
          <span>{phoneNum}</span>
          <span>{email}</span>
        </div>
        <div className="url">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <img src={githubLogo} />
          </a>
          <a href={blogUrl} target="_blank" rel="noreferrer">
            <img src={velogLogo} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);

  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 76px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  .container {
    width: 1076px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px 20px 32px;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 15px;

    font-size: 16px;
    color: #2f2c2ce1;
  }

  .title {
    color: black;
    font-weight: 900;
    font-size: 20px;
  }

  .url {
    display: flex;
    flex-direction: row;
    gap: 14px;

    & img {
      width: 36px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
