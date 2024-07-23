import { textDragBlock } from '@/styles/Common';
import { styled } from 'styled-components';

export const S = {
  Checkbox: styled.label`
    display: flex;
    align-items: center;
    ${textDragBlock}
    cursor: pointer;
    input {
      margin-right: 10px;
    }
  `,
};
