'use client';

import { useSearchParams } from 'next/navigation';
import { results } from '@data/frologResultData';
import * as S from '@styles/pages/result-frologtestPage';
import FrologStartButton from '@components/frologTestPage/FrologStartButton';
import { v4 as uuidv4 } from 'uuid';
import { ICONS } from 'constants/icon';
import { StyledButton } from '@styles/GlobalStyles';

function ResultPage() {
  const searchParams = useSearchParams();
  const type = parseInt(searchParams.get('type') || '1', 10);
  const result = results.find((result) => result.type === type);

  /* ----- 결과 공유 함수 ----- */
  const handleShare = async () => {
    try {
      await window.navigator.share({
        title: 'Frolog 독서 성향 테스트',
        url: `https://frolog-dev-sepia.vercel.app/frolog-test/result?type=${type}`, // 임시
      });
    } catch (err: any) {
      if (!err.toString().includes('cancel')) {
        alert('공유 기능이 지원되지 않는 환경입니다.');
      }
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo
          src={ICONS.home.frologLogo}
          alt='Frolog Logo'
          width={120}
          height={120}
        />
        {result && (
          <>
            <S.Quotes>
              <S.lQuote
                src={ICONS.singUp.leftq}
                alt='Left quote'
                width={20}
                height={20}
              />
              <S.TitleWrapper>
                <S.Title>{result.title}</S.Title>
                <S.Subtitle>{result.subtitle}</S.Subtitle>
              </S.TitleWrapper>
              <S.rQuote
                src={ICONS.singUp.rightq}
                alt='Right quote'
                width={20}
                height={20}
              />
            </S.Quotes>

            <S.Description>
              {result.description.split('\n').map((line) => (
                <span key={uuidv4()}>
                  {line}
                  <br />
                </span>
              ))}
              <S.Hashtag>{result.hashtag}</S.Hashtag>
            </S.Description>

            <S.Details>
              {result.details.map((detail) => (
                <li key={uuidv4()}>{detail}</li>
              ))}
            </S.Details>
          </>
        )}
      </S.Wrapper>
      <S.ButtonContainer>
        <StyledButton onClick={handleShare} disabled={false}>
          결과 공유하기
        </StyledButton>
        <FrologStartButton type={type} />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ResultPage;
