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

export default InputStory;
