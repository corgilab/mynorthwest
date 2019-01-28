import firebase from 'firebase'
import * as db from '~/constants/firebase';

const firestore = firebase.initializeApp({
		apiKey: db.API_KEY,
		authDomain: db.AUTH_DOMAIN,
		databaseURL: db.DATABASE_URL,
		projectId: db.PROJECT_ID,
		storageBucket: db.STORAGE_BUCKET,
		messagingSenderId: db.MESSAGING_SENDER_ID
	})
	.firestore();

const isObject = (obj) => ((typeof obj === 'object' || obj instanceof Object) && !!obj);

export const insertProfileData = (data) => {
	if (isObject(data) && Object.keys(data).length > 0) {
		return firestore.collection('users').add(data);
	}
};

export const isUserExist = (id) => (
 	firestore.collection('users').doc(id).get()
		.then(doc => doc.exists ? true : false)
		.catch(err => console.error(err))
);

export const selectProfileData = (id) => {
	const user = firestore.collection('users').doc(id);

	user.get()
		.then( doc => {
			if ( doc.exists ){
				console.log(doc.data());
			}
			else{
				throw 'Document isn\'t exists';
			}
		})
		.catch( err => console.error(err) );

};