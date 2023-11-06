import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styled from "styled-components";
import link from "../asset/link.png";

export const Container = ({ id, title, titleColor, bgColor, children }) => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      delay: 20,
      duration: 450,
      easing: "ease",
      mirror: false,
      anchorPlacement: "top-bottom",
      debounceDelay: 50,
      throttleDelay: 99,
    });
  }, []);

  return (
    <Wrraper bgColor={bgColor} id={id} titleColor={titleColor}>
      <div className="container">
        <img className="image" src={link} />
        <h1 className="title">{title}</h1>
      </div>
      <div data-aos="fade-down">{children}</div>
    </Wrraper>
  );
};

const Wrraper = styled.div`
  background-color: ${(props) => (props.bgColor ? `${props.bgColor}` : "white")};

  width: 100%;
  min-height: calc(100vh - 145px);
  padding: 64px 32px 96px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .guide {
    margin-top: 4px;
    font-size: 12px;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .image {
    width: 24px;
  }

  .title {
    color: ${(props) => (props.titleColor ? `${props.titleColor}` : "black")};
    border-bottom: 1px solid darkgray;
  }
`;
