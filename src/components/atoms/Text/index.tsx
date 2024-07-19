import { TextStyles } from '@/styles/TextStyles';
import { ColorsTypes, colors } from '@/styles/Theme';
import { S } from './Text.style';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  variant?: keyof typeof TextStyles;
  color?: keyof ColorsTypes;
  lineHeight?: string;
  width?: string;
  isEllipsis?: boolean;
}

export default function Text({
  variant = 'body1',
  color = 'black',
  width = 'auto',
  lineHeight = '1.2rem',
  isEllipsis = false,
  ...rest
}: Props) {
  return (
    <S.Text
      {...rest}
      style={{
        ...rest.style,
        ...TextStyles[variant],
        color: colors[color],
        width,
        lineHeight,
      }}
      isEllipsis={isEllipsis}
    />
  );
}
