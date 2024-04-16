import React from 'react';
import styled from 'styled-components';
import likeDefault from 'public/icons/bottomSheet/LikeDefault.svg';
import likeClicked from 'public/icons/bottomSheet/LikeClicked.svg';
import Image from 'next/image';

interface LikeButtonProps {
  like: boolean;
  toggleLike: () => void;
  likesCount: number;
}

function LikeButton({ like, toggleLike, likesCount }: LikeButtonProps) {
  return (
    <Button onClick={toggleLike}>
      <Icon src={like ? likeClicked : likeDefault} alt='like' />
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
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.text_gray};
`;
