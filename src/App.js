import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import Lamp from './Lamp';
import LightSwitch from './LightSwitch';

const NameHeading = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background: white;
  border: 10px solid black;
  margin: 0 auto;
`;

function App () {
  const [buttonIsOn, setButtonIsOn] = useState(false);
  const [buttonTwoIsOn, setButtonTwoIsOn] = useState(true);
  
  const handleLightSwitch = () => setButtonIsOn(prev => !prev);
  const handleLightSwitchTwo = () => setButtonTwoIsOn(prev => !prev);

  return (
    <NameHeading>

      <Lamp lampOn={buttonIsOn} position='left' name='one'></Lamp>
      <Lamp lampOn={buttonTwoIsOn} position='right' name='two'></Lamp>

      <LightSwitch callback={handleLightSwitch} lampOn={buttonIsOn} name='one' position='left'></LightSwitch>
      <LightSwitch callback={handleLightSwitchTwo} lampOn={buttonTwoIsOn} name='two' position='right'></LightSwitch>

    </NameHeading>
  );
}

export default App;