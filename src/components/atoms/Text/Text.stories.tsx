import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import Text from '.';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/atoms/Button';

type Args = StoryObj<typeof Text>;

const TextStory: Meta<typeof Text> = {
  component: Text,
  title: 'Atoms/Text',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'h1 | h2 | h3 | h4 | body1 | body2 | body3 | bodySB | caption | button1 | undefined',
    },
  },
  args: {},
  decorators: [(story) => <ComponentWrapper style={{ margin: '3rem' }}>{story()}</ComponentWrapper>],
  excludeStories: /.*Data$/,
};

export const H1Text: Args = {
  args: {
    variant: 'h1',
    children: 'Test',
  },
};

export const H2Text: Args = {
  args: {
    variant: 'h2',
    children: 'Test',
  },
};

export const body1Text: Args = {
  args: {
    variant: 'body1',
    children: 'Test',
  },
};

export const body2Text: Args = {
  args: {
    variant: 'body2',
    children: 'Test',
  },
};

export const captionText: Args = {
  args: {
    variant: 'caption',
    children: 'Test',
  },
};

export const WithButtonBodyText: Args = {
  args: {
    variant: 'body1',
    children: 'Button Text',
    color: 'white',
  },
  decorators: (story) => (
    <Button buttonType="positive" width="200px">
      {story()}
    </Button>
  ),
};

export const WithButtonCaptionText: Args = {
  args: {
    variant: 'caption',
    children: 'Button Text',
    color: 'white',
  },
  decorators: (story) => (
    <Button buttonType="positive" width="200px">
      {story()}
    </Button>
  ),
};

export const EllipsisText: Args = {
  args: {
    variant: 'caption',
    children: 'long long long long long long long long long long Text',
    isEllipsis: true,
  },
  decorators: (story) => <div style={{ width: '300px' }}>{story()}</div>,
};

export default TextStory;
