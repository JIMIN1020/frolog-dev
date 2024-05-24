'use client';

import WellItem from '@components/wellPage/WellItem';
import React, { useState } from 'react';
import styled from 'styled-components';
import WellPopUp from '@components/common/popUp/WellPopUp';
import { useMockData } from 'mock/MockData';
import WellBook from '@components/wellPage/WellBook';
import { AnimatePresence, motion } from 'framer-motion';
import {
  bookContainerVariants,
  wellItemVariants,
} from '@styles/framer-motion/variants';
import ProfileHeaderInWell from '@components/common/header/profileHeader/ProfileHeaderInWell';
import { wellDummy } from '@data/dummyData/wellDummy';
import { ICONS } from 'constants/icon';
import Image from 'next/image';

// export async function generateStaticParams() {
//   const slugs = wellDummy.map((well) => ({
//     slug: well.id.toString(),
//   }));
//   return slugs;
// }

interface WellDetailPageProps {
  params: {
    slug: string;
    id: string;
  };
}

export default function WellDetailPage({ params }: WellDetailPageProps) {
  const [open, setOpen] = useState<boolean>(false);
  const { getWell } = useMockData();
  const { id, slug } = params;
  const data =
    slug === 'test-user'
      ? getWell(id)
      : wellDummy.find((well) => well.id === id);

  /* ----- 우물 공유 함수 ----- */
  const handleShare = async () => {
    try {
      await window.navigator.share({
        title: 'Well Title', // 실제 값으로 대체 필요
        url: '',
      });
    } catch (err: any) {
      if (!err.toString().includes('cancel')) {
        alert('공유 기능이 지원되지 않는 환경입니다.');
      }
    }
  };

  return (
    <Container>
      <ProfileHeaderInWell
        onClickEdit={() => setOpen(true)}
        onClickShare={handleShare}
        userId={slug}
      />
      <WellInfoWrapper>
        <WellItem data={data} />
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
        <Frog variants={wellItemVariants}>
          <Image src={ICONS.common.frog} alt='frog' width={100} height={100} />
        </Frog>
      </BookContainer>
      <AnimatePresence>
        {open && <WellPopUp wellId={data.id} setOpen={setOpen} />}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 70px);
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

const Frog = styled(motion.div)`
  width: 100px;
  height: 100px;
`;
