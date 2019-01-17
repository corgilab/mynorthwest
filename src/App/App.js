import React from 'react';
import styled from 'styled-components';

import Map from '../Map/Map'

const StyledApp = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Link = styled.a`
  color: #61dafb;
`;


const App = (props) => {
  return (
    <StyledApp>
      <Map>

      </Map>
    </StyledApp>
  );
}

export default React.memo(App);
