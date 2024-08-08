import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import SelectBox from '.';
import { Meta, StoryObj } from '@storybook/react';

type Args = StoryObj<typeof SelectBox>;

const SelectBoxStory: Meta<typeof SelectBox> = {
  component: SelectBox,
  title: 'Atoms/SelectBox',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

export const SelectBoxTest: Args = {
  args: {
    placeHolder: '테스트',
    options: [
      { name: '테스트1', value: 'TEST1' },
      { name: '테스트2', value: 'TEST2' },
      { name: '테스트3', value: 'TEST3' },
    ],
  },
};

export default SelectBoxStory;
