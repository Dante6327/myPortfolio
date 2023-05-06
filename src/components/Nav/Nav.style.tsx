import styled from 'styled-components';

export const Nav = styled.header`
  display: flex;
  position: relative;
  padding: 20px 0;
  font-family: 'Eczar', serif;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: #212a3e;
  width: 100%;
  color: #f1f6f9;

  ${({ theme }) => theme.media.mobile`
    flex-direction:column;
  `}
`;

export const Home = styled.div`
  display: flex;
`;

export const MenuList = styled.div`
  display: none;
  position: absolute;
  left: 10px;
  top: 28px;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.media.mobile`
    display:block;
  `};
`;

export const LogoBtn = styled.button`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.media.tablet`
    width:30px;
  `}

  ${({ theme }) => theme.media.mobile`
    width:30px;
  `}
`;

export const LogoText = styled.span`
  font-size: 16px;
  vertical-align: middle;
  color: #f1f6f9;
  padding: 0px 10px;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.media.tablet`
    font-size:12px;
  `}
`;

export const UnorderList = styled.ul<{ isToggle: boolean }>`
  display: flex;

  ${({ theme, isToggle }) => theme.media.mobile`
    ${isToggle ? 'display:flex' : 'display:none'};
    flex-direction:column;
    padding: 20px 0;
  `};
`;

export const List = styled.li`
  padding: 0px 30px;
  text-align: center;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #9ba4b5;
  }

  ${({ theme }) => theme.media.tablet`
    padding: 0px 10px;
    font-size:12px;
  `}

  ${({ theme }) => theme.media.mobile`
    padding: 10px 0;
  `}
`;

export const IconList = styled.div<{ isToggle: boolean }>`
  ${({ theme, isToggle }) => theme.media.mobile`
     ${isToggle ? 'display:block' : 'display:none'};
  `}
`;

export const Icon = styled.img`
  margin-right: 20px;
  width: 24px;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.media.tablet`
    width: 16px;
  `}

  ${({ theme }) => theme.media.mobile`
    margin-left:20px;
    margin-right:20px;
    width: 20px;
  `}
`;
