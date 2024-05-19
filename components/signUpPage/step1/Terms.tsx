import { termsOfUse } from '@data/termOfUseData';
import { StyledCheckbox } from '@styles/GlobalStyles';
import { useFormContext } from 'react-hook-form';
import React from 'react';
import styled from 'styled-components';
import { SignUpFormValues, TermsKeys } from '../form/SignupFormSchema';
import TermsLine from './TermsLine';

const termKeys: TermsKeys[] = [
  'age',
  'termsOfUse',
  'privacyPolicy',
  'marketing',
  'ads',
];

function Terms() {
  const { watch, setValue } = useFormContext<SignUpFormValues>();
  const terms = watch('terms');

  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    termKeys.forEach((key) => {
      setValue(`terms.${key}`, isChecked);
    });
  };

  return (
    <TermsContainer>
      <CheckBoxWrapper>
        <StyledCheckbox
          type='checkbox'
          onChange={handleAllChecked}
          checked={Object.values(terms).every(Boolean)}
        />
        <span>모두 동의</span>
      </CheckBoxWrapper>
      <Wrapper>
        {termsOfUse.map((term) => (
          <TermsLine key={term.id} term={term} />
        ))}
      </Wrapper>
    </TermsContainer>
  );
}

export default Terms;

const TermsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
