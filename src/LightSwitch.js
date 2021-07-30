import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    position: absolute;
    left: ${props => (props.position === 'left' ? '20px' : '380px')};
    bottom: 20px;
    cursor: pointer;
    border: 1px solid black;
    height:  50px;
    width: 100px;
    border-radius: 10px;
    text-align: center;
    background: blue;
`;

const LightSwitch = ({callback, lampOn, name, position}) => (
    <Button onClick={callback} position={position}>{lampOn ? 'On' : 'Off'}</Button>
);

export default LightSwitch;