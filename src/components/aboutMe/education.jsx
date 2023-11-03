import styled from "styled-components";
import {
  educationTitle,
  education01,
  education02,
  eduContent01,
  eduContent02,
  eduContent03,
} from "../../constant/constant";

const Education = () => {
  return (
    <Container>
      <h2>{educationTitle}</h2>
      <ul>
        <li>{education01}</li>
        <li>
          {education02}
          <ol>
            <li className="firstList">{eduContent01}</li>
            <li>{eduContent02}</li>
            <li>{eduContent03}</li>
          </ol>
        </li>
      </ul>
    </Container>
  );
};

export default Education;

const Container = styled.section`
  border-radius: 0.8rem;
  padding: 32px;
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
    gap: 14px;
  }

  ol {
    list-style-type: none;

    .firstList {
      margin-top: 12px;
    }

    li {
      font-size: 15px;
      color: #716c6c;
      margin-top: 8px;
    }
  }
`;
