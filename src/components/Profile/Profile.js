import React from 'react';
import styled from 'styled-components';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { saveState } from '~/helpers/localStorage';
import { AGES, SEX, ANSWERS, ACTIONS } from '~/constants/profile';
import { MAIN_COLOR, FONT_COLOR } from '~/constants/styles';
import { insertProfileData } from '~/helpers/firebase';

const StyledProfile = styled.form`

`;

const Header = styled.h3`
	margin: 0 0 20px;
	font-weight: bold;
`;

const Title = styled.h4`
	margin: 15px 0 5px;
`;

const List = styled.ul`
	list-style: none;
	margin: 0 0 5px;
	padding: 0;
	font-size: 0.8rem;
`;

const Item = styled.li`
	label {
		margin-left: 5px;
	}
`;

const Button = styled.input`
	display: block;
	height: 40px;
	color: ${ FONT_COLOR };
	background-color: ${ MAIN_COLOR };
	font-family: inherit;
	font-size: 14px;
	width: 80%;
	border: none;
	margin: 20px auto 0;
	font-weight: bold;
`;

@observer class Profile extends React.Component {
	@observable saveInputDisabled = false;

	_getSubmitData = (target) => {
		const checkedActions = [];
		target.action.forEach(
			(elem, index) => (
				checkedActions[index] = elem.checked ? elem.value : null
			)
		);

		return {
			age: target.age.value,
			sex: target.sex.value,
			answer: target.answer.value,
			action: checkedActions,
		};
	}

	@action
	handleSubmit = (event) => {
		const profileData = this._getSubmitData(event.target);
		const { store } = this.props;
		
		event.preventDefault();
		this.saveInputDisabled = true;

		// Add profile data to Firebase and save user's id in localStorage
		insertProfileData(profileData)
			.then( res => saveState('user_id', res.id) )
			.then( res => store.setUserId(res) )
			.catch( err => console.error(err) ) // eslint-disable-line no-console
			.finally(() => this.saveInputDisabled = false);
	}

	render(){
		return (
			<StyledProfile onSubmit={ this.handleSubmit }>
				<Header>Пожалуйста заполните анкету</Header>
				<List>
					<Title>Ваш Возраст</Title>
					{
						AGES.map((value, index) => (
							<Item key={ index }>
								<label htmlFor={`age${ index }`}>
									<input
										required
										type='radio'
										name='age'
										value={value}
										id={`age${index}`}
									/>
									{ value }
								</label>
							</Item>
						))
					}
				</List>
				<List>
					<Title>Пол</Title>
					{
						SEX.map((value, index) => (
							<Item key={ index }>
								<label htmlFor={`sex${index}`}>
									<input
										required
										type='radio'
										name='sex'
										value={value}
										id={`sex${index}`}
									/>
									{ value }
								</label>
							</Item>
						))
					}
				</List>
				<List>
					<Title>Вы проживаете на территории Северо-Запада?</Title>
					{
						ANSWERS.map((value, index) => (
							<Item key={ index }>
								<label htmlFor={`answer${ index }`}>
									<input
										required
										type='radio'
										name='answer'
										value={value}
										id={`answer${index}`}
									/>
									{ value }
								</label>
							</Item>
						))
					}
				</List>
				<List>
					<Title>На Северо-Западе Вы:</Title>
					{
						ACTIONS.map((value, index) => (
							<Item key={ index }>
								<label htmlFor={`action${index}`}>
									<input
										type='checkbox'
										name='action'
										value={value}
										id={`action${index}`}
									/>
									{value}
								</label>
							</Item>
						))
					}
				</List>
				<Button 
					name='save'
					disabled={ this.saveInputDisabled }
					type='submit'
					value='Сохранить'
				/>
			</StyledProfile>
		);
	}
}

Profile.propTypes = {
	store: PropTypes.objectOf(PropTypes.shape({})),
}

export default Profile;