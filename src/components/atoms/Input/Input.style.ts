import { css, styled } from 'styled-components';

export const S = {
  Input: styled.div<{ readOnly: boolean; disabled: boolean }>`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    .input-container {
      &__content {
        width: 100%;
        font-size: 16px;
        background-color: ${(props) => props.theme.colors.white};
        height: 40px;
        padding-left: 10px;
        color: #333;
        border-radius: 0;
        border: 1px solid ${(props) => props.theme.colors.modernBlack};
        width: 100%;
        ${(props) =>
          (props.readOnly || props.disabled) &&
          css`
            background-color: ${(props) => props.theme.colors.gray};
            opacity: 1;
            border: none;
            color: #777;
          `};
        &::placeholder {
          font-size: 14px;
          font-family: 'SUIT';
          color: ${(props) => props.theme.colors.modernBlack};
        }
        &:focus {
          border-color: #adc1d9;
          box-shadow: 0 0 5px -1px #adc1d9;
        }
      }
    }
  `,
  Label: styled.label<{ required: boolean }>`
    display: inline-block;
    font-weight: 500;
    height: 15px;
    width: auto;
    cursor: default;
    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    color: #333;
    margin-bottom: 7px;
    font-family: 'SUIT';
    .styled-label__required {
      display: none;
      ${(props) =>
        props.required &&
        css`
          display: inline;
        `};
      color: ${(props) => props.theme.colors.red};
      margin-left: 2px;
      vertical-align: top;
    }
  `,
};
