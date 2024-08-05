import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import ModalWrapper from '.';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '@/components/atoms/Button';
import { AnimatePresence } from 'framer-motion';
import ProgressBar from '@/components/atoms/ProgressBar';

type Args = StoryObj<typeof ModalWrapper>;

const ModalWrapperStory: Meta<typeof ModalWrapper> = {
  component: ModalWrapper,
  title: 'Molecules/ModalWrapper',
  tags: ['autodocs'],
  argTypes: {},
  args: {
    headerText: '테스트',
  },
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

export const ModalWrapperTest: Args = {
  args: {
    height: '100px',
  },
  decorators: (story) => <ModalComponent>{story()}</ModalComponent>,
};

function ModalComponent({ children }: { children: React.ReactNode }) {
  const [isShow, setIsShow] = React.useState(false);
  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <ComponentWrapper>
      <Button onClick={handleClick}>모달 오픈</Button>
      <AnimatePresence>{isShow && children}</AnimatePresence>
    </ComponentWrapper>
  );
}

export const ModalWithContentWrapperTest: Args = {
  args: {
    height: 'auto',
    children: <ModalContent />,
  },
  decorators: (story) => <ModalComponent>{story()}</ModalComponent>,
};

function ModalContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <ProgressBar second={5} />
      <Button buttonType="neutral">헬로우</Button>
      <Button>버튼한개</Button>
      <Button>버튼두개</Button>
      <Button>버튼세개</Button>
    </div>
  );
}

export default ModalWrapperStory;
