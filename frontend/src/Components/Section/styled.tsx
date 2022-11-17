import styled from "styled-components";

export const Wrapper = styled.section<{ half: Boolean; isLight: Boolean }>`
  height: ${(props) => (props.half ? "50vh" : "90vh")};
  border: 1p solid red;
  ${(props) => !props.isLight && "background-color: var(--background-color)"};
`;
