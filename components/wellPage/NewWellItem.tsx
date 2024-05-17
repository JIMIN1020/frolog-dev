'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import ImgChangePopUp from '@components/common/popUp/ImgChangePopUp';
import { useFormContext } from 'react-hook-form';
import { ICONS } from 'constants/icon';

export default function NewWellItem() {
  const [imgChange, setImgChange] = useState(false);
  const { register, setValue } = useFormContext();

  return (
    <Container>
      <IconWrapper onClick={() => setImgChange(true)}>
        <WellIcon src={ICONS.well.well} alt='well' width={59} height={59} />
        <ImgChangeIcon
          src={ICONS.common.change}
          alt='change'
          width={32}
          height={32}
        />
      </IconWrapper>
      <InfoText>
        <InputWrapper>
          <StyledInput
            type='text'
            $class='title'
            placeholder='제목을 추가해보세요'
            {...register('name')}
          />
          <DeleteBtn onClick={() => setValue('name', '')}>
            <Image
              src={ICONS.well.delete}
              alt='delete'
              width={18}
              height={18}
            />
          </DeleteBtn>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type='text'
            $class='desc'
            {...register('desc')}
            placeholder='우물을 멋지게 묘사해보세요'
          />
          <DeleteBtn onClick={() => setValue('desc', '')}>
            <Image
              src={ICONS.well.delete}
              alt='delete'
              width={18}
              height={18}
            />
          </DeleteBtn>
        </InputWrapper>
      </InfoText>
      <AnimatePresence>
        {imgChange && (
          <ImgChangePopUp setOpen={setImgChange} setWellIcon={() => {}} />
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 22px;
  border: 2px solid ${({ theme }) => theme.colors.key_color};
  overflow: hidden;
  padding: 14px 10px;
  gap: 10px;
  padding-bottom: 30px;
  background: ${({ theme }) => theme.colors.bg_white};
  box-shadow: 0px 3px 0px 0px rgba(11, 36, 13, 0.15);
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;

const ImgChangeIcon = styled(Image)`
  position: absolute;
  bottom: 10px;
  right: -5px;
`;

const WellIcon = styled(Image)`
  width: 60px;
  height: 60px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
`;

const StyledInput = styled.input<{ $class: string }>`
  flex: 1;
  border: none;
  font-size: ${({ theme, $class }) =>
    $class === 'title' ? theme.fontSize.xl : theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-weight: ${({ $class }) => ($class === 'title' ? 600 : 300)};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_lightgray};
  }
`;

const InfoText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  justify-content: space-around;
  align-items: start;
  color: ${({ theme }) => theme.colors.text_black};

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 300;
  }
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
