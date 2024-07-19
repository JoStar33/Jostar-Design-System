import { S } from '@/components/atoms/Space/Space.style';

interface Props {
  height: string;
}

export default function Space({ height }: Props) {
  return <S.Space style={{ height }} />;
}
