import React, { useEffect, useState } from 'react';
import { InputContainer, InputTitle } from '@styles/components/common/signUp';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { SignUpFormValues } from '../form/SignupFormSchema';

interface EmailFormProps {
  isEmailVerified: boolean;
  setEmailVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

function EmailForm({ isEmailVerified, setEmailVerified }: EmailFormProps) {
  const { register, watch } = useFormContext<SignUpFormValues>();

  const [verificationCode, setVerificationCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(600);
  const [isTimerActive, setTimerActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      setErrorMessage('인증시간이 만료되었습니다');
      setSuccessMessage('');
    }
    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft]);

  const sendVerificationCode = async () => {
    const isValid = checkEmail(watch('email'));

    if (isValid) {
      setVerificationCode('123456'); // 예시로 '123456'을 인증 코드로 설정
      setTimerActive(true);
      setErrorMessage('');
    } else {
      setErrorMessage('이메일 형식이 유효하지 않습니다');
      setSuccessMessage('');
    }
  };

  const checkEmail = (email: string) => {
    const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regExp.test(email);
  };

  const verifyCode = () => {
    if (verificationCode === inputCode) {
      setEmailVerified(true);
      setErrorMessage('');
      setSuccessMessage('이메일이 인증되었습니다');
    } else if (timeLeft > 0) {
      setErrorMessage('인증번호가 올바르지 않습니다');
      setSuccessMessage('');
    }
  };

  return (
    <Container>
      <Inputs>
        <InputContainer>
          <InputTitle>
            이메일 <small>*</small>
          </InputTitle>
          <InputWrapper>
            <StyledInput
              autoFocus
              disabled={isEmailVerified}
              placeholder='이메일을 입력하세요'
              {...register('email', {
                required: '이메일을 입력하세요',
              })}
            />
            <Button onClick={sendVerificationCode}>인증 요청</Button>
          </InputWrapper>
        </InputContainer>
        {isTimerActive && (
          <CertifyInputWrapper>
            <CertifyInput>
              <StyledInput
                autoFocus
                disabled={isEmailVerified}
                placeholder='인증번호를 입력하세요'
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
              />
              <Timer>
                {Math.floor(timeLeft / 60)}:
                {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
              </Timer>
            </CertifyInput>
            {timeLeft > 0 ? (
              <Button onClick={verifyCode}>확인</Button>
            ) : (
              <Button onClick={sendVerificationCode}>재요청</Button>
            )}
          </CertifyInputWrapper>
        )}
      </Inputs>
      {errorMessage && <Message $isError={true}>{errorMessage}</Message>}
      {successMessage && <Message $isError={false}>{successMessage}</Message>}
    </Container>
  );
}

export default EmailForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const CertifyInputWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const CertifyInput = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledInput = styled.input<{ disabled: boolean }>`
  flex: 1;
  padding: 16px 10px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 12px;
  color: ${({ theme, disabled }) =>
    disabled ? '#00000054' : theme.colors.text_black};
`;

const Button = styled.button`
  width: 85px;
  font-size: ${({ theme }) => theme.fontSize.md};
  background-color: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  border: none;
  font-weight: 600;
  border-radius: 12px;
`;

const Timer = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.button_gray};
  position: absolute;
  right: 15px;
  top: 49%;
  transform: translateY(-50%);
`;

const Message = styled.span<{ $isError: boolean }>`
  width: 100%;
  height: 14px;
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.error_red : theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin: 8px 0;
`;
