import React from 'react';
import BottomSheet from '@components/common/BottomSheet';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

interface CommentBottomSheetProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentBottomSheet({ setOpen }: CommentBottomSheetProps) {
  return (
    <BottomSheet title='댓글' setOpen={setOpen}>
      <CommentList />
      <CommentInput />
    </BottomSheet>
  );
}

export default CommentBottomSheet;
