import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import Button from '.';
import type { Meta, StoryObj } from '@storybook/react';

type Args = StoryObj<typeof Button>;

const ButtonStory: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      description: 'positiveCancel | negativeCancel | neutral | warning | positive | white | custom',
    },
  },
  args: {
    buttonType: 'positive',
  },
  decorators: [(story) => <ComponentWrapper style={{ margin: '3rem' }}>{story()}</ComponentWrapper>],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const PositiveButton: Args = {
  args: {
    buttonType: 'positive',
    children: 'Test',
    onClick: () => {
      console.log('run');
    },
  },
};

export const NeutralButton: Args = {
  args: {
    buttonType: 'neutral',
    children: 'Test',
    onClick: () => {
      console.log('run');
    },
  },
};

export const NegativeCancelButton: Args = {
  args: {
    buttonType: 'negativeCancel',
    children: 'Test',
    onClick: () => {
      console.log('run');
    },
  },
};

export const CustomStyleButton: Args = {
  args: {
    buttonType: 'custom',
    children: 'Test',
    width: '200px',
    height: '50px',
    borderRadius: '20px',
    backgroundColor: 'deepSkyblue',
    style: {
      fontWeight: 700,
    },
    onClick: () => {
      alert('run custom button');
    },
  },
};

export default ButtonStory;
