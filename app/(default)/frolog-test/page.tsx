'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import * as S from '@styles/pages/frologTestPage';
import ProgressBar from '@components/frologTestPage/ProgressBar';
import Question from '@components/frologTestPage/Question';
import { questions } from '@data/frologQuestionData';
import back from 'public/icons/signUp/back.svg';

function FrologTestPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stepParam = searchParams.get('step');
  const step = stepParam ? parseInt(stepParam, 10) : 1;
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
    if (step > totalSteps || step < 1) {
      router.push('/');
    }
  }, [step, totalSteps, router]);

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
      router.push(`/analysis-frologtest?${query}`);
    } else {
      router.push(`/frolog-test?step=${step + 1}`);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton
          src={back}
          alt='뒤로가기'
          onClick={() => router.back()}
          style={{ visibility: step > 1 ? 'visible' : 'hidden' }}
        />
        <S.TitleWrapper>
          <S.Title>Frolog</S.Title>
        </S.TitleWrapper>
        <div style={{ width: 28 }} />
      </S.Header>
      <ProgressBar currentStep={step} totalSteps={totalSteps} />
      <Question
        currentQuestion={step - 1}
        onSelectAnswer={handleAnswerSelect}
      />
    </S.Container>
  );
}

export default FrologTestPage;
