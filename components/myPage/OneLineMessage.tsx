'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ICONS } from 'constants/icon';

interface OneLineMessageProps {
  message: string;
  isEdit: boolean;
}

export default function OneLineMessage({
  isEdit,
  message,
}: OneLineMessageProps) {
  const [curMessage, setCurMessage] = useState<string>(message);
  return (
    <Message>
      {isEdit ? (
        <InputWrapper>
          <MessageInput
            type='text'
            value={curMessage}
            maxLength={20}
            onChange={(e) => setCurMessage(e.target.value)}
          />
          <Image
            src={ICONS.myPage.editMessage}
            alt='edit'
            width={20}
            height={20}
          />
        </InputWrapper>
      ) : (
        <span>{curMessage}</span>
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
