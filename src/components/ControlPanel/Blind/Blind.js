import React from 'react';
import styled from 'styled-components';

import { MOBILE_SIZE } from '~/constants/common';
import { BACKGROUND_COLOR } from '~/constants/styles';

const StyledBlind = styled.span`
	width: 30px;
	height: 50px;
	background-color: ${ BACKGROUND_COLOR};
	position: absolute;
	z-index: 10;
	top: calc(50% - 25px);
	right: -30px;
	border-bottom-right-radius: 5px;
	border-top-right-radius: 5px;

	@media (max-width: ${`${MOBILE_SIZE}px`}){
		right: ${ props => props.isOpen ? '0' : '-25px'};
	}
`;

const Arrow = styled.img`
    width: 80%;
    height: 100%;
    transform: ${ props => props.isOpen ? 'rotate(90deg)' : 'rotate(-90deg)'};
`;

const Blind = (props) => {
    return (
		<StyledBlind isOpen={ props.isOpen } onClick={ props.handleBlindClick }>
            <Arrow isOpen={ props.isOpen } src={`${ PATH_TO_RESOURCES }/images/arrow.svg`} />
        </StyledBlind>
    );
}

export default Blind;