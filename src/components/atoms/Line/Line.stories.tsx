import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import Line from '.';
import { Meta, StoryObj } from '@storybook/react';

type Args = StoryObj<typeof Line>;

const LineStory: Meta<typeof Line> = {
  component: Line,
  title: 'Atoms/Line',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

export const LineTest: Args = {
  args: {
    isVertical: true,
    height: '200px',
  },
};

export const LineHorizontalTest: Args = {
  args: {
    isVertical: false,
    width: '200px',
  },
};

export default LineStory;
