import styled from "styled-components";
import { carrerTitle, carrer, carrerContent } from "../../constant/constant";

const Career = () => {
  return (
    <Container>
      <h2>{carrerTitle}</h2>
      <ul>
        <li>
          {carrer}

          <ol>
            <li className="firstList">{carrerContent}</li>
          </ol>
        </li>
      </ul>
    </Container>
  );
};

export default Career;

const Container = styled.section`
  border: 1px solid darkgray;
  border-radius: 0.8rem;
  padding: 24px;

  h2 {
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 28px;
    font-size: 18px;
    gap: 10px;
  }

  ol {
    list-style-type: none;

    .firstList {
      margin-top: 8px;
    }

    li {
      font-size: 15px;
      color: #716c6c;
      margin-top: 7px;
    }
  }
`;
