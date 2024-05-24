'use client';

import React, { useState } from 'react';
import useStore from 'store/store';
import Image from 'next/image';
import styled from 'styled-components';
import { ICONS } from 'constants/icon';
import LikeButton from './button/LikeButton';

interface BottomBarProps {
  /* 댓글 개수 */
  commentsCount: number;
}

function BottomBar({ commentsCount }: BottomBarProps) {
  const { setIsOpenComment } = useStore();
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const toggleLike = () => {
    setLike(!like);
    setLikesCount(like ? likesCount - 1 : likesCount + 1);
  };

  /* ----- 피드 공유 함수 ----- */
  const handleShare = async () => {
    try {
      await window.navigator.share({
        title: 'Book Title', // 실제 값으로 대체 필요
        url: '',
      });
    } catch (err: any) {
      if (!err.toString().includes('cancel')) {
        alert('공유 기능이 지원되지 않는 환경입니다.');
      }
    }
  };

  return (
    <BarContainer>
      <ButtonsContainer>
        <LikeButton like={like} onClick={toggleLike} likesCount={likesCount} />
        <CommentButton onClick={() => setIsOpenComment(true)}>
          <Icon src={ICONS.home.comment} alt='comment' width={16} height={16} />
          <ButtonText>댓글 {commentsCount}</ButtonText>
        </CommentButton>
      </ButtonsContainer>
      <ShareButton onClick={handleShare}>
        <Icon src={ICONS.home.share} alt='share' width={16} height={16} />
        <ButtonText>공유하기</ButtonText>
      </ShareButton>
    </BarContainer>
  );
}

export default BottomBar;

const BarContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

const CommentButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;
const ShareButton = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const Icon = styled(Image)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const ButtonText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_gray};
`;
