export const loadState = name => {
	try {
		const serializedState = localStorage.getItem(name);
		return serializedState ? JSON.parse(serializedState) : null;
	} catch (err) {
		console.log(err); // eslint-disable-line no-console
		return null;
	}
};

export const saveState = (name, state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(name, serializedState);
		return state;
	} catch (err) {
		console.log(err); // eslint-disable-line no-console
		return null;
	}
};
