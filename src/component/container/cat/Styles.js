import styled from "styled-components";

// Loading Start

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
`;

// Loading End

// Error start

export const ErrorBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000b5;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`;

// Error End

// CatProfile start

// export const ProfileWrapbox = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;

// export const ProfileBackground = styled.div`
//   width: 12rem;
//   height: 12rem;
//   margin: 10px;
//   background-color: none;
//   border-radius: 10px;
//   box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);
//   display: inline-flex;
//   flex-direction: row;
//   justify-content: center;
//   cursor: pointer;
//   z-index: 50;

//   &:hover {
//     background: #000000b5;
//   }
// `;

// CatProfile End
