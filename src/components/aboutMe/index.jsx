import styled from "styled-components";
import { Container } from "../../shareComponents/share";
import Profile from "./profile";
import Education from "./education";
import Career from "./carrer";
import Animation from "./animation";

const AboutMe = () => {
  return (
    <Container title="ABOUT ME">
      <ExternalContainer>
        <InternalContainer>
          <Profile />
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
  gap: 48px;
`;
