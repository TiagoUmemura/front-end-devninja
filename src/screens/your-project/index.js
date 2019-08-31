import React from 'react';

import { Container, TitleContainer, Title } from './styled-wrappers';
import CheckBoxForm from './checkbox-form';

function YourProject() {
    return (
      <Container >
          <TitleContainer>
              <Title>Agora chegou a hora de saber mais sobre seu projeto!</Title>
          </TitleContainer>
          <CheckBoxForm 
            title={'1. Qual o tipo do seu projeto'} 
            checkboxNames={['IOS','Android', 'Smarwatch', 'Sistema web', 'Site', 'Criação/Integração Web API']}
          />
      </Container>
    );
}

export default YourProject;