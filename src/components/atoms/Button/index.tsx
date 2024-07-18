import { colors } from '@/styles/Theme';
import React from 'react';
import { S } from './Button.style';

type ButtonType = 'positiveCancel' | 'negativeCancel' | 'neutral' | 'warning' | 'positive' | 'white';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  margin?: string;
  height?: string;
  cursor?: string;
  fontSize?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
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
    backgroundColor = '#ebebeb',
    borderColor = '#ebebeb',
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
    return {
      backgroundColor,
      borderColor,
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
