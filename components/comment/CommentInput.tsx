import React from 'react';
import styled from 'styled-components';
import InputButton from 'public/icons/bottomSheet/InputButton.svg';
import Image from 'next/image';

function CommentInput() {
  /* ----- keyboard focus 시 body 고정 ----- */
  const onFocusInput = () => {
    document.body.style.position = 'fixed';
  };
  const onBlurInput = () => {
    document.body.style.position = 'relative';
  };

  return (
    <Container>
      <EmojiBar>
        <Emoji>&#128512;</Emoji>
        <Emoji>&#128517;</Emoji>
        <Emoji>&#128525;</Emoji>
        <Emoji>&#128514;</Emoji>
        <Emoji>&#128546;</Emoji>
      </EmojiBar>
      <InputWrapper>
        <StyledInput type='text' onFocus={onFocusInput} onBlur={onBlurInput} />
        <SendButton>
          <Image src={InputButton} alt='send' />
        </SendButton>
      </InputWrapper>
    </Container>
  );
}

export default CommentInput;

const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.bg_white};
  border-top: 2px solid ${({ theme }) => theme.colors.key_color};
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const EmojiBar = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const Emoji = styled.button`
  font-size: 24px;
  width: fit-content;
  height: fit-content;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};

  cursor: pointer;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 35px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.input_gray};
  border: none;
  color: ${({ theme }) => theme.colors.text_white};
  padding: 0 8px;

  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};

  & img {
    width: 40px;
    height: 40px;
  }
`;
