import React from 'react';
import * as S from '@styles/components/myPage/readingTemp';

interface ReadingTempProps {
  temp: number;
}

export default function ReadingTemp({ temp }: ReadingTempProps) {
  return (
    <S.Container>
      <S.Title>독서 온도</S.Title>
      <S.Bar>
        <S.InnerBar>
          <S.TempBar
            $temp={temp}
            initial={{ width: 0 }}
            animate={{ width: `${temp}%` }}
            transition={{ duration: 0.7 }}
          />
        </S.InnerBar>
      </S.Bar>
      <S.Temp>{temp}°C</S.Temp>
    </S.Container>
  );
}
