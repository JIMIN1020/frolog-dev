import React from 'react';
import styled from 'styled-components';
import { commentDummy } from '@data/dummyData/commentDummy';
import CommentItem from './CommentItem';

function CommentList() {
  return (
    <Container>
      <CommentContainer>
        {commentDummy.map((data) => {
          return <CommentItem key={data.id} data={data} />;
        })}
      </CommentContainer>
    </Container>
  );
}

export default CommentList;

const Container = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const CommentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  overflow: auto;
`;
