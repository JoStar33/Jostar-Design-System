import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import Space from '.';
import Text from '@/components/atoms/Text';
import { Meta, StoryObj } from '@storybook/react';

type Args = StoryObj<typeof Space>;

const SpaceStory: Meta<typeof Space> = {
  component: Space,
  title: 'Atoms/Space',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

export const SpaceTest: Args = {
  args: {
    height: '100px',
  },
  decorators: (story) => (
    <>
      <Text variant="h1">상단</Text>
      {story()}
      <Text variant="h1">하단</Text>
    </>
  ),
};

export default SpaceStory;
