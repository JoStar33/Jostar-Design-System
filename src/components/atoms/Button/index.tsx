import { colors } from '@/styles/Theme';
import React from 'react';
import { S } from './Button.style';

type ButtonType = 'positiveCancel' | 'negativeCancel' | 'neutral' | 'warning' | 'positive' | 'white' | 'custom';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  margin?: string;
  height?: string;
  cursor?: string;
  fontSize?: string;
  backgroundColor?: keyof typeof colors;
  borderColor?: keyof typeof colors;
  borderRadius?: string;
  width?: string;
  disabled?: boolean;
  buttonType?: ButtonType; // 리터럴 타입 추가
  fullMobile?: string;
  children: React.ReactNode;
}

export default React.forwardRef<HTMLButtonElement, Props>(function Button(
  {
    margin = '0',
    width = '100%',
    height = '45px',
    cursor = 'pointer',
    borderRadius = '0',
    fontSize = '16px',
    backgroundColor = 'white',
    borderColor = 'white',
    disabled,
    buttonType = 'positive',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fullMobile,
    children,
    ...rest
  },
  ref,
) {
  const buttonStyle = (): React.CSSProperties => {
    if (buttonType === 'positive') {
      return {
        backgroundColor: colors.black,
        color: colors.white,
      };
    }
    if (buttonType === 'positiveCancel') {
      return {
        backgroundColor: colors.gray,
        color: colors.white,
      };
    }
    if (buttonType === 'neutral') {
      return {
        border: '1px solid',
        borderColor: colors.black,
        backgroundColor: colors.white,
        color: colors.black,
      };
    }
    if (buttonType === 'negativeCancel') {
      return {
        border: '1px solid',
        borderColor: colors.gray,
        backgroundColor: colors.white,
        color: colors.gray,
      };
    }

    return {
      backgroundColor: colors[backgroundColor],
      borderColor: colors[borderColor],
    };
  };

  return (
    <S.Button
      {...rest}
      ref={ref}
      style={{ ...rest.style, ...buttonStyle(), width, height, cursor, borderRadius, margin, fontSize }}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
});
