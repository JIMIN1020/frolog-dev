'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import BadgeBottomSheet from './BadgeBottomSheet';

export default function BadgeBar() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Title>배지</Title>
      <BadgeBox onClick={() => setOpen(true)}>
        <BadgeWrapper>
          <Badge />
          <Badge />
          <Badge />
        </BadgeWrapper>
        <Count>4개</Count>
      </BadgeBox>
      {open && <BadgeBottomSheet setOpen={setOpen} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h4`
  width: 70px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;

const BadgeBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 8px 0;

  height: 45px;
  background-color: ${({ theme }) => theme.colors.key_color_light};
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow-x: auto;
`;

const BadgeWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 20px;
`;

const Badge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: lightgray;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;

const Count = styled.h5`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.colors.key_color};
  flex: 1;
  color: ${({ theme }) => theme.colors.key_color};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.lg};
  cursor: default;
`;
