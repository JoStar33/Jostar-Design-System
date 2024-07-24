import * as yup from 'yup';
import { regex } from './regex';

yup.setLocale({
  mixed: {
    required: '필수입력',
  },
  number: {
    positive: '양수값을 입력해주세요',
    max: '999이하로 입력해주세요',
    min: '1이상 입력해주세요',
  },
});

const EMAIL_VALID_TEXT = '이메일 형식을 확인해주세요';
const KO_VALID_TEXT_1 = '모음 입력제한';
const KO_VALID_TEXT_2 = '자음 입력제한';
const KO_VALID_TEXT_3 = '한글은 허용되지않습니다';
const KO_VALID_TEXT_4 = '한글입력만 허용됩니다';
const FIRST_SPACES_VALID_TEXT = '첫글자 공백';
const LAST_SPACES_VALID_TEXT = '마지막글자 공백';
const SPACES_VALID_TEXT_2 = '띄어쓰기 불가';
const SPECIAL_VALID_TEXT_1 = '특수문자는 허용되지않습니다';

const MORE_TEXT = (more: number) => `${more}글자 이상`;
const LESS_TEXT = (less: number) => `${less}글자 이하`;
const MORE_IMAGE = (more: number) => `${more}개 이상`;
const LESS_IMAGE = (less: number) => `${less}개 이하`;

