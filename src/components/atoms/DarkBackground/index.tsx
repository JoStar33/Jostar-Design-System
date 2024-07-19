import React from 'react';
import { S } from '@/components/atoms/DarkBackground/DarkBackground.style';

interface Props {
  children: React.ReactNode;
  onClickClose?: () => void;
  scrollLock?: boolean;
  style?: React.CSSProperties;
}

export default function DarkBackground({ children, onClickClose, scrollLock, style }: Props) {
  React.useEffect(() => {
    if (!scrollLock) {
      const targetElement = document.querySelector('body') as HTMLBodyElement;
      targetElement.style.overflow = 'hidden';

      return () => {
        targetElement.style.overflow = 'auto';
      };
    }
  }, [scrollLock]);

  return (
    <S.DarkBackground onClick={onClickClose} style={style}>
      {children}
    </S.DarkBackground>
  );
}
