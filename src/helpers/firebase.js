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

export const firestore = firebase.firestore();