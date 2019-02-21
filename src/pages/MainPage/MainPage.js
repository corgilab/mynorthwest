import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MAP_ROUTE } from '~/constants/routers';
import { MAIN_COLOR, FONT_COLOR } from '~/constants/styles';
import { MOBILE_SIZE } from '~/constants/common';
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

	@media (max-width: ${`${MOBILE_SIZE}px`}) {
		top: 40px;
		left: 20px;
	}
`;

const Title = styled.h1`
	font-size: 36px;
	margin-bottom: 20px;

	@media (max-width: ${`${MOBILE_SIZE}px`}) {
		font-size: 26px;
	}
`;

const Text = styled.div`
	width: 500px;
	font-size: 20px;
	line-height: 2rem;
	margin-bottom: 50px;

	@media (max-width: ${`${MOBILE_SIZE}px`}) {
		width: 90vw;
	}
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

const Footer = styled.div`
    color: ${FONT_COLOR}
	display: block;
	position: absolute;
	bottom: 10px;
	left: 250px;

	@media (max-width: ${`${MOBILE_SIZE}px`}) {
		top: 40px;
		left: 20px;
	}
`;

const StyledLink = styled(Link)`
	color: ${FONT_COLOR};
	&:hover {
		color: ${MAIN_COLOR};
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
				<Button to={MAP_ROUTE}>Добавить идею!</Button>
			</Content>
			<Footer>
				Обратная связь: <StyledLink to='mailto:moysevz@gmail.com'>moysevz@gmail.com</StyledLink>
				<br />
				Разработано: <StyledLink to='https://corgilab.ru'>КоргиЛаб</StyledLink>
				<br />
				Дизайн иллюстрации: <StyledLink to='http://www.behance.net/9xfu2re'>http://www.behance.net/9xfu2re</StyledLink>
			</Footer>
		</Page>
	);
};

export default MainPage;
