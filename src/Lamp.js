import React from 'react';
import styled from 'styled-components';

const Light = styled.div`
    position: absolute;
    top: 20px;
    left: ${props => (props.position === 'left' ? '20px' : '380px')};
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: ${props => (props.lampOn ? 'orange' : 'lightgray')};
`;

// function Lamp ({lampOn}) {
//     return (
//         <Light />
//     );
// }

const Lamp = ({lampOn, position, name}) => (
    <Light lampOn={lampOn} position={position}>
        
    </Light>
);


export default Lamp;