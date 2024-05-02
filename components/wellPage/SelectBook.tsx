'use client';

import Rating from '@components/common/Rating';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import checkIcon from 'public/icons/well/checked.svg';
import uncheckIcon from 'public/icons/well/unchecked.svg';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { BookType } from '@data/dummyData/bookDummy';

interface SelectBookProps {
  bookData: BookType;
}

function SelectBook({ bookData }: SelectBookProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'books',
  });

  const handleClick = () => {
    if (checked) {
      const idx = fields.findIndex((f) => f.id === bookData.id);
      remove(idx);
      setChecked(false);
    } else {
      append({ id: `review-id-${Date.now()}`, name: bookData.name });
      setChecked(true);
    }
  };

  return (
    <Container>
      <ImgWrapper>
        <BookImg src='' alt='' />
        <CheckButton type='button' onClick={handleClick}>
          {checked ? (
            <Image src={checkIcon} alt='check' />
          ) : (
            <Image src={uncheckIcon} alt='check' />
          )}
        </CheckButton>
      </ImgWrapper>
      <Content>
        <TitleAndAuthor>
          {bookData.name} / {bookData.author}
        </TitleAndAuthor>
        <Rating rating={bookData.rating} starSize={12} gap={4} fontSize={10} />
      </Content>
    </Container>
  );
}

export default SelectBook;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const BookImg = styled(Image)`
  width: 160px;
  height: 230px;
  background-color: lightgray;
`;

const CheckButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleAndAuthor = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text_gray};
`;
