import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import DesignToken from '.';
import { Meta, StoryObj } from '@storybook/react';

type Args = StoryObj<typeof DesignToken>;

const DesignTokenStory: Meta<typeof DesignToken> = {
  component: DesignToken,
  title: 'storybooks/DesignToken',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

export const DesignTokenTest: Args = {};

export default DesignTokenStory;
