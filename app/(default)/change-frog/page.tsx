import TitleHeader from '@components/common/header/TitleHeader';
import Image from 'next/image';
import React from 'react';
import * as S from '@styles/pages/changeFrogPage';
import frogIcon from 'public/icons/mypage/frog.svg';
import CustomItem from '@components/myPage/CustomItem';

function ChangeFrogPage() {
  return (
    <S.Container>
      <TitleHeader button={true} />
      <S.Wrapper>
        <S.IconWrapper>
          <Image src={frogIcon} alt='frog' />
        </S.IconWrapper>
        <S.ItemList>
          <CustomItem isLocked={false} />
          <CustomItem isLocked={false} />
          <CustomItem isLocked={true} />
        </S.ItemList>
      </S.Wrapper>
    </S.Container>
  );
}

export default ChangeFrogPage;
