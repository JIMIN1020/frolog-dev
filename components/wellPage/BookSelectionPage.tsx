import InputWithBtnHeader from '@components/common/header/InputWithBtnHeader';
import SelectBook from '@components/wellPage/SelectBook';
import { bookDummy } from '@data/dummyData/bookDummy';
import React from 'react';
import * as S from '@styles/components/well/bookSelection';

interface BookSelectionPageProps {
  handleDone: () => void;
}

function BookSelectionPage({ handleDone }: BookSelectionPageProps) {
  return (
    <S.Container>
      <InputWithBtnHeader handleDone={handleDone} />
      <S.BookContainer>
        <S.Wrapper>
          <p>내가 리뷰 쓴 도서 리스트</p>
          <S.BookWrapper>
            {bookDummy.map((book) => {
              return <SelectBook key={book.id} bookData={book} />;
            })}
          </S.BookWrapper>
        </S.Wrapper>
      </S.BookContainer>
    </S.Container>
  );
}

export default BookSelectionPage;
