import React from 'react';
import useStore from 'store/store';
import BottomSheet from '@components/common/BottomSheet';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

function CommentBottomSheet() {
  const { setIsOpenComment } = useStore();
  return (
    <BottomSheet title='댓글' closeSheet={() => setIsOpenComment(false)}>
      <CommentList />
      <CommentInput />
    </BottomSheet>
  );
}

export default CommentBottomSheet;
