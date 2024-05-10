import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.rating};
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 50px;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
  line-height: normal;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  padding: 10px 30px;
`;
