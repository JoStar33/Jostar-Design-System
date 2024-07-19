import * as yup from 'yup';
import { validation } from '@/validate/validation';

const schema = {
  testSchema: yup.object({
    name: validation.REQUIRED_TEXT_8({ minLength: 1, maxLength: 30 }),
    age: validation.REQUIRED_NUMBER,
  }),
};

export default schema;
