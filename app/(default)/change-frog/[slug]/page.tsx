import TitleHeader from '@components/common/header/TitleHeader';
import Image from 'next/image';
import React from 'react';
import * as S from '@styles/pages/changeFrogPage';
import CustomItem from '@components/myPage/CustomItem';
import { ICONS } from 'constants/icon';

function ChangeFrogPage() {
  return (
    <S.Container>
      <TitleHeader button={true} />
      <S.Wrapper>
        <S.IconWrapper>
          <Image src={ICONS.myPage.frog} alt='frog' width={200} height={200} />
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
