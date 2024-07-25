import { S } from './Loading.style';

type LoadingMode = 'fixed' | 'relative' | 'absolute';

interface Props {
  mode?: LoadingMode;
}

export default function Loading({ mode = 'relative' }: Props) {
  return (
    <S.Loading style={{ position: mode }}>
      <div className="loading" />
    </S.Loading>
  );
}
