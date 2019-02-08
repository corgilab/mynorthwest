import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { MAP_ROUTE } from '~/constants/routers';
import { MAIN_COLOR, FONT_COLOR } from '~/constants/styles';

const Page = styled.main`
	background-image: linear-gradient(to top left, ${MAIN_COLOR}, #FFFA99);
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100vw;
	height: 100vh;
`;

const Content = styled.div`
	position: absolute;
	top: 150px;
	left: 250px;
`;

const Title = styled.h1`
	margin-bottom: 50px;
`;


const Text = styled.div`
	width: 400px;
	line-height: 2rem;
	margin-bottom: 75px;
`;

const Button = styled(Link)`
	display: block;
	width: 200px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	text-decoration: none;
	color: ${ FONT_COLOR };
	background-color: ${ MAIN_COLOR };
	font-weight: bold;

	&:hover {
		box-shadow: 0 0 3px ${ MAIN_COLOR };
	}
`;

const MainPage = () => {
	return (
		<Page>
			<Content>
				<Title>
					МойСевероЗапад.рф
				</Title>
				<Text>
					Платформа - эксперимент для сбора идей по улучшению Северо-Западного района Курска.
					<br />
					Добавь свою идею на общую карту.
				</Text>
				<Button to={ MAP_ROUTE }>
					Открыть карту
				</Button>
			</Content>
		</Page>
	);
}

export default MainPage;