import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MAP_ROUTE } from '~/constants/routers';
import { MAIN_COLOR, FONT_COLOR } from '~/constants/styles';
import AnimationBackground from './AnimationBackground';

const Page = styled.main`
	overflow: hidden;
	background-image: linear-gradient(135deg, #f1f0fb 0%, #7db9e8 100%);
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100vw;
	height: 100vh;
`;

const Content = styled.div`
	position: absolute;
	top: 100px;
	left: 250px;
`;

const Title = styled.h1`
	font-size: 36px;
	margin-bottom: 20px;
`;

const Text = styled.div`
	width: 500px;
	font-size: 20px;
	line-height: 2rem;
	margin-bottom: 50px;
`;

const Button = styled(Link)`
	display: block;
	width: 200px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	text-decoration: none;
	color: ${FONT_COLOR};
	background-color: ${MAIN_COLOR};
	font-weight: bold;

	&:hover {
		box-shadow: 0 0 3px ${MAIN_COLOR};
	}
`;

const MainPage = () => {
	return (
		<Page>
			<AnimationBackground />
			<Content>
				<Title>МойСевероЗапад.рф</Title>
				<Text>
					Интерактивный портал по сбору идей для формирования комфортных общественных пространств
					Северо-Западного района города Курска. Просто добавь свою идею на общую карту!
				</Text>
				<Button to={ MAP_ROUTE }>
					Добавить идею!
				</Button>
			</Content>
		</Page>
	);
};

export default MainPage;
