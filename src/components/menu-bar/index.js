import React from 'react';
import { MenuOptionsContainer, MenuTitle } from './styled-wrappers'

function MenuBar() {
    return (
      <MenuOptionsContainer >
        <MenuTitle>Home</MenuTitle>
        <MenuTitle>Serviços</MenuTitle>
        <MenuTitle>Desenvolvimento de projetos</MenuTitle>
        <MenuTitle>Orçamento</MenuTitle>
      </MenuOptionsContainer>
    );
}

export default MenuBar;