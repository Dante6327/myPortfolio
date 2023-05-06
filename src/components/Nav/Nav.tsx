import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import type { HandleClick, HandleToggle } from './types';
import { GiHamburgerMenu } from 'react-icons/gi';
import homeLogo from 'src/assets/images/home-logo.png';
import velog from 'src/assets/images/velog.png';
import github from 'src/assets/images/github.png';
import instagram from 'src/assets/images/instagram.png';
import * as S from './Nav.style';

const Nav = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const widthRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const handleClick: HandleClick = path => {
    navigate(`/${path}`);
  };

  const handleToggle: HandleToggle = () => {
    setIsToggle(!isToggle);
  };

  const handleRouter = (path: string) => () => handleClick(path);
  return (
    <S.Nav ref={widthRef}>
      <S.Home>
        <S.MenuList onClick={handleToggle}>
          <GiHamburgerMenu />
        </S.MenuList>
        <S.LogoBtn onClick={handleRouter('')}>
          <S.Logo src={homeLogo} alt="main-logo" />
          <S.LogoText>JP's Portfolio</S.LogoText>
        </S.LogoBtn>
      </S.Home>
      <div>
        <S.UnorderList isToggle={isToggle}>
          {MENU_LIST.map(menu => (
            <S.List key={menu.id} onClick={handleRouter(menu.menu)}>
              {menu.menu}
            </S.List>
          ))}
        </S.UnorderList>
      </div>
      <S.IconList isToggle={isToggle}>
        <a href="https://github.com/Dante6327">
          <S.Icon src={github} alt="github" />
        </a>
        <a href="https://velog.io/@jin_jin_dev">
          <S.Icon src={velog} alt="velog" />
        </a>
        <a href="https://www.instagram.com/jinp1993/">
          <S.Icon src={instagram} alt="instagram" />
        </a>
      </S.IconList>
    </S.Nav>
  );
};

export default Nav;
const MENU_LIST = [
  { id: 1, menu: 'Intro' },
  { id: 2, menu: 'About' },
  { id: 3, menu: 'Skills' },
  { id: 4, menu: 'Portfolio' },
];
