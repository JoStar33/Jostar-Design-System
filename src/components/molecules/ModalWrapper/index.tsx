import DarkBackground from '@/components/atoms/DarkBackground';
import { S } from './ModalWrapper.style';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

interface Props {
  width?: string;
  height?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  headerText?: string;
  onClose?: () => void;
}

export default function ModalWrapper({
  width = '400px',
  height = '600px',
  borderRadius = '5px',
  children,
  headerText,
  onClose = () => false,
}: Props) {
  return (
    <DarkBackground onClickClose={onClose}>
      <S.ModalWrapper style={{ width, height, borderRadius }}>
        <div className="modal-wrapper__header">
          <Text variant="h3">{headerText}</Text>
          <Icon name="Close" onClick={onClose} />
        </div>
        {children}
      </S.ModalWrapper>
    </DarkBackground>
  );
}
