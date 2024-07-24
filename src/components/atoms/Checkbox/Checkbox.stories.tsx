import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.';
import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import FormWrapper from '@/components/storybooks/FormWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '@/validate/schema';

interface TestForm {
  agreement1: 'Y' | 'N';
  agreement2: 'Y' | 'N';
}

interface RequiredTestForm {
  requiredAgreement: string;
}

type Args = StoryObj<typeof Checkbox<TestForm>>;

type RequiredArgs = StoryObj<typeof Checkbox<RequiredTestForm>>;

const initFormData: TestForm = {
  agreement1: 'N',
  agreement2: 'N',
};

const initRequiredFormData: RequiredTestForm = {
  requiredAgreement: 'N',
};

//checkTestSchema
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

export const ValidateCheckboxTest: RequiredArgs = {
  args: {
    name: 'requiredAgreement',
    children: '확인했습니다.',
    style: { width: '300px' },
    value: 'Y',
  },
  decorators: (story) => (
    <FormWrapper<RequiredTestForm>
      defaultValues={initRequiredFormData}
      onSubmit={(submitData) => {
        alert(submitData.requiredAgreement);
      }}
      resolver={yupResolver(schema.checkTestSchema)}
      style={{ gap: '20px' }}
    >
      {story()}
    </FormWrapper>
  ),
};

export default CheckboxStory;
