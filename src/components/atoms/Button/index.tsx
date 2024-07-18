import React from 'react';
import styled from 'styled-components';

type ButtonType = 'positiveCancel' | 'negativeCancel' | 'neutral' | 'warning' | 'positive' | 'white';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
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
    fullMobile,
    children,
    ...rest
  },
  ref,
) {
  const buttonStyle = (): React.CSSProperties => {
    if (buttonType === 'positive') {
      return {};
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

const S = {
  Button: styled.button`
    all: unset;
    letter-spacing: 0.5px;
    text-align: center;
    box-sizing: border-box;
  `,
};
