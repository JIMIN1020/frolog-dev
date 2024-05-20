import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { questions } from '@data/frologQuestionData';
import AnswerBox from './AnswerBox';

interface QuestionProps {
  currentQuestion: number;
  onSelectAnswer: (answerIndex: number) => void;
}

function Question({ currentQuestion, onSelectAnswer }: QuestionProps) {
  const question = questions[currentQuestion];
  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <Container>
      <QuestionWrapper>
        <QuestionNumber>{question.number}</QuestionNumber>
        <QuestionText>{question.question}</QuestionText>
      </QuestionWrapper>
      <AnswersWrapper>
        {question.answers.map((answer, index) => (
          <AnswerBox
            key={uuidv4()}
            answer={answer}
            index={index}
            onSelect={() => onSelectAnswer(index)}
          />
        ))}
      </AnswersWrapper>
    </Container>
  );
}

export default Question;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
  padding: 30px 0;
`;

const QuestionNumber = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title2};
  color: ${({ theme }) => theme.colors.key_color};
  font-weight: 700;
`;

const QuestionText = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  font-weight: 500;
  text-align: left;
  line-height: normal;
`;

const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 30px;
`;
