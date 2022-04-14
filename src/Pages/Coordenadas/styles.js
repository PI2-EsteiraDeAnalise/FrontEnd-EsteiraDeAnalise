import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 20px;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .container-img {
    width: 45%;
  }

  .container-img img {
    width: 500px;
    border: 1px solid black;
  }
`;
