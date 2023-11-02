import styled from "styled-components";

const Explain = ({ strengthData }) => {
  const title = strengthData.mainTitle;
  const subTitle = strengthData.subTitle;
  const contents = strengthData.contents;

  return (
    <Container>
      <div className="innerContainer">
        <div className="titleBox">
          <span className="mainTitle">{title}</span>
          <span className="subTitle">{subTitle}</span>
        </div>
        <ul>
          <li className="firstList">{contents[0]}</li>
          {contents.map((content, index) => {
            if (index > 0) {
              return <li>{content}</li>;
            }
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Explain;

const Container = styled.div`
  .titleBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .mainTitle {
    font-size: 32px;
    font-weight: 600;
    margin-right: 12px;
  }

  .subTitle {
    font-size: 20px;
    font-weight: 400;
    color: darkgray;
  }

  & ul {
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    line-height: 23px;
    white-space: pre-line;

    .firstList {
      margin-top: 20px;
    }
  }
`;
