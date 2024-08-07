import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import Tabs from '.';
import { Meta, StoryObj } from '@storybook/react';

type Args = StoryObj<typeof Tabs>;

const TabsStory: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Molecules/Tabs',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

export const TabsTest: Args = {
  args: {
    tabList: [
      { name: '탭', value: 'TAB' },
      { name: '탭 테스트', value: 'TAB_TEST' },
    ],
  },
  decorators: [(story) => <>{story()}</>],
};

export const ManyTabsTest: Args = {
  args: {
    tabList: [
      { name: '탭', value: 'TAB' },
      { name: '탭 테스트1', value: 'TAB_TEST1' },
      { name: '탭 테스트2', value: 'TAB_TEST2' },
      { name: '탭 테스트3', value: 'TAB_TEST3' },
      { name: '탭 테스트4', value: 'TAB_TEST4' },
      { name: '탭 테스트5', value: 'TAB_TEST5' },
    ],
  },
  decorators: [(story) => <>{story()}</>],
};

export default TabsStory;
