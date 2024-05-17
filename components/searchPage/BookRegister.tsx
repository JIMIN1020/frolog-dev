'use client';

import CommonPopUp from '@components/common/popUp/CommonPopUp';
import { StyledButton, StyledInput } from '@styles/GlobalStyles';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface BookRegisterForm {
  title: string;
  author: string;
}

function BookRegister() {
  const [open, setOpen] = useState<boolean>(false);
  const { register, watch } = useForm<BookRegisterForm>({
    defaultValues: { title: '', author: '' },
  });

  /* ----- 신청 처리 핸들러 ----- */
  const handleRegister = () => {
    setOpen(true);
  };

  return (
    <Container>
      <Wrapper>
        <TextBox>
          <h2>앗! 이 책은 아직 없어요</h2>
          <p>
            책 제목과 저자를 남기시면
            <br />
            추후에 책이 추가될 때, 알려드릴게요!
          </p>
        </TextBox>
        <InputWrapper>
          <StyledInput
            type='text'
            placeholder='책 제목 입력'
            {...register('title', { required: true })}
          />
          <StyledInput
            type='text'
            placeholder='저자 입력'
            {...register('author', { required: true })}
          />
        </InputWrapper>
      </Wrapper>
      <StyledButton
        type='button'
        onClick={handleRegister}
        disabled={!watch('title') || !watch('author')}
      >
        책 추가 알림 신청
      </StyledButton>
      <AnimatePresence>
        {open && (
          <CommonPopUp
            title='신청이 접수되었어요!'
            text={
              <>
                입력하신 책의 신청이 정상적으로 접수되었어요.
                <br />
                추후에 책이 추가될 때, 알려드릴게요.
              </>
            }
            btnText='다른 책 구경하기'
            closePopup={() => setOpen(false)}
            handleClick={() => window.location.reload()}
          />
        )}
      </AnimatePresence>
    </Container>
  );
}

export default BookRegister;

const Container = styled.form`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 140px);
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.key_color};
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  gap: 80px;
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  & h2 {
    color: ${({ theme }) => theme.colors.text_black};
    font-size: ${({ theme }) => theme.fontSize.title};
  }

  & p {
    color: ${({ theme }) => theme.colors.text_lightgray};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 140%;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
