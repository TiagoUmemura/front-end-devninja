import React from 'react';

import { Container, ContainerCards } from './styled-wrappers';
import CardText from '../../components/card-text';
import IdeaImg from '../../assets/icons/idea.svg';
import WireframeImg from '../../assets/icons/wireframe.svg';
import DesignImg from '../../assets/icons/design.svg';

function ProcessDevelopment() {
    return (
      <Container >
        <ContainerCards>
          <CardText 
            width={'22%'} 
            height={'60%'} 
            title={'1 - Ideia'} 
            icon={IdeaImg}
            color={'#f5d142'}
          />
          <CardText 
            width={'22%'} 
            height={'60%'} 
            title={'2 - Wireframe'} 
            icon={WireframeImg}
            color={'#429cf5'}
          />
          <CardText 
            width={'22%'} 
            height={'60%'} 
            title={'3 - Design'} 
            icon={DesignImg}
            color={'#f59042'}
          />
        </ContainerCards>
      </Container>
    );
}

export default ProcessDevelopment;