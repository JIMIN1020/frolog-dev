import React from 'react';
import styled from 'styled-components';

interface TagProps {
  content: string;
  isSelected: boolean;
  onSelect: () => void;
  type: 'pros' | 'cons';
}

function Tag({ content, isSelected, onSelect, type }: TagProps) {
  const getBackgroundColor = () => {
    if (!isSelected) return '#E0E0E0';
    return type === 'pros' ? '#ACD1AD' : '#ADBFC9';
  };

  return (
    <TagContainer $backgroundColor={getBackgroundColor()} onClick={onSelect}>
      {content}
    </TagContainer>
  );
}

const TagContainer = styled.div<{
  $backgroundColor: string;
}>`
  border-radius: 22px;
  background: ${({ $backgroundColor }) => $backgroundColor};
  padding: 8px 16px;
  height: 35px;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 5px;
`;

export default Tag;
