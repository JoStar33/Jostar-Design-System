import { css, styled } from 'styled-components';

export const S = {
  TextArea: styled.div<{ disabled?: boolean }>`
    width: 100%;
  `,
  StyledTextArea: styled.textarea<{ isError?: boolean; minHeight?: string }>`
    width: 100%;
    padding: 10px;
    border: none;
    font-family: 'SUIT';
    min-height: ${(props) => props.minHeight};
    line-height: 18px;
    font-size: 16px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.modernBlack};
    &::placeholder {
      color: ${(props) => props.theme.colors.modernBlack};
      font-size: 14px;
    }
    ${(props) =>
      props.disabled &&
      css`
        background-color: ${(props) => props.theme.colors.gray};
        border: none;
        color: ${(props) => props.theme.colors.gray};
        -webkit-text-fill-color: currentColor;
        opacity: 1;
      `};
  `,
  StyledTextCount: styled.div`
    margin-top: 5px;
    text-align: right;
    color: ${(props) => props.theme.colors.gray};
    font-size: 12px;
  `,
  Label: styled.label<{ required: boolean }>`
    display: inline-block;
    font-weight: 500;
    height: 15px;
    width: auto;
    cursor: default;
    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    color: ${(props) => props.theme.colors.modernBlack};
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
