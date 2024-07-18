import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import Button from '.';
import type { Preview } from '@storybook/react';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  decorators: [(story) => <ComponentWrapper style={{ margin: '3rem' }}>{story()}</ComponentWrapper>],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
} as Preview;

export const PositiveButton = {
  args: {
    buttonType: 'positive',
    children: 'Test',
    onClick: () => {
      console.log('run');
    },
  },
};
