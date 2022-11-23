import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepsCard = styled.div`
  background-color: white;
  width: 80%;
  height: 70%;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px var(--background-color);
  display: flex;
`;

export const StepsSelector = styled.ul`
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

export const StepWrapper = styled.div`
  overflow-x: scroll;
`;
