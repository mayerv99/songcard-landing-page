import styled from "styled-components";

export const Wrapper = styled.section<{ half: Boolean; isLight: Boolean }>`
  height: ${(props) => (props.half ? "50vh" : "100vh")};
  border: 1p solid red;
  ${(props) =>
    !props.isLight && "background-color: var(--background-color-light)"};
`;
