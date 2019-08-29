import React from 'react';

import MenuBar from '../../components/menu-bar';
import Content from './content';
import { Container } from './styled-wrappers';

function Home() {
    return (
      <Container>
        <MenuBar />
        <Content />
      </Container>
    );
}

export default Home;