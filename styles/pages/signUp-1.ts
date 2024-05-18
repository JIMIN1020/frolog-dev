import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  height: fit-content;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  margin-right: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-left: 70px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.title2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.key_color};
`;

export const ExitImg = styled(Image)`
  margin-right: 20px;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
`;

export const lQuote = styled(Image)`
  margin-right: 11px;
`;

export const rQuote = styled(Image)`
  margin-left: 11px;
`;

export const Message = styled.p`
  width: 264px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
`;

export const TermLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: normal;
  font-weight: 300;
`;

export const FrologLogo = styled(Image)`
  height: 120px;
  width: 120px;
  margin-bottom: 50px;
`;

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TermsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ViewButton = styled.button`
  color: ${({ theme }) => theme.colors.text_gray};
  text-align: right;
  text-decoration-line: underline;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
  width: 300px;
  margin: 20px 0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 358px;
  height: 409px;
  background: ${({ theme }) => theme.colors.bg_white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.colors.text_black};
  align-items: center;
  text-align: center;
  margin-left: 120px;
`;

export const ModalExitImg = styled(Image)`
  cursor: pointer;
  margin-right: 15px;
`;

export const ModalBody = styled.div`
  flex-grow: 1;
  width: 286px;
  height: 246px;
  flex-shrink: 0;
  overflow-y: auto;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: normal;
`;

export const ModalButton = styled.button`
  width: 288px;
  height: 44px;
  border-radius: 50px;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.key_color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;
