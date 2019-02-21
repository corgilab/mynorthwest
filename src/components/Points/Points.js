import React, { Component } from 'react';
import styled from 'styled-components';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { MOBILE_SIZE } from '~/constants/common';
import { POINTS } from '~/constants/points';
import { MAIN_COLOR, BORDER_COLOR } from '~/constants/styles';

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const Title = styled.h4`
	margin: 0 0 20px;
	font-weight: normal;

	@media (max-width: ${`${MOBILE_SIZE}px`}) {
		margin: 10px 0 5px;
	}
`;

const Row = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
	cursor: pointer;
	font-weight: ${props => (props.active ? 'bold' : 'normal')};
	text-align: center;

	img {
		filter: ${props => (props.active ? 'grayscale(0)' : 'grayscale(100%)')};
	}
`;

const ExtraList = styled(List)`
	padding-left: 10px;
	font-size: 0.8rem;
`;

const ExtraRow = styled.li`
	position: relative;
	height: 25px;
	transition: all 0.25s linear;
	cursor: pointer;
	font-weight: bold;
`;

const Image = styled.img`
	width: 50px;
	padding: 5px;
	background-color: ${MAIN_COLOR};
	border-radius: 5px;

	@media (max-width: ${`${MOBILE_SIZE}px`}) {
		width: 30px;
	}
`;

const CustomInput = styled.input`
	height: 25px;
	padding-left: 5px;
	border: 2px solid ${props => (props.active ? MAIN_COLOR : BORDER_COLOR)};
`;

@observer
class Points extends Component {
	@observable activePoint = POINTS[0].id;

	@action
	handlePointClick = event => {
		const { store } = this.props;

		event.preventDefault();

		this.activePoint = event.currentTarget.dataset.pointId;
		store.setPointType(this.activePoint);
	};

	handleSubcategoryClick = event => {
		const { store } = this.props;
		store.setPointType(`${this.activePoint}_${event.currentTarget.dataset.subcategoryName}`);
	};

	handleChangeCustomInput = event => {
		const { store } = this.props;
		const inputValue = event.currentTarget.value;
		store.setPointType(`custom_${inputValue}`);
	};

	render() {
		return (
			<List>
				<Title>
					Нужно выбрать категорию и кликнуть на карте там, где поставить метку.
				</Title>
				{POINTS.map(value => (
					<React.Fragment key={value.id}>
						<Row
							data-point-id={value.id}
							active={this.activePoint === value.id}
							onClick={this.handlePointClick}
						>
							{value.id === 'custom' ? (
								<CustomInput
									type='text'
									placeholder={value.title}
									active={this.activePoint === value.id}
									onChange={this.handleChangeCustomInput}
								/>
							) : (
								value.title
							)}
							<Image src={value.imgSrc} />
						</Row>
						{this.activePoint === value.id && value.id !== 'custom' && (
							<ExtraList data-point-id={value.id} active={this.activePoint === value.id}>
								{value.subcategories.map((item, index) => (
									<ExtraRow
										data-subcategory-name={item}
										key={`${value.id}_${index}`}
										onClick={this.handleSubcategoryClick}
									>
										<label htmlFor={`${value.id}_${index}`}>
											<input
												type='radio'
												name={value.id}
												value={item}
												id={`${value.id}_${index}`}
											/>
											{item}
										</label>
									</ExtraRow>
								))}
							</ExtraList>
						)}
					</React.Fragment>
				))}
			</List>
		);
	}
}

Points.propTypes = {
	store: PropTypes.objectOf(PropTypes.shape({})),
};

export default Points;
