'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import frologLogo from 'public/icons/home/frologlogo.svg';
import leftq from 'public/icons/signUp/leftq.svg';
import rightq from 'public/icons/signUp/rightq.svg';
import * as S from '@styles/pages/analysis-frologtestPage';
import ResultButton from '@components/frologTestPage/ResultButton';

const AnalysisPage = () => {
  const searchParams = useSearchParams();
  const answers = searchParams.get('answers');
  const [resultType, setResultType] = useState<number | null>(null);

  useEffect(() => {
    if (answers) {
      const answerArray = JSON.parse(answers as string);
      const counts = [0, 0, 0];

      answerArray.forEach((answer: number) => {
        if (answer >= 0) {
          counts[answer] += 1;
        }
      });

      const maxCount = Math.max(...counts);
      const resultIndexes = counts.reduce((acc, count, index) => {
        if (count === maxCount) {
          acc.push(index);
        }
        return acc;
      }, [] as number[]);

      const resultIndex =
        resultIndexes.length > 1
          ? resultIndexes[Math.floor(Math.random() * resultIndexes.length)]
          : resultIndexes[0];
      setResultType(resultIndex + 1); // `resultType`은 1부터 시작해서 1 더해줌.
    }
  }, [answers]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>Frolog</S.Title>
      </S.Header>
      <S.ProgressBar />
      <S.AnalysisCompleteText>분석완료!</S.AnalysisCompleteText>
      <S.Logo src={frologLogo} alt='Frolog Logo' />
      <S.MessageContainer>
        <S.lQuote src={leftq} alt='Left quote' />
        <S.Message>
          00님의 <br />
          독서 성향은...
        </S.Message>
        <S.rQuote src={rightq} alt='Right quote' />
      </S.MessageContainer>
      {resultType !== null && <ResultButton type={resultType} />}
    </S.Container>
  );
};

export default AnalysisPage;
