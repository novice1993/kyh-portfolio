import styled from "styled-components";
import { Container } from "../../shareComponents/share";
import Education from "./education";
import Career from "./carrer";
import Animation from "./animation";

const AboutMe = () => {
  return (
    <Container title="ABOUT ME" id="aboutMe">
      <ExternalContainer>
        <InternalContainer>
          <Education />
          <Career />
        </InternalContainer>
        <Animation />
      </ExternalContainer>
    </Container>
  );
};

export default AboutMe;

const ExternalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const InternalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;
