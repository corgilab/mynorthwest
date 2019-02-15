import React, { Component } from 'react';
import styled from 'styled-components';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import Profile from '~/components/Profile/Profile';
import Points from '~/components/Points/Points';
import { MOBILE_SIZE } from '~/constants/common';
import { BACKGROUND_COLOR } from '~/constants/styles';
import { screenBiggerThan } from '~/helpers/common';

import Blind from './Blind/Blind';

const StyledPanel = styled.aside`
	box-sizing: border-box;
	position: absolute;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(calc(-100% - 25px))'};
	transition: all .25s linear;
	z-index: 10;
	width: 10%;
	min-width: 350px;
	min-height: 550px;
	height: 70vh;
	bottom: 40px;
	left: 25px;
	padding: 25px;
	border-radius: 25px;
	background: ${ BACKGROUND_COLOR };

	@media (max-width: ${`${ MOBILE_SIZE }px`}){
		left: ${props => props.isOpen ? '0' : '25px'};
		bottom: 0;
		font-size: 0.9rem;
		min-width: 300px;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
		width: 100%;
	}
`;


@observer class ControlPanel extends Component {
	@observable isOpenMenu = screenBiggerThan(MOBILE_SIZE);

	@action handleBlindClick = () => {
		this.isOpenMenu = !this.isOpenMenu;
	}

	render() {
		const { store } = this.props;
		
		return (
			<StyledPanel isOpen={ this.isOpenMenu }>
				<Blind handleBlindClick={ this.handleBlindClick } isOpen={ this.isOpenMenu } />
				{ store.userId ? 
					<Points store={ store } />
					:
					<Profile store={ store } />
				}
			</StyledPanel>
		);
	}
}

ControlPanel.propTypes = {
	store: PropTypes.objectOf(PropTypes.shape({})),
}

export default ControlPanel;