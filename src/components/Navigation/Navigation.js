import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MAIN_COLOR, FONT_COLOR } from '~/constants/styles';
import { MOBILE_SIZE } from '~/constants/common';

const StyledNavigation = styled.nav`
	position: absolute;
	top: 25px;
	left: 50px;
	z-index: 20;

	@media (max-width: ${`${MOBILE_SIZE}px`}) {
		top: 5px;
	}
`;

const Title = styled.h1`
	font-size: 1.75rem;

	@media (max-width: ${`${MOBILE_SIZE}px`}) {
		font-size: 1.3rem;
		margin: 0;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${FONT_COLOR};

	&:hover {
		color: ${MAIN_COLOR};
	}
`;

const Navigation = () => {
	return (
		<StyledNavigation>
			<Title>
				<StyledLink to='/'>
					<u>МойСевероЗапад.рф</u>
				</StyledLink>
			</Title>
		</StyledNavigation>
	);
};

export default Navigation;
