import styled from "styled-components";
import { carrerTitle, carrer, carrerContent } from "../../constant/constant";
import { mediaQuery } from "../../style/globalStyle";

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

    ${mediaQuery.min} {
      font-size: 22px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 28px;
    font-size: 18px;
    gap: 10px;

    ${mediaQuery.min} {
      font-size: 16px;
    }
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

      ${mediaQuery.min} {
        font-size: 14px;
      }
    }
  }
`;
