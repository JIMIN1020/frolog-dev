import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { BadgeType, badgeDummy } from '@data/dummyData/badgeDummy';
import React, { useState } from 'react';
import styled from 'styled-components';
import BadgeListItem from './BadgeListItem';

function BadgeList() {
  const [items, setItems] = useState<BadgeType[]>(badgeDummy);

  /* ----- 리스트 순서 변경 함수 (dnd 기반) ----- */
  const handleChange = (result: any) => {
    if (!result.destination) return;

    const badgeItems = [...items];
    const [moved] = badgeItems.splice(result.source.index, 1);
    badgeItems.splice(result.destination.index, 0, moved);
    setItems(badgeItems);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId='badgeList'>
          {(provided) => (
            <div
              className='badgeList'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((badge, i) => {
                return (
                  <Draggable key={badge.id} draggableId={badge.id} index={i}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <BadgeListItem badgeData={badge} provided={provided} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default BadgeList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;
