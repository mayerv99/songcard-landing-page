import styled from "styled-components";

export const StepWrapper = styled.div`
  max-width: 100%;
  justify-content: center;
  max-height: 95%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: transparent;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  margin: 10px auto;
  img {
    width: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
    pointer-events: none;
  }

  input {
    background-color: #f1f3f5;
    border: none;
    width: 100%;
    padding: 10px 50px;
    border-radius: 5px;
    font-size: 18px;

    :focus {
      background-color: white;
    }
    ::placeholder {
      color: rgb(206, 207, 210);
    }
  }
`;

export const SongListWrapper = styled.ul`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  max-height: 90%;
  overflow-y: scroll;
  margin: 0 0 0 auto;
  transition: all 0.2s;
  list-style: none;

  ::-webkit-scrollbar {
    background-color: transparent;
  }
`;
