import React, { Component } from 'react';
import styled from 'styled-components';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Profile from '~/components/Profile/Profile';
import Points from '~/components/Points/Points';
import { BACKGROUND_COLOR } from '~/constants/styles';
import { loadState } from '~/helpers/localStorage';

const StyledPanel = styled.div`
	position: absolute;
	z-index: 10;
	width: 10%;
	height: 100vh;
	min-width: 250px;
	background: ${ BACKGROUND_COLOR };
`;

@observer class ControlPanel extends Component {
	@observable userId = loadState('user_id');

	@action fillProfile = (id) => {
		console.log(id);
		this.userId = id;
	}

	render() {
		return (
			<StyledPanel>
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