import React, {Component} from 'react';
import styled from 'styled-components';
import { POINTS_MENU } from '../../constants/pointsMenu';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { saveState } from '~/helpers/localStorage';

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const Row = styled.li`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
`;

const AddPoint = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: rgba(250, 45, 32, 1);
`;

@observer class Points extends Component {
	@action
	handlePointClick = (event) => {
		event.preventDefault();
		saveState('point_type', event.target.id)
	};

	render() {
		return (
			<List>
				{
					POINTS_MENU.map((val, ind) => (
						<Row key={ ind }>
							<div><img src={val.imgSrc}/></div>
							{val.title}
							<AddPoint id={val.id} onClick={ this.handlePointClick }/>
						</Row>
					))
				}
			</List>
		);
	}
}

export default Points;