import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

interface AnswerBoxProps {
  answer: string;
  index: number;
  onSelect: () => void;
}

function AnswerBox({ answer, index, onSelect }: AnswerBoxProps) {
  return (
    <AnswerBoxWrapper onClick={onSelect}>
      <AnswerNumber>{index + 1}</AnswerNumber>
      <Answer>
        {answer.split('\n').map((line) => (
          <React.Fragment key={uuidv4()}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Answer>
    </AnswerBoxWrapper>
  );
}

export default AnswerBox;

const AnswerBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 62px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.key_color_light};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0 0 0 16px;
  margin-bottom: 46px;
`;

const AnswerNumber = styled.span`
  margin-right: 16px;
  font-size: ${({ theme }) => theme.fontSize.title2};
  color: ${({ theme }) => theme.colors.key_color};
  font-weight: 700;
`;

const Answer = styled.span`
  margin-right: 16px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 400;
  line-height: normal;
`;
