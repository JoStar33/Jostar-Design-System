import { styled } from 'styled-components';

export const S = {
  Loading: styled.div`
    .loading:before {
      content: '';
      display: block;
      height: 50px;
      width: 50px;
      -webkit-animation: spin 0.5s infinite linear;
      animation: spin 0.5s infinite linear;
      border: 6px ${(props) => props.theme.colors.deepSkyblue} solid;
      border-left-color: transparent;
      border-radius: 100%;
    }

    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `,
};
