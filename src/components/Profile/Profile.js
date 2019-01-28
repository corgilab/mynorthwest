import React from 'react';
import styled from 'styled-components';

import { saveState } from '~/helpers/localStorage';
import { AGES, SEX, ANSWERS, ACTIONS } from '~/constants/profile';
import { insertProfileData } from '~/helpers/firebase';

const StyledProfile = styled.form`

`;

const Title = styled.h4`
	margin: 0;
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	font-size: 0.8rem;
`;

class Profile extends React.PureComponent {
	state = {
		age: null,
		sex: null,
		answer: null,
		action: [],
	}

	handleSubmit = (event) => {
		event.preventDefault();

		let checkedActions = [];
		event.target.action.forEach(
			(elem, index) => (
				checkedActions[index] = elem.checked ? elem.value : null
				)
		);

		const profileData = {
			age: event.target.age.value,
			sex: event.target.sex.value,
			answer: event.target.answer.value,
			action: checkedActions,
		};

		// Add profile data to Firebase and save user's id in localStorage
		insertProfileData(profileData)
			.then(res => { saveState('user_id', res.id); return res.id } )
			.catch( err => console.error(err) );
	}

	componentDidMount(){
		//this.setState( loadState() );
	}

	componentDidUpdate(){
		//saveState(this.state);
	}

	render(){
		return (
			<StyledProfile onSubmit={ this.handleSubmit }>
				<Title>Пожалуйста заполните анкету</Title>
				<List>
					<Title>Ваш Возраст</Title>
					{
						AGES.map((value, index) => (
							<li key={ index }>
								<input 
									required
									type='radio' 
									name='age' 
									value={ value }
									id={`age${ index }`} />
								<label htmlFor={`age${ index }`}>{ value }</label>
							</li>
						))
					}
				</List>
				<List>
					<Title>Пол</Title>
					{
						SEX.map((value, index) => (
							<li key={ index }>
								<input
									required
									type='radio'
									name='sex'
									value={ value }
									id={`sex${ index }`} />
								<label htmlFor={`sex${index}`}>{ value }</label>
							</li>
						))
					}
				</List>
				<List>
					<Title>Вы проживаете на территории Северо-Запада?</Title>
					{
						ANSWERS.map((value, index) => (
							<li key={ index }>
								<input
									required
									type='radio'
									name='answer'
									value={ value }
									id={`answer${ index }`} />
								<label htmlFor={`answer${ index }`}>{ value }</label>
							</li>
						))
					}
				</List>
				<List>
					<Title>На Северо-Западе Вы:</Title>
					{
						ACTIONS.map((value, index) => (
							<li key={index}>
								<input
									type='checkbox'
									name='action'
									value={ value }
									id={`action${index}`} />
								<label htmlFor={`action${index}`}>{value}</label>
							</li>
						))
					}
				</List>
				<input 
					type='submit'
					value='Сохранить' />
			</StyledProfile>
		);
	}
}

export default Profile;