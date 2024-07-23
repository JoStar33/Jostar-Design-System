import { Meta, StoryObj } from '@storybook/react';
import RadioButton from '.';
import ComponentWrapper from '@/components/storybooks/ComponentWrapper';
import FormWrapper from '@/components/storybooks/FormWrapper';

interface TestForm {
  gender: 'MAN' | 'WOMAN';
}

interface SoManyForm {
  test: '1' | '2' | '3' | '4' | '5' | '6';
}

type Args = StoryObj<typeof RadioButton<TestForm>>;

type SoManyArgs = StoryObj<typeof RadioButton<SoManyForm>>;

const initFormData: TestForm = {
  gender: 'MAN',
};

const initSoManyFormData: SoManyForm = {
  test: '3',
};

const RadioButtonStory: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Atoms/RadioButton',
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [(story) => <ComponentWrapper style={{ margin: '3rem' }}>{story()}</ComponentWrapper>],
  excludeStories: /.*Data$/,
};

export const RadioButtonTest: Args = {
  args: {
    name: 'gender',
    children: '남성',
    style: { width: '300px' },
    value: 'MAN',
  },
  decorators: (story) => (
    <FormWrapper<TestForm>
      defaultValues={initFormData}
      onSubmit={(submitData) => {
        alert(submitData.gender);
      }}
      style={{ gap: '20px' }}
    >
      {story()}
      <RadioButton<TestForm> name="gender" style={{ width: '300px' }} value="WOMAN">
        여성
      </RadioButton>
    </FormWrapper>
  ),
};

export const SoManyRadioButtonTest: SoManyArgs = {
  args: {
    name: 'test',
    children: '테스트 1',
    style: { width: '300px' },
    value: '1',
  },
  decorators: (story) => (
    <FormWrapper<SoManyForm>
      defaultValues={initSoManyFormData}
      onSubmit={(submitData) => {
        alert(submitData.test);
      }}
      style={{ gap: '20px' }}
    >
      {story()}
      <RadioButton<SoManyForm> name="test" style={{ width: '300px' }} value="2">
        테스트 2
      </RadioButton>
      <RadioButton<SoManyForm> name="test" style={{ width: '300px' }} value="3">
        테스트 3
      </RadioButton>
      <RadioButton<SoManyForm> name="test" style={{ width: '300px' }} value="4">
        테스트 4
      </RadioButton>
      <RadioButton<SoManyForm> name="test" style={{ width: '300px' }} value="5">
        테스트 5
      </RadioButton>
      <RadioButton<SoManyForm> name="test" style={{ width: '300px' }} value="6">
        테스트 6
      </RadioButton>
    </FormWrapper>
  ),
};

export default RadioButtonStory;
