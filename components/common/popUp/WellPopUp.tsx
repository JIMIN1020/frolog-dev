'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { StyledLink } from '@styles/GlobalStyles';
import { useMockData } from 'mock/MockData';
import { ICONS } from 'constants/icon';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import PopUpLayout from './PopUpLayout';

type WellPopUpProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  wellId: number;
};

function WellPopUp({ setOpen, wellId }: WellPopUpProps) {
  const router = useRouter();
  const { deleteWell } = useMockData();
  const [openDelete, setOpenDelete] = useState<boolean>(false); // 우물 삭제 팝업

  /* ----- 우물 삭제 핸들러 ----- */
  const onDeleteWell = () => {
    setOpen(false);
    deleteWell(wellId);
  };

  return (
    <PopUpLayout closePopUp={() => setOpen(false)}>
      {/* 기본 팝업 */}
      {!openDelete && (
        <>
          <MenuItem
            onClick={() => router.push(`/well/edit?new=false&wellId=${wellId}`)}
          >
            편집하기
          </MenuItem>
          <MenuItem
            onClick={() => setOpenDelete(true)}
            style={{ color: 'red' }}
          >
            삭제
          </MenuItem>
        </>
      )}
      {/* 삭제 팝업 */}
      {openDelete && (
        <>
          <DeleteWarning>
            이 우물이 삭제됩니다. 이 동작은 취소할 수 없습니다.
          </DeleteWarning>
          <WrapperButton onClick={onDeleteWell}>
            <StyledLink href='/well/test-user'>
              <MenuItem style={{ color: 'red' }} onClick={onDeleteWell}>
                우물 삭제
              </MenuItem>
            </StyledLink>
          </WrapperButton>
        </>
      )}
      <CancelBtn onClick={() => setOpen(false)}>
        <Image src={ICONS.popUp.cancel} alt='cancel' width={24} height={24} />
        취소
      </CancelBtn>
    </PopUpLayout>
  );
}

export default WellPopUp;

const MenuItem = styled.button`
  width: 100%;
  padding: 16px 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  text-align: start;
  cursor: pointer;
  font-weight: 400;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const WrapperButton = styled.div`
  cursor: pointer;
`;

const CancelBtn = styled.button`
  width: 100%;
  padding: 20px 0;
  text-align: start;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.lg};
  border: none;
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-top: 1px solid ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_black};

  display: flex;
  align-items: center;
  gap: 6px;

  & img {
    width: 22px;
    height: 22px;
  }
`;

const DeleteWarning = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_gray};
  font-weight: 400;
  padding: 25px 0 10px 0;
`;
