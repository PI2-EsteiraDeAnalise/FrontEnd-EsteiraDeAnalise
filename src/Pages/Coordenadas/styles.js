import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .container-img {
    width: 50%;
  }

  .container-img img {
    width: 450px;
    border: 4px solid #7459d9;
    border-radius: 10px;
  }

  .container-coord {
    background-color: #7459d9;
    border: 1px solid;
    border-radius: 5px;
    margin: 0 auto;
    width: 40%;
    height: 75vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      margin: 20px 0;
      max-width: 325px;
      color: white;
      font-weight: bold;
    }

    .container-coord-input {
      display: flex;
      max-height: 60vh;
      overflow-y: auto;
      align-items: left;
      justify-content: left;
      width: 80%;
      flex-direction: column;
    }

    .container-coord-input .title-coord {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .container-coord-input .container-coord-input-item {
      display: flex;
      justify-content: space-between;
    }

    .container-coord-input-item .first-input-coord {
      width: 50%;
    }

    .container-coord-input-item .second-input-coord {
      width: 50%;
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
  }
`;
