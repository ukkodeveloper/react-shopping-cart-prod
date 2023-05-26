import { FlexColWrapper, FlexWrapper } from '@pages/CartPage/CartPage.style';
import { styled } from 'styled-components';

export const PayingContainer = styled.div`
  display: flex;
  flex: 1 1 150px;
  align-items: start;
  justify-content: start;
`;

export const PayingBox = styled(FlexColWrapper)`
  column-gap: 1rem;
  width: 90%;
  margin: 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  border: ${({ theme }) => theme.primaryColor} 1px solid;
  color: ${({ theme }) => theme.lightColor};

  padding: 2rem 1.5rem;
  border-radius: 8px;
  justify-content: start;
`;

export const PayingBackground = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  border: ${({ theme }) => theme.secondaryColor} 1px solid;
  padding: 1rem;
  border-radius: 8px;
  margin: 0 0 2rem 0;
`;

export const PayingTitle = styled.h3`
  font-size: 2rem;

  font-weight: 800;
`;

export const ContentText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.5rem;
`;

export const TotalText = styled(ContentText)`
  font-size: 1.7rem;
  font-weight: 800;
`;

export const TotalPriceContainer = styled(FlexWrapper)`
  border-top: ${({ theme }) => theme.primaryColor} 2px solid;
  padding-top: 0.5rem;
  color: ${({ theme }) => theme.primaryColor};
`;

export const PayingButton = styled.button`
  background-color: ${({ theme }) => theme.infoColor};
  border-radius: 8px;
  font-size: 2.4rem;
  height: 60px;

  &:disabled {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryColor};
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
