'use client';

import WellItem from '@components/wellPage/WellItem';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import settingIcon from 'public/icons/well/setting.svg';
import WellPopUp from '@components/common/popUp/WellPopUp';
import ProfileHeader from '@components/common/header/ProfileHeader';
import { useMockData } from 'mock/MockData';
import WellBook from '@components/wellPage/WellBook';
import { motion } from 'framer-motion';
import { bookContainerVariants } from '@styles/framer-motion/variants';

// export async function generateStaticParams() {
//   const slugs = wellDummy.map((well) => ({
//     slug: well.id.toString(),
//   }));
//   return slugs;
// }

interface WellDetailPageProps {
  params: {
    slug: string;
  };
}

export default function WellDetailPage({ params }: WellDetailPageProps) {
  const [open, setOpen] = useState<boolean>(false);
  const { getWell } = useMockData();
  const { slug } = params;
  const data = getWell(slug);

  return (
    <Container>
      <ProfileHeader />
      <WellInfoWrapper>
        <WellItem data={data} />
        <Setting onClick={() => setOpen(true)}>
          설정 <Image src={settingIcon} alt='setting' />
        </Setting>
      </WellInfoWrapper>
      <BookContainer
        variants={bookContainerVariants}
        initial='in'
        animate='show'
      >
        {data ? (
          data.books.map((book: any) => {
            return <WellBook key={book.id} bookData={book} />;
          })
        ) : (
          <></>
        )}
      </BookContainer>
      {open && <WellPopUp wellId={data.id} setOpen={setOpen} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input_gray};
`;

const WellInfoWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 24px 10px 0 10px;

  position: absolute;
  top: 60px;
  left: 0;
  z-index: 10;
`;

const BookContainer = styled(motion.div)`
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: end;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const Setting = styled.button`
  background-color: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  display: flex;
  border: none;
  align-items: center;
  padding: 6px;
  border-radius: 8px;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  float: right;
  margin: 12px 0;
  cursor: pointer;
`;