export const validation = {
  SIGN_IN_ID: yup.string().required().matches(regex.signInId, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 입력 가능합니다.'),
  EMAIL: yup.string().required().email(EMAIL_VALID_TEXT), //이메일
  PASSWORD: yup.string().required().matches(regex.password, '영 대소문자,특수문자,숫자를 포함한 8자~16자'), //비밀번호
  VALID_PASSWORD: yup.string().required().matches(regex.password, '영 대소문자,특수문자,숫자를 포함한 8자~16자'), //정규표현식 비밀번호
  PASSWORD_CONFIRM: yup.string().required(), //비밀번호 확인
  BUSINESS_NUMBER: yup.string().required().matches(regex.businessNumber, '사업자번호 형식을 확인해주세요'), //비밀번호
  PHONE_NUMBER: yup.string().required().matches(regex.phone, '010으로 시작하는 "-"를 제외한 숫자만 입력 가능합니다'), //비밀번호
  LOCAL_NUMBER: yup.string().required().matches(regex.localNumber, '"-"를 제외한 지역 전화번호만 입력 가능합니다'), //비밀번호
  IMAGE_FILES: yup.mixed().required('1장 이상의 이미지를 등록해주세요'),
  IMAGE_FILE: yup.array().min(1, '이미지를 등록해주세요').required(),
  IMAGE_FILE_OPTIONAL: yup.array().min(0, '이미지를 등록해주세요').notRequired(),
  OPTION_IMAGE_FILE: yup.array().min(0),
  SELECT_PRODUCT: yup.array().min(0),
  IMAGE_FILE_NOT_REQUIRED: yup.array(),
  REQUIRED_SELECT_BOX: yup.string().required('필수항목'),
  REQUIRED_SELECT_BOX_2: yup.mixed().required('필수항목'),
  REQUIRED_DATE: yup.string().required(),
  REQUIRED_ARRAY: yup.array().min(1, '필수입력').required(),
  REQUIRED_OPTIONS: yup.array().min(1, '옵션항목은 필수입니다').max(500, '옵션은 최대 500개까지 등록할 수 있습니다.').required(),
  REQUIRED_NUMBER: yup.number().typeError('숫자만 입력').required('필수입력'),
  OPTION_NUMBER: yup.string().matches(regex.onlyNumber, '숫자만 입력 가능합니다.').notRequired(),
  OPTION_LOCAL_NUMBER: yup.string().matches(regex.optionLocalNumber, '"-"를 제외한 지역 전화번호만 입력 가능합니다').notRequired(), //비밀번호
  REQUIRED_RATE_NUMBER: yup
    .number()
    .typeError('숫자만 입력')
    .required('필수입력')
    .min(0, '0 이상 숫자만 가능')
    .max(100, '100 이내 숫자만 가능'),
  REQUIRED_TWO_DECIMAL_NUMBER: yup.string().required().matches(regex.twoDecimalPlaces, '소수점 2자리 이내 숫자만 입력 가능'),
  //선택 ) 텍스트 - 공백체크(X) 특수문자(X) 영문(O) 한글(X)
  TEXT_1: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup.string().min(minLength, MORE_TEXT(minLength)).max(maxLength, LESS_TEXT(maxLength)),

  //선택 ) 텍스트 띄어쓰기(X) 영문(O), 숫자(0)
  TEXT_2: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .matches(regex.tagTitleEng, '영문필수, 숫자와 _만 입력 가능')
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),
  //필수 ) 텍스트 - 공백체크(O)
  REQUIRED_TEXT_1: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .required()
      .matches(regex.firstSpace, FIRST_SPACES_VALID_TEXT)
      .matches(regex.lastSpace, LAST_SPACES_VALID_TEXT)
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),

  //필수 ) 텍스트 - 공백체크(O) 특수문자(X)
  REQUIRED_TEXT_2: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .required()
      .matches(regex.firstSpace, FIRST_SPACES_VALID_TEXT)
      .matches(regex.lastSpace, LAST_SPACES_VALID_TEXT)
      .matches(regex.special_1, SPECIAL_VALID_TEXT_1)
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),

  //필수 ) 텍스트 - 공백체크(O) 특수문자(X) 한글(O) 영문(O)
  REQUIRED_TEXT_3: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .required()
      .matches(regex.firstSpace, FIRST_SPACES_VALID_TEXT)
      .matches(regex.lastSpace, LAST_SPACES_VALID_TEXT)
      .matches(regex.special_1, SPECIAL_VALID_TEXT_1)
      .matches(regex.gather, KO_VALID_TEXT_1)
      .matches(regex.consonant, KO_VALID_TEXT_2)
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),
  //필력 ) 텍스트 - 공백체크(O) 자음/모음(X) 특수문자(O) 한글(O) 영문(O)
  REQUIRED_TEXT_4: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .required()
      .matches(regex.firstSpace, FIRST_SPACES_VALID_TEXT)
      .matches(regex.lastSpace, LAST_SPACES_VALID_TEXT)
      .matches(regex.gather, KO_VALID_TEXT_1)
      .matches(regex.consonant, KO_VALID_TEXT_2)
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),
  //필수 ) 텍스트 - 공백체크(O) 특수문자(O) 영문(O) 한글(X)
  REQUIRED_TEXT_5: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .required()
      .matches(regex.firstSpace, FIRST_SPACES_VALID_TEXT)
      .matches(regex.lastSpace, LAST_SPACES_VALID_TEXT)
      .matches(regex.koreanNot, KO_VALID_TEXT_3)
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),
  //필수 ) 텍스트 - 공백체크(O) 특수문자(X) 영문(X) 한글(O)
  REQUIRED_TEXT_6: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .required()
      .matches(regex.firstSpace, FIRST_SPACES_VALID_TEXT)
      .matches(regex.lastSpace, LAST_SPACES_VALID_TEXT)
      .matches(regex.gather, KO_VALID_TEXT_1)
      .matches(regex.consonant, KO_VALID_TEXT_2)
      .matches(regex.koreanOnly, KO_VALID_TEXT_4)
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),

  //필수 ) 텍스트 - 태그 한글명
  REQUIRED_TEXT_7: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .required()
      .matches(regex.firstSpace, FIRST_SPACES_VALID_TEXT)
      .matches(regex.lastSpace, LAST_SPACES_VALID_TEXT)
      .matches(regex.gather, KO_VALID_TEXT_1)
      .matches(regex.consonant, KO_VALID_TEXT_2)
      .matches(regex.tagTitleKor, '한글 필수, 영문, 숫자만 입력 가능')
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),
  //필수 ) 텍스트 - 한글 1자 이상 필수 자음/모음(X) 특수문자(O) 영문(O) 숫자(0) 띄어쓰기(0)
  REQUIRED_TEXT_8: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .required()
      .matches(regex.firstSpace, FIRST_SPACES_VALID_TEXT)
      .matches(regex.lastSpace, LAST_SPACES_VALID_TEXT)
      .matches(regex.gather, KO_VALID_TEXT_1)
      .matches(regex.consonant, KO_VALID_TEXT_2)
      .matches(regex.brandTitleKor, '한글 필수')
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),

  //필수 ) 텍스트 - 영문 1자 이상 필수 한글(X) 영문(O) 공백체크(O) 숫자(O) 띄어쓰기(O)
  REQUIRED_TEXT_9: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .required()
      .matches(regex.firstSpace, FIRST_SPACES_VALID_TEXT)
      .matches(regex.lastSpace, LAST_SPACES_VALID_TEXT)
      .matches(regex.koreanNot, KO_VALID_TEXT_3)
      .matches(regex.brandTitleEng, '영문 필수')
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),

  //필수 ) n 이상의 숫자
  REQUIRED_NUMBER2: ({ minNum }: { minNum: number }) => yup.number().required().moreThan(minNum, `${minNum}이상의 숫자만 입력 가능`),

  //필수 ) n 미만의 숫자
  REQUIRED_NUMBER3: ({ maxNum }: { maxNum: number }) =>
    yup
      .number()
      .required()
      .lessThan(maxNum + 1, `${maxNum}미만의 숫자만 입력 가능`),

  //필수 ) n 초과 m 이하의 숫자
  REQUIRED_NUMBER4: ({ minNum, maxNum }: { minNum: number; maxNum: number }) =>
    yup.number().required().lessThan(maxNum, `${maxNum}이하의 숫자만 입력 가능`).moreThan(minNum, `${minNum}초과의 숫자만 입력 가능`),

  //필수 ) n 초과의 숫자
  REQUIRED_NUMBER5: ({ minNum }: { minNum: number }) => yup.number().required().moreThan(minNum, `${minNum}초과의 숫자만 입력 가능`),

  //선택 ) 텍스트 - 자음/모음(X) 특수문자(O) 한글(O) 영문(O)
  OPTION_TEXT: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup
      .string()
      .matches(regex.gather, KO_VALID_TEXT_1)
      .matches(regex.consonant, KO_VALID_TEXT_2)
      .min(minLength, MORE_TEXT(minLength))
      .max(maxLength, LESS_TEXT(maxLength)),

  //선택 ) 텍스트 - 자음/모음(X) 특수문자(X) 띄어쓰기(X) 한글(O)
  OPTION_TEXT2: () =>
    yup
      .string()
      .matches(regex.gather, KO_VALID_TEXT_1)
      .matches(regex.consonant, KO_VALID_TEXT_2)
      .matches(regex.allSpace, SPACES_VALID_TEXT_2)
      .matches(regex.koreanOnly, KO_VALID_TEXT_4),

  //선택 ) 텍스트 - 특수문자(O) 한글(X) 영문(O)
  OPTION_TEXT3: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup.string().matches(regex.koreanNot2, KO_VALID_TEXT_3).min(minLength, MORE_TEXT(minLength)).max(maxLength, LESS_TEXT(maxLength)),

  //선택 ) 이미지 - 이미지 개수 제한
  IMAGE_FILE_LENGTH: ({ minLength, maxLength }: { minLength: number; maxLength: number }) =>
    yup.array().min(minLength, MORE_IMAGE(minLength)).max(maxLength, LESS_IMAGE(maxLength)),

  REQUIRED_SELECT_CHECK: () =>
    yup
      .string()
      .required('필수선택')
      .test('check-test', '필수선택', (value) => {
        return value === 'Y';
      }),

  REQUIRED_ARRAY_KOR: () =>
    yup
      .array()
      .of(yup.string().required())
      .min(1, '필수입력')
      .required()
      .test('korean', '1개 이상의 한글 태그가 존재해야 합니다.', (value) => {
        return value.some((item) => /[가-힣]/.test(item));
      }),

  //내선전화, 휴대폰 둘 중 하나만이라도 일치하면 통과
  TEL: () =>
    yup
      .string()
      .required()
      .test('test-name', '010으로 시작하는 "-"를 제외한 숫자 또는 지역 전화번호만 입력 가능합니다', function (value) {
        if (regex.phone.test(value) || regex.localNumber.test(value)) return true;
        return false;
      }),
};
