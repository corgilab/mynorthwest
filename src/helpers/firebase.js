import firebase from 'firebase'
import * as param from '~/constants/firebase';

let config = {
	apiKey: param.API_KEY,
	authDomain: param.AUTH_DOMAIN,
	databaseURL: param.DATABASE_URL,
	projectId: param.PROJECT_ID,
	storageBucket: param.STORAGE_BUCKET,
	messagingSenderId: param.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

let firestore = firebase.firestore();

function isObject(obj) {
	return (typeof obj === 'object' || obj instanceof Object) &&!!obj;
}

export const insertProfileData = (data) => {
	if (isObject(data) && Object.keys(data).length > 0) {
		firestore.collection('users').add(data).catch((err) => console.log(err));
	}
};

export const selectProfileData = () => {
	firestore.collection('users').get().then((snapshot) => {
		snapshot.docs.forEach(doc => {
			console.log(doc.data())
		})
	});
};