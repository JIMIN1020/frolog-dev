'use client';

import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { ProsAndConsType } from '@data/dummyData/prosAndConsDummy';
import Tag from './Tag';

interface TagContainerProps {
  tagData: ProsAndConsType[];
  type: 'pros' | 'cons';
}

function TagContainer({ tagData, type }: TagContainerProps) {
  const { watch, setValue } = useFormContext();
  const selectedTags = watch(type) || []; // 현재 선택된 태그

  /* ----- 태그 선택 처리 함수 ----- */
  const handleTagSelect = (id: string) => {
    const isSelected = selectedTags.includes(id);

    // 이미 선택된 태그인 경우
    if (isSelected) {
      const updatedTags = selectedTags.filter((tagId: string) => tagId !== id); // 제거
      setValue(type, updatedTags);
    }
    // 선택되지 않은 태그인 경우
    else if (selectedTags.length < 5) {
      const updatedTags = [...selectedTags, id];
      setValue(type, updatedTags);
    }
  };

  return (
    <Container>
      <SectionContainer $type={type}>
        <h2>{type === 'pros' ? '장점' : '단점'}</h2>
        <span> * 최소 1개 이상 최대 5개까지 골라주세요.</span>
      </SectionContainer>
      <TagWrapper>
        {tagData.map((item) => (
          <Tag
            key={item.id}
            content={item.content}
            isSelected={selectedTags.includes(item.id)}
            onSelect={() => handleTagSelect(item.id)}
            type={type}
          />
        ))}
      </TagWrapper>
    </Container>
  );
}

export default TagContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionContainer = styled.div<{ $type: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  & h2 {
    margin: 20px 0;
    color: ${({ theme, $type }) =>
      $type === 'pros' ? theme.colors.key_color : theme.colors.key_color_blue};
    font-size: ${({ theme }) => theme.fontSize.title};
    font-style: normal;
    font-weight: 800;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_lightgray};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 300;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
