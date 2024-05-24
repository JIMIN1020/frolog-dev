'use client';

import { ICONS } from 'constants/icon';
import Image from 'next/image';
import React from 'react';
import useStore from 'store/store';
import styled from 'styled-components';
import Link from 'next/link';

function NotiButton() {
  const { user, setIsOpenLoginPopUp } = useStore();
  const handleClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      setIsOpenLoginPopUp(true);
    }
  };
  return (
    <Wrapper onClick={handleClick}>
      {user ? (
        <Link href='/notice' passHref>
          <Image
            src={ICONS.header.notification}
            alt='Notifications'
            width={24}
            height={24}
          />
        </Link>
      ) : (
        <Image
          src={ICONS.header.notification}
          alt='Notifications'
          width={24}
          height={24}
        />
      )}
    </Wrapper>
  );
}

export default NotiButton;

const Wrapper = styled.div`
  cursor: pointer;
`;
