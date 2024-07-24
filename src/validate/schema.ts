import * as yup from 'yup';
import { validation } from '@/validate/validation';

const schema = {
  testSchema: yup.object({
    name: validation.REQUIRED_TEXT_6({ minLength: 1, maxLength: 30 }),
    age: validation.REQUIRED_NUMBER,
  }),
  checkTestSchema: yup.object({
    requiredAgreement: validation.REQUIRED_SELECT_CHECK(),
  }),
};

export default schema;
