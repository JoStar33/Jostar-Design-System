import { textDragBlock } from '@/styles/Common';
import { styled } from 'styled-components';

export const S = {
  RadioButton: styled.label`
    display: flex;
    ${textDragBlock}
    cursor: pointer;
    input {
      margin-right: 10px;
    }
  `,
};
