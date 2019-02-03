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

const _isObject = (obj) => ((typeof obj === 'object' || obj instanceof Object) && !!obj);

const _insert = (collectionName, data) => {
	if (_isObject(data) && Object.keys(data).length > 0) {
		return firestore.collection(collectionName).add(data);
	}
}

export const insertProfileData = (data) => (
	_insert('users', data)
);

export const isUserExist = (id) => (
	firestore.collection('users').doc(id).get()
		.then(doc => doc.exists ? true : false)
		.catch(err => console.error(err))
);

export const selectProfileData = (id) => {
	const user = firestore.collection('users').doc(id);

	user.get()
		.then( doc => {
			if ( doc.exists ) {
				console.log(doc.data());
			}
			else {
				throw 'Document isn\'t exists';
			}
		})
		.catch( err => console.error(err) );
};

export const insertPoint = (data) => (
	_insert('points', data)
);

export const selectPoints = (id) => {
	const points = firestore.collection('points');
	let userPoints = [];
	points.get()
		.then( snapshot => {
			snapshot.docs.forEach(doc => {
				if (doc.exists) {
					if (doc.data().userId === id) {
						userPoints.push(doc.data());
					}
				} else {
					throw 'Document isn\'t exists';
				}
			});
			return userPoints;
		})
		.catch( err => console.error(err) );
	return userPoints;
};
