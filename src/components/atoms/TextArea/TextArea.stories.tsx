import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import TextArea from '.';
import { Meta, StoryObj } from '@storybook/react';
import FormWrapper from '@/components/storybooks/FormWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '@/validate/schema';
import { colors } from '@/styles/Theme';

interface TestForm {
  name: string;
  age: number;
}

type Args = StoryObj<typeof TextArea>;

const TextAreaStory: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Atoms/TextArea',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (story) => <ComponentWrapper style={{ margin: '3rem', display: 'flex', flexDirection: 'column' }}>{story()}</ComponentWrapper>,
  ],
  excludeStories: /.*Data$/,
};

const initFormData = {
  name: '',
  age: 0,
};

export const TextAreaTest: Args = {
  args: {
    name: 'name',
    minHeight: '100px',
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
      <TextArea<TestForm> name="age" minHeight="100px" />
    </FormWrapper>
  ),
};

export const OtherPropsTextAreaTest: Args = {
  args: {
    name: 'name',
    minHeight: '100px',
    label: '이름',
    required: true,
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
      <TextArea<TestForm> name="age" minHeight="100px" label="나이" />
    </FormWrapper>
  ),
};

export const CustomStyleTextAreaTest: Args = {
  args: {
    name: 'name',
    minHeight: '100px',
    label: '이름',
    required: true,
    style: {
      backgroundColor: colors.mustard,
      marginBottom: '50px',
      borderRadius: '10px',
      fontSize: '12px',
    },
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
      <TextArea<TestForm> name="age" minHeight="100px" label="나이" />
    </FormWrapper>
  ),
};

export default TextAreaStory;
