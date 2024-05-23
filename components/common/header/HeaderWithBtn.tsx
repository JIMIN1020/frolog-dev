import React from 'react';
import useStore from 'store/store';
import styled from 'styled-components';

function HeaderWithBtn() {
  const { isEditing, setIsEditing } = useStore();
  return (
    <HeaderContainer>
      <LeftSection>
        <ProfileImage
          src='https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg'
          alt={`user's profile`}
        />
        <UserInfo>
          <UserName>테스트</UserName>
          <UserNickname>나는 프롤로그 테스터</UserNickname>
        </UserInfo>
      </LeftSection>
      <DoneBtn
        type='submit'
        onMouseDown={isEditing ? () => setIsEditing(false) : () => {}}
      >
        완료
      </DoneBtn>
    </HeaderContainer>
  );
}

export default HeaderWithBtn;

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 800;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-top: 5px;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 44px;
  box-shadow: 1px 1px 1px grey;
  background: url(${(props) => props.src});
  margin-right: 16px;
  flex-shrink: 0;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2px;
`;

const UserNickname = styled.div`
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  line-height: normal;
`;

const DoneBtn = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  cursor: pointer;
  font-weight: 500;
`;
