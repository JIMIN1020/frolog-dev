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

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const PasswordInput = styled.input`
  padding: 10px;
  width: 340px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 0.4px solid ${({ theme }) => theme.colors.button_gray};
  margin-bottom: 10px;
`;

export const TogglePasswordVisibility = styled.div`
  position: absolute;
  right: 80px;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
  margin-bottom: 18px;
`;

export const PWLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.error_red};
  margin-left: 4px;
`;

export const PasswordRequirements = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export const Requirement = styled.span<{ valid: boolean }>`
  color: ${({ valid, theme }) =>
    valid ? theme.colors.key_color : theme.colors.text_gray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-right: 15px;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error_red};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 10px;
`;
