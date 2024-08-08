import styled from 'styled-components';

export const S = {
  SelectBox: styled.div`
    .select-box {
      height: 50px;
      width: 300px;
      border: 1px solid ${(props) => props.theme.colors.modernBlack};
      cursor: pointer;
      display: flex;
      user-select: none;
      align-items: center;
      padding-left: 10px;
      position: relative;
      &__option-list {
        position: absolute;
        top: 120px;
        padding-left: 10px;
        width: 300px;
        border: 1px solid ${(props) => props.theme.colors.modernBlack};
        display: flex;
        flex-direction: column;
        gap: 10px;
        &--element {
          height: 40px;
          display: flex;
          cursor: pointer;
          align-items: center;
        }
      }
    }
  `,
};
