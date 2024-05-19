import { z } from 'zod';

export const signUpFormSchema = z
  .object({
    email: z.string(),
    password: z
      .string()
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/,
        '패스워드는 암호 대소문자, 숫자, 기호 포함 8~20자 이내'
      ),
    passwordCheck: z.string(),
    nickname: z
      .string()
      .min(2, '닉네임은 최소 2자 이상이어야 합니다.')
      .max(12, '닉네임은 최대 12자 이내여야 합니다.'),

    // .regex(
    //   /^[가-힣a-zA-Z0-9._]{2,12}$/,
    //   '닉네임은 한글, 영문 대소문자, 숫자, _ , . 만 허용됩니다.'
    // ),
    job: z.object({
      name: z.string(),
      isPublic: z.boolean().default(true),
    }),
    gender: z.object({
      name: z.string(),
      isPublic: z.boolean().default(true),
    }),
    birthDate: z.object({
      date: z.string(),
      isPublic: z.boolean().default(true),
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

const getToday = () => {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  return today;
};

export const defaultValues: SignUpFormValues = {
  email: '',
  password: '',
  passwordCheck: '',
  job: {
    name: '',
    isPublic: true,
  },
  nickname: '',
  gender: {
    name: '남자',
    isPublic: true,
  },
  birthDate: {
    date: getToday(),
    isPublic: true,
  },
  terms: {
    age: false,
    termsOfUse: false,
    privacyPolicy: false,
    marketing: false,
    ads: false,
  },
};
