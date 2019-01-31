import React from 'react';
import styled from 'styled-components';

import { BACKGROUND_COLOR, BORDER_COLOR } from '~/constants/styles';

const StyledBlind = styled.span`
	width: 20px;
	height: 40px;
	background-color: ${ BACKGROUND_COLOR};
	position: absolute;
	z-index: 10;
	top: calc(50% - 10px);
	right: -20px;
	border-right: 1px solid ${ BORDER_COLOR};
	border-top: 1px solid ${ BORDER_COLOR};
	border-bottom: 1px solid ${ BORDER_COLOR};
`;

const Arrow = styled.img`
    width: 100%;
    height: 100%;
    transform: ${ props => props.isOpen ? 'rotate(90deg)' : 'rotate(-90deg)'};
`;

const Blind = (props) => {
    return (
        <StyledBlind onClick={ props.handleBlindClick }>
            <Arrow isOpen={ props.isOpen } src="/resources/images/arrow.svg" />
        </StyledBlind>
    );
}

export default Blind;