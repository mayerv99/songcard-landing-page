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

export const StepItem = styled.li<{ selected: Boolean }>`
  padding: 14px 19px;
  color: ${(props) => (props.selected ? "white" : "var(--primary-color)")};
  background-color: ${(props) =>
    props.selected ? "var(--primary-color)" : "var(--background-color-light)"};
  border-radius: 50px;
  list-style: none;
  margin: auto;
  cursor: pointer;
`;
