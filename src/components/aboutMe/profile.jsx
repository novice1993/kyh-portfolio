import styled from "styled-components";
import {
  profileTitle,
  phoneNum,
  email,
  github,
  githubURL,
  blog,
  blogURL,
} from "../../constant/constant";

const Profile = () => {
  return (
    <Container>
      <h2>{profileTitle}</h2>
      <ul>
        <li>{phoneNum}</li>
        <li>{email}</li>
        <li>
          {github}
          <a href={githubURL} target="_blank" rel="noreferrer">
            {githubURL}
          </a>
        </li>
        <li>
          {blog}
          <a href={blogURL} target="_blank" rel="noreferrer">
            {blogURL}
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Profile;

const Container = styled.section`
  h2 {
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 28px;
    font-size: 18px;
    gap: 14px;
  }
`;
