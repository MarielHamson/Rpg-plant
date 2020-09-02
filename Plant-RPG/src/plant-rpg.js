// import * as tools from './tools';
export const storeState = (initialState) => {
	let currentState = initialState;
	return (stateChangeFunction = (state) => state) => {
		const newState = stateChangeFunction(currentState);
		currentState = { ...newState };
		return newState;
	};
};

export const changeState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: (state[prop] || 0) + value,
		});
	};
};

export const changeStringState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: value,
		});
	};
};

const initialState = { water: 10, seeds: 10, petals: 1 };
const stateControl = storeState(initialState);
export const assignName = changeStringState('name');
const plantName = assignName('Sunflower');
const plantWithName = stateControl(plantName);
console.log(plantWithName);
