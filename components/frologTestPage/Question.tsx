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
    <div>
      <QuestionWrapper>
        <QuestionNumber>{question.number}</QuestionNumber>
        <QuestionText>{question.question}</QuestionText>
      </QuestionWrapper>
      <Divider />
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
    </div>
  );
}

export default Question;

const QuestionWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const QuestionNumber = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title2};
  color: ${({ theme }) => theme.colors.key_color};
  font-weight: 700;
`;

const QuestionText = styled.p`
  width: 280px;
  margin-top: 50px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  font-weight: 500;
  flex-shrink: 0;
  text-align: left;
  line-height: normal;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
  width: 300px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
