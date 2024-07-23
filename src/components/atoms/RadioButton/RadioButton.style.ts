import { textDragBlock } from '@/styles/Common';
import { css, styled } from 'styled-components';

export const S = {
  RadioButton: styled.label<{ $active: boolean }>`
    display: flex;
    align-items: center;
    ${textDragBlock}
    cursor: pointer;
    input {
      all: unset;
      width: 25px;
      height: 25px;
      display: flex;
      border-radius: 50%;
      border: 2px solid ${(props) => props.theme.colors.black};
      position: relative;
      cursor: pointer;
      margin-right: 20px;
      &::after {
        content: attr(data-name);
        padding-left: 30px;
        font-size: 14px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 150px;
        left: 0;
      }
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform: translate(-53%, -50%);
        width: 12px;
        height: 12px;
        background-color: ${(props) => props.theme.colors.white};
        ${(props) =>
          !props.$active &&
          css`
            background-color: transparent;
          `};
      }
      ${(props) =>
        props.$active &&
        css`
          background: ${(props) => props.theme.colors.modernBlack};
          border: 2px solid ${(props) => props.theme.colors.black};
        `};
    }
  `,
};
