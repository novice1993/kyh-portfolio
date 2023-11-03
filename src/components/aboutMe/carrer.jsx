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
  border-radius: 0.8rem;
  padding: 28px;
  background-color: white;
  box-shadow: 7px 7px 15px 5px rgba(0, 0, 0, 0.2);

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
