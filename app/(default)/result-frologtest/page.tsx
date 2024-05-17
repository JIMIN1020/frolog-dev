'use client';

import { useSearchParams } from 'next/navigation';
import { results } from '@data/frologResultData';
import frologLogo from 'public/icons/home/frologlogo.svg';
import leftq from 'public/icons/signUp/leftq.svg';
import rightq from 'public/icons/signUp/rightq.svg';
import * as S from '@styles/pages/result-frologtestPage';
import FrologStartButton from '@components/frologTestPage/FrologStartButton';
import { v4 as uuidv4 } from 'uuid';

function ResultPage() {
  const searchParams = useSearchParams();
  const type = parseInt(searchParams.get('type') || '1', 10);
  const result = results.find((result) => result.type === type);

  return (
    <S.Container>
      <S.Logo src={frologLogo} alt='Frolog Logo' />
      {result && (
        <>
          <S.Quotes>
            <S.lQuote src={leftq} alt='Left quote' />
            <div>
              <S.Title>{result.title}</S.Title>
              <S.Subtitle>{result.subtitle}</S.Subtitle>
            </div>
            <S.rQuote src={rightq} alt='Right quote' />
          </S.Quotes>
          <S.Divider />
          <S.Description>
            {result.description.split('\n').map((line) => (
              <span key={uuidv4()}>
                {line}
                <br />
              </span>
            ))}
          </S.Description>
          <S.Hashtag>{result.hashtag}</S.Hashtag>
          <S.Divider />
          <S.Details>
            {result.details.map((detail) => (
              <li key={uuidv4()}>{detail}</li>
            ))}
          </S.Details>
          <FrologStartButton type={type} />
        </>
      )}
    </S.Container>
  );
}

export default ResultPage;
