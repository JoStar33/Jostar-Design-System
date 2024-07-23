import { Meta, StoryObj } from '@storybook/react';
import Input from '.';
import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import FormWrapper from '@/components/storybooks/FormWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '@/validate/schema';

type Args = StoryObj<typeof Input>;

interface TestForm {
  name: string;
  age: number;
}

const initFormData = {
  name: '',
  age: 0,
};

const InputStory: Meta<typeof Input> = {
  component: Input,
  title: 'Atoms/Input',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [(story) => <ComponentWrapper style={{ margin: '3rem' }}>{story()}</ComponentWrapper>],
  excludeStories: /.*Data$/,
};

export const InputTest: Args = {
  args: {
    name: 'name',
  },
  decorators: (story) => (
    <FormWrapper<TestForm>
      defaultValues={initFormData}
      onSubmit={(submitData) => {
        alert(submitData.age);
      }}
      resolver={yupResolver(schema.testSchema)}
    >
      {story()}
      <Input<TestForm> name="age" type="number" />
    </FormWrapper>
  ),
};

export const InputOtherOptionTest: Args = {
  args: {
    name: 'name',
    readOnly: true,
    placeholder: '이름을 입력해주세요.',
    label: 'readOnly & visibleError = false & placeHolder',
    visibleError: false,
  },
  decorators: (story) => (
    <FormWrapper<TestForm>
      defaultValues={initFormData}
      onSubmit={(submitData) => {
        alert(submitData.age);
      }}
      resolver={yupResolver(schema.testSchema)}
    >
      {story()}
      <Input<TestForm> required name="age" type="number" label="라벨정보" />
    </FormWrapper>
  ),
};

export default InputStory;
