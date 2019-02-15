/* global PATH_TO_RESOURCES */

import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.a`
	display: block;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin: 0;
	padding: 0;
	z-index: 5;
	position: absolute;
	right: 10px;
	bottom: 10px;
	img {
		fill: red;
	}
`;

const Logo = () => (
	<StyledLogo 
		href='http://corgilab.ru/' 
		title='CorgiLab' 
		target='_blank'
		rel="noopener noreferrer"
	>
		<img src={`${ PATH_TO_RESOURCES }/images/corgi.svg`} alt='corgiLab logo' />
	</StyledLogo>
);

export default Logo;