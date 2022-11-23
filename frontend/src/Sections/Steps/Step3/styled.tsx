import styled from "styled-components";

export const StepWrapper = styled.div`
  overflow-x: scroll;
`;

export const LyricsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;
  justify-content: center;
  margin: 20px auto;
`;

export const Line = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Word = styled.span<{ selected: Boolean }>`
  border-radius: 3px;
  padding: 2px 4px;
  ${(props) =>
    props.selected && "background-color: var(--primary-color); color: white;"}
`;
