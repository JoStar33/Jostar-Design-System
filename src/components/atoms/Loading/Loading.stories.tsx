import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import Loading from '.';
import { Meta, StoryObj } from '@storybook/react';
import DarkBackground from '../DarkBackground';
import Button from '../Button';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

type Args = StoryObj<typeof Loading>;

const LoadingStory: Meta<typeof Loading> = {
  component: Loading,
  title: 'Atoms/Loading',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

export const LoadingTest: Args = {
  args: {},
};

export const LoadingWithDarkBackground: Args = {
  args: {},
  decorators: (story) => <DarkBackground>{story()}</DarkBackground>,
};

interface Props {
  children: React.ReactNode;
}

function LoadingWrapper({ children }: Props) {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <ComponentWrapper>
      <Button style={{ padding: '0px 10px' }} onClick={() => setIsShow((prev) => !prev)}>
        로딩 노출
      </Button>
      <AnimatePresence>{isShow && <DarkBackground>{children}</DarkBackground>}</AnimatePresence>
    </ComponentWrapper>
  );
}

export const LoadingWithDarkBackgroundButton: Args = {
  args: {},
  decorators: (story) => <LoadingWrapper>{story()}</LoadingWrapper>,
};

export default LoadingStory;
