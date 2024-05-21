'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ICONS } from 'constants/icon';
import useStore from 'store/store';

interface LikeButtonProps {
  like: boolean;
  onClick: () => void;
  likesCount: number;
}

function LikeButton({ like, onClick, likesCount }: LikeButtonProps) {
  const { user, setIsOpenLoginPopUp } = useStore();

  const handleClick = () => {
    if (user) {
      onClick();
    } else {
      setIsOpenLoginPopUp(true);
    }
  };
  return (
    <Button onClick={handleClick}>
      <Icon
        src={like ? ICONS.common.like.clicked : ICONS.common.like.default}
        alt='like'
        width={20}
        height={20}
      />
      <ButtonText>좋아요 {likesCount}</ButtonText>
    </Button>
  );
}

export default LikeButton;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

const ButtonText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_gray};
`;
