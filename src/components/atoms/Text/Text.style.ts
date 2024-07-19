import { textEllipsis } from '@/styles/Common';
import { styled } from 'styled-components';

export const S = {
  Text: styled.p<{ isEllipsis: boolean }>`
    ${(props) => props.isEllipsis && textEllipsis}
  `,
};
