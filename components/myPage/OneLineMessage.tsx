'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import editIcon from 'public/icons/mypage/edit-message.svg';
import Image from 'next/image';

interface OneLineMessageProps {
  isEdit: boolean;
}

export default function OneLineMessage({ isEdit }: OneLineMessageProps) {
  const [message, setMessage] = useState<string>(
    '내가 책을 덮으면서 느낀 감정을 한마디로..'
  );
  return (
    <Message>
      {isEdit ? (
        <InputWrapper>
          <MessageInput
            type='text'
            value={message}
            maxLength={20}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Image src={editIcon} alt='edit' />
        </InputWrapper>
      ) : (
        <span>{message}</span>
      )}
    </Message>
  );
}

const Message = styled.div`
  width: 100%;
  padding: 20px 0px 40px 0;
  display: flex;
  justify-content: center;

  & span {
    color: ${({ theme }) => theme.colors.text_black};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
  padding-bottom: 4px;
`;

const MessageInput = styled.input`
  flex: 1;
  border: none;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.md};

  &:focus {
    outline: none;
  }
`;
