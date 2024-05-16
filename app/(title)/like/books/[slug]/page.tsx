import BookCardWithLike from '@components/common/bookCard/BookCardWithLike';
import { recommendBookDummy } from '@data/dummyData/recommendDummy';
import React from 'react';
import * as S from '@styles/pages/likeBookPage';

function page() {
  return (
    <S.Container>
      {recommendBookDummy.map((data) => {
        return <BookCardWithLike key={data.id} bookData={data} />;
      })}
    </S.Container>
  );
}

export default page;
