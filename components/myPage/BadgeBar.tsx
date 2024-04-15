import React from 'react';
import styled from 'styled-components';

export default function BadgeBar() {
  return (
    <Container>
      <Title>배지</Title>
      <BadgeBox>
        <Badge />
        <Badge />
        <Badge />
        <Badge />
        <Badge />
      </BadgeBox>
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
  padding: 0 20px;
  gap: 20px;

  height: 45px;
  background-color: ${({ theme }) => theme.colors.key_color_light};
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow-x: auto;
`;

const Badge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: lightgray;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;
