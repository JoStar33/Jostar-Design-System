import { flexCenter } from '@/styles/Common';
import styled from 'styled-components';

export const S = {
  DesignToken: styled.div`
    display: flex;
    gap: 100px;
    .token-items {
      display: flex;
      flex-direction: column;
      gap: 15px;
      &__color-info-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: 500;
      }
      &__wrapper {
        display: flex;
        height: fit-content;
        flex-wrap: wrap;
        gap: 5px;
        width: 300px;
      }
      &__color-box {
        width: 40px;
        height: 40px;
        font-weight: 600;
        ${flexCenter}
      }
    }
  `,
};
