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

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 120px;
  margin-left: 40px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 20px;
  line-height: normal;
  margin: 50px 0;
`;

export const EmailLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const EmailLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.error_red};
  margin-left: 4px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const InputWrapperRow = styled.div`
  display: flex;
  width: 100%;
  //justify-content: space-between;
  align-items: center;
`;

export const CertifyInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  position: relative;
  margin-right: 20px;
`;

export const EmailInput = styled.input`
  width: 360px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 4px;
  margin: 10px 0 15px 0px;
`;

export const EmailCertifyButton = styled.button`
  width: 120px;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  border: none;
  border-radius: 12px;
`;

export const CertifyInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 4px;
`;

export const ConfirmButton = styled.button`
  width: 60px;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  border: none;
  border-radius: 12px;
`;

export const Timer = styled.span`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.button_gray};
  position: absolute;
  right: 15px;
  top: 49%;
  transform: translateY(-50%);
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error_red};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: -5px 0 20px 5px;
`;

export const SuccessMessage = styled.span`
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: -5px 0 20px 5px;
`;
