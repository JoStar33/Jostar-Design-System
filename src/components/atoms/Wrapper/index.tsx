import { S } from './Wrapper.style';

interface IWrapper {
  label: string;
  labelStyle: React.CSSProperties;
  children: React.ReactNode;
}

export default function Wrapper({ label, labelStyle, children }: IWrapper) {
  return (
    <S.Wrapper>
      <p className="wrapper__label-text" style={labelStyle}>
        {label}
      </p>
      {children}
    </S.Wrapper>
  );
}
