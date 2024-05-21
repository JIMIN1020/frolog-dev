'use client';

import { ICONS } from 'constants/icon';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import useStore from 'store/store';
import styled from 'styled-components';

function NotiButton() {
  const router = useRouter();
  const { user, setIsOpenLoginPopUp } = useStore();
  const handleClick = () => {
    if (user) {
      router.push('/notice');
    } else {
      setIsOpenLoginPopUp(true);
    }
  };
  return (
    <button type='button' onClick={handleClick}>
      <NotificationIcon
        src={ICONS.header.notification}
        alt='Notifications'
        width={24}
        height={24}
      />
    </button>
  );
}

export default NotiButton;

const NotificationIcon = styled(Image)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
