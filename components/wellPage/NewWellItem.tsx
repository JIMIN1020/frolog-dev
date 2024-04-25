import React, { useState } from 'react';
import wellIconImg from 'public/icons/well/well-icon.svg';
import Image from 'next/image';
import styled from 'styled-components';
import deleteIcon from 'public/icons/well/delete-icon.svg';
import changeIcon from 'public/icons/common/change-icon.svg';
import { WellDataType } from '@data/dummyData/wellDummy';
import { AnimatePresence } from 'framer-motion';
import ImgChangePopUp from '@components/common/popUp/ImgChangePopUp';

interface NewWellItemProp {
  data: WellDataType;
}

export default function NewWellItem({ data }: NewWellItemProp) {
  const [imgChange, setImgChange] = useState(false);
  const [value, setValue] = useState({
    wellIcon: wellIconImg,
    title: data.title,
    description: data.description,
  });

  return (
    <Container>
      <IconWrapper onClick={() => setImgChange(true)}>
        <WellIcon src={value.wellIcon} alt='well' />
        <ImgChangeIcon src={changeIcon} alt='change' />
      </IconWrapper>
      <InfoText>
        <InputWrapper>
          <StyledInput
            type='text'
            value={value.title}
            $class='title'
            onChange={(e) =>
              setValue((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder='제목을 추가해보세요'
          />
          <DeleteBtn
            onClick={() => setValue((prev) => ({ ...prev, title: '' }))}
          >
            <Image src={deleteIcon} alt='delete' />
          </DeleteBtn>
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type='text'
            value={value.description}
            $class='desc'
            onChange={(e) =>
              setValue((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder='우물을 멋지게 묘사해보세요'
          />
          <DeleteBtn
            onClick={() => setValue((prev) => ({ ...prev, description: '' }))}
          >
            <Image src={deleteIcon} alt='delete' />
          </DeleteBtn>
        </InputWrapper>
      </InfoText>
      <AnimatePresence>
        {imgChange && (
          <ImgChangePopUp
            setOpen={setImgChange}
            setWellIcon={(v) => setValue((prev) => ({ ...prev, wellIcon: v }))}
          />
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 22px;
  border: 2px solid ${({ theme }) => theme.colors.key_color};
  overflow: hidden;
  padding: 14px 10px;
  gap: 10px;
  padding-bottom: 30px;
  background: ${({ theme }) => theme.colors.bg_white};
  box-shadow: 0px 3px 0px 0px rgba(11, 36, 13, 0.15);
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;

const ImgChangeIcon = styled(Image)`
  position: absolute;
  bottom: 10px;
  right: -5px;
`;

const WellIcon = styled(Image)`
  width: 60px;
  height: 60px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
`;

const StyledInput = styled.input<{ $class: string }>`
  flex: 1;
  border: none;
  font-size: ${({ theme, $class }) =>
    $class === 'title' ? theme.fontSize.xl : theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-weight: ${({ $class }) => ($class === 'title' ? 600 : 300)};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_lightgray};
  }
`;

const InfoText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  justify-content: space-around;
  align-items: start;
  color: ${({ theme }) => theme.colors.text_black};

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 300;
  }
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
