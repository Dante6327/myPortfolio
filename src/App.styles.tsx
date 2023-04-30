import styled from 'styled-components';

export const Container = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  ${({ theme }) => theme.media.tablet`
    background-color:blue;
    font-size:${theme.fontSizes.small}
  `}
`;
