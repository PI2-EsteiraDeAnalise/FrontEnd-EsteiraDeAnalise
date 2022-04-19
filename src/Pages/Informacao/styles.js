import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;

  .container-coord {
    background-color: #7459d9;
    border: 1px solid;
    border-radius: 5px;
    margin: 0 auto;
    width: 40%;
    height: 75vh;
    max-height: 75vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .container-coord .title-coord {
    color: white;
    margin: 8px 2% 0 2%;
    font-weight: bold;
  }

  .container-coord-input .title-coord-input {
    color: white;
    margin: 12px 2% 6px 2%;
  }

  .container-coord-input .container-coord-input-item {
    display: flex;
    margin: 0 2%;
  }

  .container-coord-input .coord-text {
    margin: 0 0 8px 0;
    width: 95%;
    background-color: white;
    color: black;
    text-align: center;
    line-height: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
  }

  .dot-container {
    display: flex;
    margin: 20px auto;
  }
`;

export const Dot = styled.div`
  margin: 0 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.BackColor};
`;
