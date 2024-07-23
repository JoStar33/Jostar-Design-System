import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import Icon from '.';
import { Meta, StoryObj } from '@storybook/react';

type Args = StoryObj<typeof Icon>;

const IconStory: Meta<typeof Icon> = {
  component: Icon,
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

export const IconTest: Args = {
  args: {
    name: 'Heart',
  },
  decorators: (story) => <>{story()}</>,
};

export default IconStory;
