import React from 'react';
import styled from 'styled-components';

const CorgiLogo = styled.a`
	display: block;
	background: #fff no-repeat center;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	margin: 0;
	padding: 0;
	z-index: 100000;
	position: absolute;
	content: '';
	right: 10px;
	bottom: 10px;
	box-shadow: 0 0 4px 0 #000;
`;

const CorgiLab = () => <CorgiLogo href='http://corgilab.ru/' title='CorgiLab' target='_blank'/>

export default CorgiLab;