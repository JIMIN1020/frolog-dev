'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ICONS } from 'constants/icon';
import useStore from 'store/store';

interface AddBookButtonProps {
  add: boolean;
  onClick: () => void;
  addCount: number;
}

function AddBookButton({ add, onClick, addCount }: AddBookButtonProps) {
  const { user, setIsOpenLoginPopUp } = useStore();

  const handleClick = () => {
    if (user) {
      onClick();
    } else {
      setIsOpenLoginPopUp(true);
    }
  };
  return (
    <Button onClick={handleClick} $isAdded={add}>
      <Image
        src={add ? ICONS.bookDetail.saved : ICONS.bookDetail.add}
        alt='add'
        width={24}
        height={24}
      />
      <ButtonText>관심도서</ButtonText>
      <span>{addCount}</span>
    </Button>
  );
}

export default AddBookButton;

const Button = styled.button<{ $isAdded: boolean }>`
  display: flex;
  align-items: center;
  border: none;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.bg_white};
  margin: 10px 0;
  color: ${({ theme, $isAdded }) =>
    $isAdded ? theme.colors.key_color_deep : theme.colors.text_gray};

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const ButtonText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
`;
