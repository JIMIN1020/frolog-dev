import Buttons from '@components/deletePage/Buttons';
import SurveyForm from '@components/deletePage/SurveyForm';
import React from 'react';
import * as S from '@styles/pages/deleteStep2Page';

function page() {
  return (
    <S.Container>
      <S.Title>
        정말 떠나시는 건가요?
        <br />
        한번 더 생각해보지 않으시겠어요?
      </S.Title>
      <S.Wrapper>
        <S.Message>
          계정을 삭제하시려는 이유를 말씀해주세요. 제품 개선에 중요 자료로
          활용하겠습니다.
        </S.Message>
        <SurveyForm />
      </S.Wrapper>
      <Buttons />
    </S.Container>
  );
}

export default page;
