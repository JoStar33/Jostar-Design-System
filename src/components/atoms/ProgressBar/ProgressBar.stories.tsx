import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import ProgressBar from '.';
import { Meta, StoryObj } from '@storybook/react';

type Args = StoryObj<typeof ProgressBar>;

const ProgressBarStory: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'Atoms/ProgressBar',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

export const ProgressBarTest: Args = {
  args: {
    height: '20px',
  },
};

export default ProgressBarStory;
