import { colors } from '@/styles/Theme';
import { motion } from 'framer-motion';
import { S } from './ProgressBar.style';

interface Props {
  children?: React.ReactNode;
  second?: number;
  width?: string;
  height?: string;
  borderRadius?: string;
  barColor?: keyof typeof colors;
}

export default function ProgressBar({
  width = '100%',
  height = '10px',
  borderRadius = '10px',
  children,
  barColor = 'black',
  second = 10,
}: Props) {
  return (
    <S.ProgressBar style={{ width, height, borderRadius }}>
      <motion.div
        className="bar"
        animate={{ width: ['0%', '100%'] }}
        transition={{ duration: second, ease: 'easeIn' }}
        style={{ backgroundColor: colors[barColor] }}
      >
        {children}
      </motion.div>
    </S.ProgressBar>
  );
}
