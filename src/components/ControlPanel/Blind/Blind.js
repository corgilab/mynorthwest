import React from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE } from '~/constants/common';
import { BACKGROUND_COLOR, BORDER_COLOR } from '~/constants/styles';

const StyledBlind = styled.span`
	width: 25px;
	height: 50px;
	background-color: ${ BACKGROUND_COLOR};
	position: absolute;
	z-index: 10;
	top: calc(50% - 25px);
	right: -25px;
	border-right: 1px solid ${ BORDER_COLOR};
	border-top: 1px solid ${ BORDER_COLOR};
	border-bottom: 1px solid ${ BORDER_COLOR};

	@media (max-width: ${`${MOBILE_SIZE}px`}){
		right: ${ props => props.isOpen ? '0' : '-25px'};
		border-left: ${ props => props.isOpen ? `1px solid ${ BORDER_COLOR }` : 'none' };
	}
`;

const Arrow = styled.img`
    width: 100%;
    height: 100%;
    transform: ${ props => props.isOpen ? 'rotate(90deg)' : 'rotate(-90deg)'};
`;

const Blind = (props) => {
    return (
		<StyledBlind isOpen={ props.isOpen } onClick={ props.handleBlindClick }>
            <Arrow isOpen={ props.isOpen } src="/resources/images/arrow.svg" />
        </StyledBlind>
    );
}

export default Blind;