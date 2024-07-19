import React from 'react';
import { S } from './ComponentWrapper.style';

interface Props {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function ComponentWrapper({ children, style }: Props) {
  return <S.ComponentWrapper style={style}>{children}</S.ComponentWrapper>;
}
