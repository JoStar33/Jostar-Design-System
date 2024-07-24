import { colors } from '@/styles/Theme';
import styled from 'styled-components';

interface Props {
  isVertical: boolean;
  width: string;
  height: string;
  color?: keyof typeof colors;
}

export default function Line({
  isVertical,
  width = isVertical ? '2px' : '100%',
  height = isVertical ? '100%' : '2px',
  color = 'black',
}: Props) {
  return <S.Line isVertical={isVertical} width={width} height={height} style={{ backgroundColor: colors[color] }} />;
}

const S = {
  Line: styled.div<Props>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  `,
};
