import styled from "styled-components";
import { OverlayProps } from "./types";

const Overlay = styled.div.attrs({ role: "presentation" })<OverlayProps>`
  &:before {
    background-attachment: fixed;
    transition: opacity 1s;
  }
  &:before {
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 1s;
  }
  &:before {
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 1s;
  }
  &:before {
    background: inherit;
    transition: opacity 1s;
  }
  transition: opacity 1s;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: inherit;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${({ show }) => (show ? 0.9 : 0)};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? "initial" : "none")};
`;

Overlay.defaultProps = {
  show: false,
  zIndex: 10,
};

export default Overlay;
