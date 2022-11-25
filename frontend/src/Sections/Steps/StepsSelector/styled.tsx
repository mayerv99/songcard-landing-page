import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 10px;
  border-right: 1px solid var(--background-color);
  width: 10%;
  height: 100%;
`;

export const StepItem = styled.li<{ selected: Boolean; disabled: Boolean }>`
  padding: 14px 19px;
  color: ${(props) => (props.selected ? "white" : "var(--primary-color)")};
  background-color: ${(props) =>
    props.selected ? "var(--primary-color)" : "var(--background-color-light)"};
  ${(props) =>
    props.disabled &&
    "background-color:var(--background-color-light);color: var(--background-color);pointer-events: none;"}

  border-radius: 50px;
  list-style: none;
  margin: auto;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;
