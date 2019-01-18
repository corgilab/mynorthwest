import React, { Component } from 'react';
import styled from 'styled-components';

import { BACKGROUND_COLOR } from '~/constants/styles';

const StyledPanel = styled.div`
	width: 10%;
	height: 100vh;
	min-width: 250px;
	background: ${ BACKGROUND_COLOR };
`;

class ControlPanel extends Component {
	state = {

	};

	render() {
		return (
			<StyledPanel>
				
			</StyledPanel>
		);
	}
}
export default ControlPanel;