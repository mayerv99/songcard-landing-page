import styled from "styled-components";

export const Wrapper = styled.li<{ isLoading: Boolean }>`
  width: 30%;
  background-color: var(--background-color-light);
  margin: 10px 0;
  padding: ${(props) => !props.isLoading && "20px"};
  border-radius: 5px;
  min-height: 100px;
  cursor: pointer;

  header {
    display: flex;
    gap: 5px;
    border-bottom: 1px solid var(--background-color);
    padding: 0 0 10px;
    margin-bottom: 10px;
    align-items: center;

    h1 {
      font-size: 14px;
      margin: 0;
    }
  }
`;

export const CardBody = styled.div``;

export const CardFooter = styled.div`
  width: 100%;
  color: #c1c1c1;
  font-size: 14px;

  strong {
    color: #a1a1a1;
  }
`;
