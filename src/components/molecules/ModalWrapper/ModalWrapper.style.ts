import { motion } from 'framer-motion';
import styled from 'styled-components';

export const S = {
  ModalWrapper: styled(motion.div)`
    padding: 10px;
    background-color: ${(props) => props.theme.colors.white};
    .modal-wrapper {
      &__header {
        display: flex;
        justify-content: space-between;
      }
    }
  `,
};
