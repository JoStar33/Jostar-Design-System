import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.';
import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import FormWrapper from '@/components/storybooks/FormWrapper';

interface TestForm {
  agreement1: 'Y' | 'N';
  agreement2: 'Y' | 'N';
}

type Args = StoryObj<typeof Checkbox<TestForm>>;

const initFormData: TestForm = {
  agreement1: 'N',
  agreement2: 'N',
};

const CheckboxStory: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Atoms/Checkbox',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [(story) => <ComponentWrapper style={{ margin: '3rem' }}>{story()}</ComponentWrapper>],
  excludeStories: /.*Data$/,
};

export const CheckboxTest: Args = {
  args: {
    name: 'agreement2',
    children: '확인했습니다.',
    style: { width: '300px' },
    value: 'Y',
  },
  decorators: (story) => (
    <FormWrapper<TestForm>
      defaultValues={initFormData}
      onSubmit={(submitData) => {
        alert(submitData.agreement1);
      }}
      style={{ gap: '20px' }}
    >
      {story()}
      <Checkbox<TestForm> name="agreement1" style={{ width: '300px' }} value="Y">
        확인했습니다.
      </Checkbox>
    </FormWrapper>
  ),
};

export default CheckboxStory;
