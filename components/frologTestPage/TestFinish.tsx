'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ResultButton from '@components/frologTestPage/ResultButton';
import { ICONS } from 'constants/icon';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Message from './Message';

const TestFinish = () => {
  const answers = useSearchParams().get('answers');
  const [loading, setLoading] = useState(true);
  const [resultType, setResultType] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!loading && answers) {
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
      localStorage.removeItem('answers');
    }
  }, [loading, answers]);

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <AnalysisCompleteText
            key='loading'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            분석 중...
          </AnalysisCompleteText>
        ) : (
          <AnalysisCompleteText
            key='completed'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            분석 완료!
          </AnalysisCompleteText>
        )}
        <Logo
          src={ICONS.home.frologLogo}
          alt='Frolog Logo'
          width={120}
          height={120}
        />
        <Message loading={loading} />
      </Wrapper>
      {resultType !== null && <ResultButton type={resultType} />}
    </Container>
  );
};

export default TestFinish;

const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 82px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px;
  gap: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const AnalysisCompleteText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.rating};
  color: ${({ theme }) => theme.colors.key_color};
  font-weight: 700;
  line-height: normal;
`;

const Logo = styled(Image)`
  width: 160px;
  height: 160px;
`;
