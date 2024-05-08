import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface TagProps {
  content: string;
  isSelected: boolean;
  onSelect: () => void;
  type: 'pros' | 'cons';
}

function Tag({ content, isSelected, onSelect, type }: TagProps) {
  const { watch } = useFormContext();
  const isDisabled = watch(type).length === 5 && !isSelected; // 태그 5개 선택 시 나머지 태그 disabled 여부

  /* ----- bg color 구하는 함수 ----- */
  const getBackgroundColor = () => {
    if (!isSelected) return '#E0E0E0';
    return type === 'pros' ? '#ACD1AD' : '#ADBFC9';
  };

  return (
    <TagContainer
      $isDisabled={isDisabled}
      $backgroundColor={getBackgroundColor()}
      onClick={onSelect}
    >
      {content}
    </TagContainer>
  );
}

const TagContainer = styled.div<{
  $isDisabled: boolean;
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
  color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.colors.text_lightgray : theme.colors.text_black};
`;

export default Tag;
