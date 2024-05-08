'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import commentIcon from 'public/icons/home/comment.svg';
import shareIcon from 'public/icons/home/share.svg';
import CommentBottomSheet from '../comment/CommentBottomSheet';
import LikeButton from './button/LikeButton';

interface BottomBarProps {
  /* 댓글 개수 */
  commentsCount: number;
}

function BottomBar({ commentsCount }: BottomBarProps) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const toggleLike = () => {
    setLike(!like);
    setLikesCount(like ? likesCount - 1 : likesCount + 1);
  };

  /* ----- 댓글 바텀시트 등장 시 스크롤 방지 ----- */
  useEffect(() => {
    if (commentOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [commentOpen]);

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
        <CommentButton onClick={() => setCommentOpen(true)}>
          <Icon src={commentIcon} alt='comment' />
          <ButtonText>댓글 {commentsCount}</ButtonText>
        </CommentButton>
      </ButtonsContainer>
      <ShareButton onClick={handleShare}>
        <Icon src={shareIcon} alt='share' />
        <ButtonText>공유하기</ButtonText>
      </ShareButton>
      <AnimatePresence>
        {commentOpen && <CommentBottomSheet setOpen={setCommentOpen} />}
      </AnimatePresence>
    </BarContainer>
  );
}

export default BottomBar;

const BarContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
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
  margin-right: 42px;
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
