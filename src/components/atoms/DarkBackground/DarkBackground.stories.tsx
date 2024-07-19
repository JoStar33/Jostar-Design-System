import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import type { Meta, StoryObj } from '@storybook/react';
import DarkBackground from '@/components/atoms/DarkBackground';
import React from 'react';
import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';

type Args = StoryObj<typeof DarkBackground>;

const DarkBackgroundStory: Meta<typeof DarkBackground> = {
  component: DarkBackground,
  title: 'Atoms/DarkBackground',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [(story) => <ComponentWrapper style={{ margin: '3rem' }}>{story()}</ComponentWrapper>],
  excludeStories: /.*Data$/,
};

export const ShowDarkBackground: Args = {
  args: {
    children: (
      <Text variant="h3" color="white" style={{ fontWeight: 800 }}>
        열림
      </Text>
    ),
  },
  decorators: (story) => {
    return <DarkBackgroundComponent>{story()}</DarkBackgroundComponent>;
  },
};

function DarkBackgroundComponent({ children }: { children: React.ReactNode }) {
  const [isShow, setIsShow] = React.useState(false);
  const handleClick = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <ComponentWrapper>
      <Button onClick={handleClick}>백그라운드 오픈</Button>
      {isShow && children}
    </ComponentWrapper>
  );
}

export default DarkBackgroundStory;
