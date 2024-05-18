import { z } from 'zod';

export const signUpFormSchema = z
  .object({
    email: z.string().email({
      message: '이메일 형식이 맞지 않습니다.',
    }),
    password: z
      .string()
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/,
        '패스워드는 암호 대소문자, 숫자, 기호 포함 8~20자 이내'
      ),
    passwordCheck: z.string(),
    job: z.object({
      name: z.string().min(1, '직업을 선택하세요.'),
      isPublic: z.boolean(),
    }),
    nickname: z
      .string()
      .min(2, '닉네임은 최소 2자 이상이어야 합니다.')
      .max(12, '닉네임은 최대 12자 이내여야 합니다.')
      .regex(
        /^[가-힣a-zA-Z0-9._]{2,12}$/,
        '닉네임은 한글, 영문 대소문자, 숫자, _ , . 만 허용됩니다.'
      ),
    gender: z.enum(['남자', '여자', '기타'], {
      errorMap: () => ({ message: '성별을 체크해주세요' }),
    }),
    genderPublic: z.boolean().default(false),
    birthDate: z.object({
      date: z.string().min(1, '생년월일을 입력해주세요.'),
      isPublic: z.boolean().default(false),
    }),
    terms: z.object({
      age: z.boolean(),
      termsOfUse: z.boolean(),
      privacyPolicy: z.boolean(),
      marketing: z.boolean().optional(),
      ads: z.boolean().optional(),
    }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ['passwordCheck'],
    message: '비밀번호가 맞지 않습니다.',
  });

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
export type TermsKeys = keyof SignUpFormValues['terms'];

export const defaultValues: SignUpFormValues = {
  email: '',
  password: '',
  passwordCheck: '',
  job: {
    name: '',
    isPublic: false,
  },
  nickname: '',
  gender: '남자',
  genderPublic: false,
  birthDate: {
    date: '',
    isPublic: false,
  },
  terms: {
    age: false,
    termsOfUse: false,
    privacyPolicy: false,
    marketing: false,
    ads: false,
  },
};
