import styled from "styled-components";

export const TodoAllWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TodoTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TodoTitle = styled.b``;

export const TodoSetModeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// ****************
// toggle css start
// ****************

// The switch - the box around the slider
export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

// Hide default HTML checkbox
// component에 type="checkbox" 걸어주기
export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

// The Slider
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 4s;
    border-radius: 50%;
  }
`;
