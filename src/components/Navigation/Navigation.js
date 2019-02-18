import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MAIN_COLOR, FONT_COLOR } from '~/constants/styles';

const StyledNavigation = styled.nav`
	position: absolute;
	top: 25px;
	left: 50px;
	z-index: 20;
`;

const Title = styled.h1`
	font-size: 1.75rem;
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
