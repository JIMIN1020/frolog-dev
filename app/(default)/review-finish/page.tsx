import React from 'react';
import * as S from '@styles/pages/reviewFinishPage';
import frologLogo from 'public/icons/home/frologlogo.svg';
import FinishButtons from '@components/newReviewPage/FinishButtons';

function ReviewFinishPage() {
  return (
    <S.Container>
      <S.LogoAndMessageContainer>
        <S.Message
          initial={{ opacity: 0.7, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
          <span>n번째 리뷰 작성완료!</span>
          <h2>작성완료!</h2>
        </S.Message>
        <S.Logo src={frologLogo} alt='Frolog Logo' />
      </S.LogoAndMessageContainer>
      <FinishButtons />
    </S.Container>
  );
}

export default ReviewFinishPage;
