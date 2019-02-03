import React, {Component} from 'react';
import styled from 'styled-components';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

import { saveState } from '~/helpers/localStorage';
import { POINTS } from '~/constants/points';
import { MAIN_COLOR } from '~/constants/styles';

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const Title = styled.h3`
	margin: 0 0 20px;
	font-weight: bold;
`;

const Row = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
	cursor: pointer;
	font-weight: ${ props => props.active ? 'bold' : 'normal'};
	text-align: center;

	img {
		filter: ${ props => props.active ? 'grayscale(0)' : 'grayscale(100%)'};
	}
`;

const Image = styled.img`
	width: 50px;
	padding: 5px;
	background-color: ${ MAIN_COLOR };
	border-radius: 5px;
`;

@observer class Points extends Component {
	@observable activePoint = POINTS[0].id;

	@action
	handlePointClick = (event) => {
		event.preventDefault();
		this.activePoint = event.currentTarget.dataset.pointId;
		saveState('point_type', this.activePoint)
	};

	render() {
		return (
			<List>
				<Title>Чего вам не хватает?</Title>
				{
					POINTS.map( value => (
						<Row
							key={ value.id } 
							data-point-id={ value.id }
							active={ this.activePoint === value.id }
							onClick={ this.handlePointClick } >
							{ value.title }
							<Image 
								src={ value.imgSrc } 
							/>
						</Row>
					))
				}
			</List>
		);
	}
}

export default Points;