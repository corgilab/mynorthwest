import React, { Component } from 'react';
import styled from 'styled-components';

import Profile from '~/components/Profile/Profile';
import Points from '~/components/Points/Points';
import { BACKGROUND_COLOR } from '~/constants/styles';
import { loadState } from '~/helpers/localStorage';

const StyledPanel = styled.div`
	width: 10%;
	height: 100vh;
	min-width: 250px;
	background: ${ BACKGROUND_COLOR };
`;

class ControlPanel extends Component {
	state = {
		userId: loadState('user_id'),
	};

	render() {
		const { userId } = this.state;
		return (
			<StyledPanel>
				{ userId ? 
					<Points />
					:
					<Profile />
				}
			</StyledPanel>
		);
	}
}
export default ControlPanel;