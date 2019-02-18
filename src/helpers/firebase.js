import firebase from 'firebase/app';
import 'firebase/firestore';
import * as db from '~/constants/firebase';

const firestore = firebase
	.initializeApp({
		apiKey: db.API_KEY,
		authDomain: db.AUTH_DOMAIN,
		databaseURL: db.DATABASE_URL,
		projectId: db.PROJECT_ID,
		storageBucket: db.STORAGE_BUCKET,
		messagingSenderId: db.MESSAGING_SENDER_ID,
	})
	.firestore();

const _isObject = obj => (typeof obj === 'object' || obj instanceof Object) && !!obj;

const _insert = (collectionName, data) => {
	if (_isObject(data) && Object.keys(data).length > 0) {
		return firestore.collection(collectionName).add(data);
	}
};

export const insertProfileData = data => _insert('users', data);

export const isUserExist = id =>
	firestore
		.collection('users')
		.doc(id)
		.get()
		.then(doc => doc.exists)
		.catch(err => console.error(err)); // eslint-disable-line no-console

export const selectProfileData = id => {
	const user = firestore.collection('users').doc(id);

	user.get()
		.then(doc => {
			if (doc.exists) {
				console.log(doc.data()); // eslint-disable-line no-console
			} else {
				throw "Document isn't exists";
			}
		})
		.catch(err => console.error(err)); // eslint-disable-line no-console
};

export const insertPoint = data => _insert('points', data);

export const selectPoints = () => {
	const points = firestore.collection('points');
	const userPoints = [];
	return points
		.get()
		.then(snapshot => {
			snapshot.docs.forEach(doc => {
				if (doc.exists) {
					const point = doc.data();
					if (point.userId) {
						userPoints.push(point);
					}
				} else {
					throw "Document isn't exists";
				}
			});
			return userPoints;
		})
		.catch(err => console.error(err)); // eslint-disable-line no-console
};

export const deletePoint = (point) => {
	const deleteQuery = firestore.collection('points')
		.where("long", "==", point.long)
		.where("lat", "==", point.lat);

	deleteQuery.get()
		.then( querySnapshot => {
			querySnapshot.forEach( doc => {
				doc.ref.delete();
			})
		})
		.catch( err => console.error(err) );
}
