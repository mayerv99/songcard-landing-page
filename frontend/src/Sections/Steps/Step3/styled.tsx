import styled from "styled-components";

export const StepWrapper = styled.div`
  overflow-y: scroll;
  max-height: 90%;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }
`;

export const LyricsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;
  justify-content: center;
  margin: 20px auto;
  overflow-y: scroll;
  max-height: 100%;
  ::-webkit-scrollbar {
    background-color: transparent;
  }
`;

export const Line = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Word = styled.span<{
  selected: Boolean;
  isFirst?: Boolean;
  isLast?: Boolean;
}>`
  border-radius: 3px;
  padding: 2px 4px;
  margin: 3px 0;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    "background-color: var(--primary-color); color: white;"}/* ${(props) =>
    props.isFirst && "border-radius: 3px 0 0 3px"}
  ${(props) => props.isLast && "border-radius: 0 3px 3px 0"} */
`;
