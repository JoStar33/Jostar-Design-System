import { styled } from 'styled-components';

export const S = {
  ErrorText: styled.div`
    height: 15px;
    font-size: 12px;
    color: ${(props) => props.theme.colors.red};
    margin: 5px 0 0 0;
  `,
};
