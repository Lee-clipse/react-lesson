import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: lightgray;
  color: black;
  width: 100%;
  height: 100%;
  padding: 2rem;

  #title {
    font-size: 4rem;
  }

  #list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;

    .p-box {
      border: 1px solid black;
      border-radius: 0.6rem;
      background-color: white;
      padding: 2rem;
      cursor: pointer;
    }
  }
`;

export const Modal = styled.div`
  #back-drop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  #m-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    width: 40%;
    border-radius: 1rem;
    background-color: white;
    color: black;
    padding: 2rem;

    #m-header {
      text-align: right;
      img {
        width: 2rem;
      }
    }

    #m-body {
      .m-btn {
        background-color: orange;
        border-radius: 1rem;
        text-align: center;
        padding: 1rem;
      }
    }
  }
`;
