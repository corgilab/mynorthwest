import React, { Component } from 'react';
import styled from 'styled-components';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Profile from '~/components/Profile/Profile';
import Points from '~/components/Points/Points';
import { BACKGROUND_COLOR, BORDER_COLOR } from '~/constants/styles';
import { loadState } from '~/helpers/localStorage';

import Blind from './Blind/Blind';

const StyledPanel = styled.aside`
	position: absolute;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
	transition: all .5s linear;
	z-index: 10;
	width: 10%;
	min-width: 250px;
	height: 100vh;
	background: ${ BACKGROUND_COLOR };
	border-right: 1px solid ${ BORDER_COLOR };
`;



@observer class ControlPanel extends Component {
	@observable userId = loadState('user_id');
	@observable isOpenMenu = false;

	@action fillProfile = (id) => {
		console.log(id);
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