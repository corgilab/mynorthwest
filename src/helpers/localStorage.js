export const loadState = (name) => {
	try {
		const serializedState = localStorage.getItem(name);
		return serializedState ? JSON.parse(serializedState) : undefined;
	}
	catch (err) {
		console.log(err);
		return null;
	}
}

export const saveState = (name, state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(name, serializedState);
	}
	catch (err) {
		console.log(err);
		return null;
	}
}