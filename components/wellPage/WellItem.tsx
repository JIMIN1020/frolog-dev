import React from 'react';
import * as S from '@styles/components/wellPage/wellItem';
import wellIcon from 'public/icons/well/well-icon.svg';
import BottomBar from '@components/common/BottomBar';
import MenuButton from '@components/common/MenuButton';

export default function WellItem() {
  return (
    <S.Container>
      <S.WellInfoBox>
        <S.Wrapper>
          <S.WellIcon src={wellIcon} alt='well' />
          <S.InfoText>
            <h3>소설 모음</h3>
            <span>내가 책을 덮으면서 느낀 감정을 한마디로..</span>
          </S.InfoText>
        </S.Wrapper>
        <S.MenuWrapper>
          <MenuButton type='well' />
        </S.MenuWrapper>
      </S.WellInfoBox>
      <BottomBar commentsCount={12} />
    </S.Container>
  );
}
