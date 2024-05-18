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
  margin-bottom: 100px;
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
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Step4Label = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.error_red};
  margin-left: 4px;
`;

export const Step4Input = styled.input`
  padding: 10px;
  width: 370px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 0.4px solid ${({ theme }) => theme.colors.button_gray};
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

export const ToggleText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text_gray};
  margin-right: 3px;
`;

export const SelectBox = styled.select`
  width: 370px;
  padding: 0 10px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 0.4px solid ${({ theme }) => theme.colors.button_gray};
`;

export const GenderButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 30px;
  margin-bottom: 10px;
`;

export const GenChooseButton = styled.button<{ selected: boolean }>`
  width: 100px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 0.5px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.key_color_deep : theme.colors.button_gray};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.key_color_deep : theme.colors.button_gray};
  background: ${({ selected, theme }) =>
    selected ? theme.colors.text_white : 'none'};
`;

export const ToggleButton = styled.input`
  appearance: none;
  width: 40px;
  height: 20px;
  background: ${({ theme }) => theme.colors.button_gray};
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  outline: none;
  &:checked {
    background: ${({ theme }) => theme.colors.key_color};
  }
  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: ${({ theme }) => theme.colors.text_white};
    border-radius: 50%;
    top: 1px;
    left: 1px;
    transition: transform 0.2s;
  }
  &:checked:before {
    transform: translateX(20px);
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error_red};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const SuccessMessage = styled.div`
  color: ${({ theme }) => theme.colors.key_color_deep};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-top: 10px;
  margin-bottom: 20px;
`;
