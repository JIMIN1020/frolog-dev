'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Question from '@components/frologTestPage/Question';
import { questions } from '@data/frologQuestionData';
import styled from 'styled-components';
import TestFinish from '@components/frologTestPage/TestFinish';

function FrologTestPage() {
  const router = useRouter();
  const step = parseInt(useSearchParams().get('step')!, 10);
  const totalSteps = questions.length;

  const [answers, setAnswers] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const savedAnswers = localStorage.getItem('answers');
      return savedAnswers
        ? JSON.parse(savedAnswers)
        : Array(totalSteps).fill(-1);
    }
    return Array(totalSteps).fill(-1);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('answers', JSON.stringify(answers));
    }
  }, [answers]);

  const handleAnswerSelect = (answerIndex: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[step - 1] = answerIndex;
    setAnswers(updatedAnswers);

    if (step === totalSteps) {
      const query = new URLSearchParams({
        answers: JSON.stringify(updatedAnswers),
      }).toString();
      localStorage.setItem('test', 'true'); // 테스트 여부 저장 -> 임시
      router.push(`/frolog-test?step=8&${query}`);
    } else {
      router.push(`/frolog-test?step=${step + 1}`);
    }
  };

  return (
    <>
      {step <= 7 ? (
        <Container>
          <Question
            currentQuestion={step - 1}
            onSelectAnswer={handleAnswerSelect}
          />
        </Container>
      ) : (
        <TestFinish />
      )}
    </>
  );
}

export default FrologTestPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  height: fit-content;
  padding: 30px;
`;
