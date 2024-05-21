'use client';

import { surveyData } from '@data/surveyData';
import { StyledCheckbox } from '@styles/GlobalStyles';
import React from 'react';
import styled from 'styled-components';

function SurveyForm() {
  return (
    <Container>
      {surveyData.map((data) => {
        return (
          <Line key={data.id}>
            <StyledCheckbox type='checkbox' />
            <span>{data.content}</span>
          </Line>
        );
      })}
    </Container>
  );
}

export default SurveyForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
  }
`;
