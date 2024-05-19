'use client';

import { TermsOfUseType } from '@data/termOfUseData';
import { AnimatePresence } from 'framer-motion';
import { StyledCheckbox } from '@styles/GlobalStyles';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import TermsOfUse from './TermsOfUse';
import TextRenderer from '../textRender';
import { SignUpFormValues, TermsKeys } from '../form/SignupFormSchema';

interface TermsLineProps {
  term: TermsOfUseType;
}

function TermsLine({ term }: TermsLineProps) {
  const { register } = useFormContext<SignUpFormValues>();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <TermsItem>
      <StyledCheckbox
        type='checkbox'
        {...register(`terms.${term.name as TermsKeys}`)}
      />
      <TermLabel>
        <TextRenderer text={term.label} />
      </TermLabel>
      {term.view && <ViewButton onClick={() => setOpen(true)}>보기</ViewButton>}
      <AnimatePresence>
        {open && (
          <TermsOfUse closeModal={() => setOpen(false)} text={term.view!} />
        )}
      </AnimatePresence>
    </TermsItem>
  );
}

export default TermsLine;

const TermsItem = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
`;

const TermLabel = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: normal;
  font-weight: 300;
  margin: 0 6px;
  word-wrap: break-word;
`;

const ViewButton = styled.button`
  margin-top: 4px;
  height: 100%;
  color: ${({ theme }) => theme.colors.text_gray};
  text-align: right;
  text-decoration-line: underline;
`;
