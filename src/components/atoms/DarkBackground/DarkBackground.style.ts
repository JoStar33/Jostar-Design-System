import { flexCenter } from '@/styles/Common';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const S = {
  DarkBackground: styled(motion.div)`
    z-index: 6;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.3);
    ${flexCenter}
  `,
};
