import styled from "styled-components";
// @ts-ignore: unused variable
import {
  // @ts-ignore: unused variable
  HTMLAttributes,
  // @ts-ignore: unused variable
  ClassAttributes
} from "react";

export interface WrapperProps {
  isActive: boolean;
}

export interface HeaderProps {
  isDraggable?: boolean;
}

export const minWidth = 400;
export const minHeight = 225;
export const padding = 10;

const wrapperStyles = ({ isActive }: WrapperProps) => {
  if (isActive) {
    return `
      
    `;
  }

  return `opacity: 1;`;
};

export const Wrapper = styled.div`
  ${wrapperStyles}
  position: fixed;
  display: inline-flex;
  flex-direction: column;
  background: white;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 5px, rgba(0, 0, 0, 0.1) 0px 1px 1px;
  min-width: ${minWidth}px;
  min-height: ${minHeight}px;
  user-select: none;
`;

export const Header = styled.div`
  height: 22px;
  cursor: ${({ isDraggable }: HeaderProps) =>
    isDraggable ? `-webkit-grab` : `default`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${padding}px;
  user-select: none;
  width: 100%;
  box-sizing: border-box;
  background-image: -webkit-linear-gradient(
    top,
    rgb(250, 250, 250) 0px,
    rgb(246, 246, 246) 2px,
    rgb(246, 246, 246) 100%
  );
  border-bottom: 1px solid rgb(209, 209, 209);
  border-top: 1px solid rgb(246, 246, 246);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-left: 3px;
  padding-right: 3px;
`;

export const BottomRightResizeHandle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
`;
export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  padding: ${padding}px;
`;

export const CloseIcon = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: rgb(255, 55, 55);
  }
  position: relative;
  user-select: none;
  -webkit-app-region: no-drag;
  cursor: default;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  margin-top: 1px;
  margin-left: 5px;
  margin-right: 4px;
  line-height: 0;
  background-color: rgb(221, 100, 100);
  border-color: rgb(208, 208, 208);
`;

export const MinimizeIcon = CloseIcon.extend`
  background-color: rgb(100, 221, 100);
  &:hover {
    opacity: 1;
    background-color: rgb(55, 255, 55);
  }
`;
export const Title = styled.div`
  white-space: nowrap;
  max-width: calc(100% - 25px);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RightResizeHandle = styled.div`
  width: 20px;
  height: calc(100% - 50px);
  position: absolute;
  bottom: 20px;
  right: 0;
  cursor: ew-resize;
`;

export const BottomResizeHandle = styled.div`
  width: calc(100% - 40px);
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 20px;
  cursor: ns-resize;
`;
