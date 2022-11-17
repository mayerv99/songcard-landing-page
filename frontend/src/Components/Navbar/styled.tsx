import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 75px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  h1 {
    font-weight: 900;
    font-size: 32px;
    letter-spacing: 1px;
    span {
      color: var(--primary-color);
    }
  }
`;
