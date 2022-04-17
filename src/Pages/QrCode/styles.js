import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #7459d9;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 20px;
    max-width: 325px;
    color: white;
    font-weight: bold;
  }

  .input-container {
    margin-top: 20px;
  }

  button {
    margin-top: 20px;
  }

  svg {
    width: 250px;
    background-color: #7459d9;
  }
`;
