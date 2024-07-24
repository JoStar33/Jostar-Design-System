import { textDragBlock } from '@/styles/Common';
import { styled } from 'styled-components';

export const S = {
  Checkbox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .checkbox-label {
      display: flex;
      align-items: center;
      ${textDragBlock}
      cursor: pointer;
      input {
        margin-right: 10px;
      }
      input[type='checkbox'] {
        display: none;
      }
      input[type='checkbox'] + span {
        svg {
          display: none;
        }
      }
      input[type='checkbox']:checked + span {
        background-color: ${(props) => props.theme.colors.deepSkyblue};
        border: none;
        svg {
          display: block;
        }
      }
      input[type='checkbox']:disabled + span {
        background-color: #eee;
        border: 1px solid #eee;
      }
      .icon-box {
        height: 18px;
        width: 18px;
        margin-right: 8px;
        border: 1px solid #d0d0d0;
        border-radius: 2px;
        position: relative;
        font-size: 0;
        cursor: pointer;
        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  `,
};
