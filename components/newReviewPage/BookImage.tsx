'use client';

import React from 'react';
import styled from 'styled-components';
import bookChangeIcon from 'public/icons/newReview/bookChange.svg';
import Image from 'next/image';

interface BookImageProps {
  imageUrl: string;
  onChangeClick: () => void;
}

function BookImage({ imageUrl, onChangeClick }: BookImageProps) {
  return (
    <BookImageContainer>
      <BookImg src={imageUrl} alt='Book Cover' width={160} height={235} />
      <ChangeIcon
        src={bookChangeIcon}
        alt='Change Book'
        onClick={onChangeClick}
      />
    </BookImageContainer>
  );
}

export default BookImage;

const BookImageContainer = styled.div`
  display: flex;
  margin: 35px auto;
  width: 160px;
  height: 250px;
  flex-direction: column;
  position: relative;
`;

const BookImg = styled(Image)`
  flex-shrink: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ChangeIcon = styled(Image)`
  position: absolute;
  bottom: 0;
  right: -20px;
  cursor: pointer;
`;
