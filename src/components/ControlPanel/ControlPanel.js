import React, { Component } from 'react';
import styled from 'styled-components';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Profile from '~/components/Profile/Profile';
import Points from '~/components/Points/Points';
import { MOBILE_SIZE } from '~/constants/common';
import { BACKGROUND_COLOR, BORDER_COLOR } from '~/constants/styles';
import { loadState } from '~/helpers/localStorage';
import { screenBiggerThan } from '~/helpers/common';

import Blind from './Blind/Blind';

const StyledPanel = styled.aside`
	position: absolute;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
	transition: all .25s linear;
	z-index: 10;
	width: 10%;
	min-width: 250px;
	height: 100vh;
	background: ${ BACKGROUND_COLOR };
	border-right: 1px solid ${ BORDER_COLOR };

	@media (max-width: ${`${ MOBILE_SIZE }px`}){
		width: 100%;
	}
`;


@observer class ControlPanel extends Component {
	@observable userId = loadState('user_id');
	@observable isOpenMenu = screenBiggerThan(MOBILE_SIZE);
	@action fillProfile = (id) => {
		this.userId = id;
	}

	@action handleBlindClick = () => {
		this.isOpenMenu = !this.isOpenMenu;
	}

	render() {
		return (
			<StyledPanel isOpen={ this.isOpenMenu }>
				<Blind handleBlindClick={ this.handleBlindClick } isOpen={ this.isOpenMenu } />
				{ this.userId ? 
					<Points />
					:
					<Profile fillProfile={ this.fillProfile } />
				}
			</StyledPanel>
		);
	}
}
export default ControlPanel;