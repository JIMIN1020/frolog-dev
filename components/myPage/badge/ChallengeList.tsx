import { challengeDummy } from '@data/dummyData/badgeDummy';
import React from 'react';
import styled from 'styled-components';
import ChallengeListItem from './ChallengeListItem';

function ChallengeList() {
  return (
    <Container>
      {challengeDummy.map((data) => {
        return <ChallengeListItem key={data.id} challengeData={data} />;
      })}
    </Container>
  );
}

export default ChallengeList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
