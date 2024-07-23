import { styled } from 'styled-components';

export const S = {
  ProgressBar: styled.div`
    border: 1px solid ${(props) => props.theme.colors.black};
    overflow: hidden;
    .bar {
      height: 100%;
    }
  `,
};
